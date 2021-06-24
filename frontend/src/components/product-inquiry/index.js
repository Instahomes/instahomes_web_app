import React, { useState } from "react";
import email from "../../assets/product/email.svg";
import phone from "../../assets/product/phone.svg";
import check from "../../assets/product/check.svg";
import { LightTextarea } from "../elements";
import {
  ProductInquiryContainer,
  InquiryTags,
  Tag,
  InquiryButtons,
  InquiryButtonsChild,
  ButtonIcon,
  Footnotes,
} from "./styles";
import { useHistory } from "react-router-dom";
import { isAuthenticated, hasProfile, getProfile } from "../../services/auth";
import { createInquiry } from "../../services/users";
import { FormErrorMessage } from "../elements";
import Loading from "../loading";

const inquiryTags = [
  {
    value: "neighborhood",
    label: "Neighborhood Profile",
  },
  {
    value: "tour",
    label: "Tour Dates",
  },
  {
    value: "benefits",
    label: "Benefits",
  },
  {
    value: "downpayment",
    label: "Downpayment",
  },
  {
    value: "terms",
    label: "Terms of Payment",
  },
  {
    value: "similar",
    label: "Similar Properties",
  },
  {
    value: "other",
    label: "Other",
  },
];

const ProductInquiry = React.memo(({ listing }) => {
  const [category, setCategory] = useState("");
  const [additional, setAdditional] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleInquire = async () => {
    if (!category) {
      setMessage("Please select a category.");
    } else if (isAuthenticated() && hasProfile()) {
      const profile = getProfile();
      setIsLoading(true);
      await createInquiry(
        { profile: profile.id, category, additional, listing: listing.id },
        () => {
          setIsLoading(false);
          history.push("/inquire", {
            listing,
            inquiry: { category, additional, listing: listing.id },
          });
        },
        () => {
          setIsLoading(false);
          setMessage("Something went wrong. Please try submitting again.");
        }
      );
    } else {
      history.push("/inquire", {
        listing,
        inquiry: { category, additional, listing: listing.id },
      });
    }
  };

  return (
    <ProductInquiryContainer>
      {isLoading ? (
        <Loading message="The inquiry is being sent, please wait a moment..." />
      ) : (
        <React.Fragment>
          <h2 className="btn-rubik">
            Contact{" "}
            <span id="property-developer">{listing.developer.name}</span>{" "}
            directly &nbsp;
            <img src={check} alt="Check" />
          </h2>
          <span>I want to inquire about...</span>
          <InquiryTags>
            {inquiryTags.map((tag) => (
              <Tag
                key={tag.value}
                onClick={() => {
                  tag.value == category
                    ? setCategory("")
                    : setCategory(tag.value);
                  setMessage("");
                }}
                selected={tag.value == category}
              >
                {tag.label}
              </Tag>
            ))}
          </InquiryTags>
          <LightTextarea
            placeholder="Additional things you want to include (optional)"
            value={additional}
            name="additional"
            onChange={(e) => setAdditional(e.target.value)}
          ></LightTextarea>
          <InquiryButtons>
            <InquiryButtonsChild onClick={async () => await handleInquire()}>
              <ButtonIcon src={email} alt="Email" />
              INQUIRE&nbsp;VIA&nbsp;EMAIL
            </InquiryButtonsChild>
            <InquiryButtonsChild onClick={async () => await handleInquire()}>
              <ButtonIcon src={phone} alt="Phone" />
              INQUIRE&nbsp;VIA&nbsp;PHONE*
            </InquiryButtonsChild>
          </InquiryButtons>
          <Footnotes>
            <span id="direct-dev">
              <img src={check} alt="Check" />
              Direct to Official Developer
            </span>
            <i id="sms-charges">*SMS charges may apply</i>
          </Footnotes>
          {message && (
            <FormErrorMessage as="span" style={{ marginTop: "1em" }}>
              {message}
            </FormErrorMessage>
          )}
        </React.Fragment>
      )}
    </ProductInquiryContainer>
  );
});

export default ProductInquiry;
