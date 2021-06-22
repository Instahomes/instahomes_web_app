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

const Step1Container = styled.main`
  width: 100%;
`;

const Step1Frame = styled(Frame)`
  background: linear-gradient(
      0deg,
      rgba(26, 37, 52, 0.95),
      rgba(26, 37, 52, 0.95)
    ),
    url(${step1Bg});
  background-size: cover;
`;

const Step1TopBar = styled.div`
  max-width: 100%;
  background: ${({ theme }) => theme.colors.mainBg};
  padding: 24px;
  text-align: center;

  span {
    font-size: 1em;
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 7px;
    display: inline-block;
    position: relative;

    svg {
      position: absolute;
      top: 5px;
    }
  }

  .normal-text {
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  .what-for {
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 500;
  }
`;

const Step1 = ({ isSubmitting, setInquiryState, listing, inquiryState }) => {
  const isAuthenticatedNoProfile = inquiryState == IS_AUTHENTICATED_NO_PROFILE;
  return (
    <Step1Container>
      <Step1TopBar>
        <div className="icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0C4.0374 0 0 4.0374 0 9C0 13.9626 4.0374 18 9 18C13.9626 18 18 13.9626 18 9C18 4.0374 13.9626 0 9 0ZM9 3.69C9.2314 3.69 9.45761 3.75862 9.65002 3.88718C9.84242 4.01574 9.99238 4.19847 10.0809 4.41226C10.1695 4.62605 10.1927 4.8613 10.1475 5.08826C10.1024 5.31521 9.99094 5.52369 9.82731 5.68732C9.66369 5.85094 9.45521 5.96237 9.22826 6.00752C9.0013 6.05266 8.76605 6.02949 8.55226 5.94094C8.33847 5.85239 8.15574 5.70242 8.02718 5.51002C7.89862 5.31761 7.83 5.0914 7.83 4.86C7.83 4.5497 7.95327 4.2521 8.17269 4.03268C8.3921 3.81327 8.6897 3.69 9 3.69ZM11.16 13.86H7.2C7.00904 13.86 6.82591 13.7841 6.69088 13.6491C6.55586 13.5141 6.48 13.331 6.48 13.14C6.48 12.949 6.55586 12.7659 6.69088 12.6309C6.82591 12.4959 7.00904 12.42 7.2 12.42H8.46V8.46H7.74C7.54904 8.46 7.36591 8.38414 7.23088 8.24912C7.09586 8.11409 7.02 7.93096 7.02 7.74C7.02 7.54904 7.09586 7.36591 7.23088 7.23088C7.36591 7.09586 7.54904 7.02 7.74 7.02H9.18C9.37096 7.02 9.55409 7.09586 9.68912 7.23088C9.82414 7.36591 9.9 7.54904 9.9 7.74V12.42H11.16C11.351 12.42 11.5341 12.4959 11.6691 12.6309C11.8041 12.7659 11.88 12.949 11.88 13.14C11.88 13.331 11.8041 13.5141 11.6691 13.6491C11.5341 13.7841 11.351 13.86 11.16 13.86Z"
              fill="#FF6700"
            />
          </svg>
        </div>
        &nbsp;&nbsp;
        <span className="what-for">What's this for?</span>&nbsp;
        <span className="normal-text">
          Instahomes automates the initial agent-buyer interview questions to
          make your buying process faster and easier. Don’t worry, this
          information will only be shared to the developer you’re inquiring to.
        </span>
      </Step1TopBar>
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
            {listing && `with ${listing.developer.name}`} easier, we’ll just
            need a couple of preset information.{" "}
            {isAuthenticatedNoProfile &&
              "Since you're signed up, we'll only need you to answer once."}{" "}
            <br />
            Don’t worry, all information here will not be shared with anyone
            aside from the direct developer.
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
    </Step1Container>
  );
};

export default Step1;
