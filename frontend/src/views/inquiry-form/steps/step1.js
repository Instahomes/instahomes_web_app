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

const InstahomesLogo = styled.img`
  width: 250px;
`;

const Step1 = ({ isSubmitting, setIsSigningUp }) => {
  return (
    <Frame>
      <Content>
        <h1>Inquire about Alveo Land’s The Lattice 1-Bedroom Unit today</h1>
        <p>
          Hi there! To make your investment process with Alveo Land easier,
          we’ll just need a couple of preset information. <br />
          Don’t worry, all information here will not be shared with anyone aside
          from the direct developer.
        </p>
        <p>
          First, would you like to save your information for other inquiries by
          signing up?
        </p>
        <FormDiv>
          <FormFrame>
            <SignupOrangeButton disabled={isSubmitting} type="submit">
              ANSWER & SIGN UP <i>it's free</i>
            </SignupOrangeButton>
            <SignupOutlineButton
              disabled={isSubmitting}
              onClick={() => setIsSigningUp(false)}
              type="submit"
            >
              JUST ANSWER
            </SignupOutlineButton>
          </FormFrame>
        </FormDiv>
        <p>Either form only takes approx. 3 mins</p>
        <InstahomesLogo src={logo} alt="Instahomes" />
      </Content>
    </Frame>
  );
};

export default Step1;
