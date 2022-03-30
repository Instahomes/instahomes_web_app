import React from "react";
import {
  Frame,
  Content,
  FormDiv,
  FormFrame,
  SignupOutlineButton,
} from "../styles";
import formComplete from "../../../assets/form/form-complete.svg";
import logo from "../../../assets/navbar/largeLogoDark.svg";
import { getProfile } from "../../../services/auth";
import styled from "styled-components";
import {
  IS_SIGNING_UP,
  IS_NOT_SIGNING_UP,
  IS_AUTHENTICATED_WITH_PROFILE,
  IS_AUTHENTICATED_NO_PROFILE,
} from "../constants";

const Step11Frame = styled(Frame)`
  background: ${({ theme }) => theme.colors.mainBg};
  height: 88vh;

  h1,
  p {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

const Step11Button = styled(SignupOutlineButton)`
  background: ${({ theme }) => theme.colors.softWhite};
  border: 1.5px solid ${({ theme }) => theme.colors.darkHeader};
  color: ${({ theme }) => theme.colors.darkHeader};
`;

const Step11 = ({ listing, values, inquiryState }) => {
  const profile = getProfile();

  const getFinalMessage = () => {
    switch (inquiryState) {
      case IS_SIGNING_UP:
        return `${values.name}, you’re now signed up and your inquiry has been sent!`;
      case IS_NOT_SIGNING_UP:
        return `Your inquiry has been sent to ${listing.developer.name}!`;
      case IS_AUTHENTICATED_WITH_PROFILE:
        return `${values.name}, your profile has been created and your inquiry has been sent!`;
      case IS_AUTHENTICATED_NO_PROFILE:
        return `Your inquiry has been sent to ${listing.developer.name}!`;
    }
  };

  return (
    <Step11Frame>
      <Content>
        <img
          src={formComplete}
          alt="Form Complete"
          style={{ marginBottom: "1em" }}
        />
        <h1>{getFinalMessage()}</h1>
        <p>
          Please expect a reply from {listing.developer.name} that will be sent
          to{" "}
          <b>
            {values.contactNumber ||
              values.email ||
              profile.contactNumber ||
              profile.email}
          </b>
          .
          <br />
          {listing.developer.name} usually takes <b>30 minutes</b> to reply for
          inquiries sent in business days.
        </p>
        <FormDiv>
          <FormFrame>
            <Step11Button type="submit">BACK TO HOME</Step11Button>
          </FormFrame>
        </FormDiv>
        <img src={logo} alt="Instahomes" />
      </Content>
    </Step11Frame>
  );
};

export default Step11;
