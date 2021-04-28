import email from "../../assets/product/email.svg";
import phone from "../../assets/product/phone.svg";
import { LightTextarea } from "../elements";
import {
  ProductInquiryContainer,
  InquiryTags,
  InquiryButtons,
  InquiryButtonsChild,
  ButtonIcon,
} from "./styles";

const ProductInquiry = () => {
  return (
    <ProductInquiryContainer>
      <h2 className="btn-rubik">
        Contact Bel-Air Residences about{" "}
        <span id="property-name">Andrea Duplex Unit</span> directly!
      </h2>
      <span>I want to inquire about...</span>
      <InquiryTags>
        <span>Neighborhood Profile</span>
        <span>Tour Dates</span>
        <span>Benefits</span>
        <span>Downpayment</span>
        <span>Terms of Payment</span>
        <span>Similar Properties</span>
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
