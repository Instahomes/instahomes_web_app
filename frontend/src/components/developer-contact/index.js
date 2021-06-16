import React from "react";
import email from "../../assets/product/email.svg";
import phone from "../../assets/product/phone.svg";

import {
  ContactComponent,
  InquiryButtons,
  InquiryButtonsChild,
  ButtonIcon,
  Footnotes,
} from "./styles";

const Contact = ({ name }) => (
  <ContactComponent>
    <h2 className="h2">Get in touch with {name} directly today!</h2>
    <InquiryButtons>
      <InquiryButtonsChild>
        <ButtonIcon src={email} alt="Email" />
        CONTACT&nbsp;VIA&nbsp;EMAIL
      </InquiryButtonsChild>
      <InquiryButtonsChild>
        <ButtonIcon src={phone} alt="Phone" />
        CONTACT&nbsp;VIA&nbsp;PHONE*
      </InquiryButtonsChild>
    </InquiryButtons>
    <div>
      <Footnotes>
        <i>*SMS charges may apply</i>
      </Footnotes>
    </div>
  </ContactComponent>
);

export default Contact;
