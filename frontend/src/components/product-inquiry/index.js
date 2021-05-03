import React, { useState } from "react";
import email from "../../assets/product/email.svg";
import phone from "../../assets/product/phone.svg";
import { LightTextarea } from "../elements";
import {
  ProductInquiryContainer,
  InquiryTags,
  Tag,
  InquiryButtons,
  InquiryButtonsChild,
  ButtonIcon,
} from "./styles";

const inquiryTags = [
  {
    value: "neighborhoodProfile",
    label: "Neighborhood Profile",
  },
  {
    value: "tourDates",
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
    value: "termsOfPayment",
    label: "Terms of Payment",
  },
  {
    value: "similarProperties",
    label: "Similar Properties",
  },
];

const ProductInquiry = () => {
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <ProductInquiryContainer>
      <h2 className="btn-rubik">
        Contact Bel-Air Residences about{" "}
        <span id="property-name">Andrea Duplex Unit</span> directly!
      </h2>
      <span>I want to inquire about...</span>
      <InquiryTags>
        {inquiryTags.map((tag) => (
          <Tag
            key={tag.value}
            onClick={() => setSelectedTag(tag.value)}
            selected={tag.value == selectedTag}
          >
            {tag.label}
          </Tag>
        ))}
      </InquiryTags>
      <LightTextarea placeholder="Additional things you want to include (optional)"></LightTextarea>
      <InquiryButtons>
        <InquiryButtonsChild>
          <ButtonIcon src={email} alt="Email" />
          INQUIRE&nbsp;VIA&nbsp;EMAIL
        </InquiryButtonsChild>
        <InquiryButtonsChild>
          <ButtonIcon src={phone} alt="Phone" />
          INQUIRE&nbsp;VIA&nbsp;PHONE*
        </InquiryButtonsChild>
      </InquiryButtons>
      <i id="sms-charges">*SMS charges may apply</i>
    </ProductInquiryContainer>
  );
};

export default ProductInquiry;
