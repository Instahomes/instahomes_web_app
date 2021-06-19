import React from "react";
import {
  Frame,
  Content,
  FormDiv,
  FormFrame,
  SignupOrangeButton,
  SignupOutlineButton,
} from "../styles";
import styled from "styled-components";
import logo from "../../../assets/navbar/largeLogoDark.svg";
import step1Bg from "../../../assets/form/step1Bg.jpeg";
import {
  IS_SIGNING_UP,
  IS_NOT_SIGNING_UP,
  IS_AUTHENTICATED_NO_PROFILE,
} from "../constants";

const InstahomesLogo = styled.img`
  width: 250px;
`;

const Step1Frame = styled(Frame)`
  background: linear-gradient(
      0deg,
      rgba(26, 37, 52, 0.95),
      rgba(26, 37, 52, 0.95)
    ),
    url(${step1Bg});
  background-size: cover;
  height: 88vh;
`;

const Step1 = ({ isSubmitting, setInquiryState, listing, inquiryState }) => {
  const isAuthenticatedNoProfile = inquiryState == IS_AUTHENTICATED_NO_PROFILE;
  return (
    <Step1Frame>
      <Content>
        <h1>
          Inquire{" "}
          {listing &&
            `about ${listing.developer.name}’s ${listing.development.name} ${listing.name}`}{" "}
          today
        </h1>
        <p>
          Hi there! To make your investment process{" "}
          {listing && `with ${listing.developer.name}`} easier, we’ll just need
          a couple of preset information.{" "}
          {isAuthenticatedNoProfile &&
            "Since you're signed up, we'll only need you to answer once."}{" "}
          <br />
          Don’t worry, all information here will not be shared with anyone aside
          from the direct developer.
        </p>
        {!isAuthenticatedNoProfile && (
          <p>
            First, would you like to save your information for other inquiries
            by signing up?
          </p>
        )}
        <FormDiv>
          <FormFrame>
            {isAuthenticatedNoProfile ? (
              <SignupOrangeButton disabled={isSubmitting} type="submit">
                ANSWER NOW
              </SignupOrangeButton>
            ) : (
              <React.Fragment>
                <SignupOrangeButton
                  disabled={isSubmitting}
                  onClick={() => setInquiryState(IS_SIGNING_UP)}
                  type="submit"
                >
                  ANSWER & SIGN UP <i>it's free</i>
                </SignupOrangeButton>
                <SignupOutlineButton
                  disabled={isSubmitting}
                  onClick={() => setInquiryState(IS_NOT_SIGNING_UP)}
                  type="submit"
                >
                  JUST ANSWER
                </SignupOutlineButton>
              </React.Fragment>
            )}
          </FormFrame>
        </FormDiv>
        <p>Either form only takes approx. 3 mins</p>
        <InstahomesLogo src={logo} alt="Instahomes" />
      </Content>
    </Step1Frame>
  );
};

export default Step1;
