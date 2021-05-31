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
import styled from "styled-components";

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

const Step11 = () => {
  return (
    <Step11Frame>
      <Content>
        <img
          src={formComplete}
          alt="Form Complete"
          style={{ marginBottom: "1em" }}
        />
        <h1>Hannah, you’re now signed up and your inquiry has been sent!</h1>
        <p>
          Please expect a reply from Alveo Land Corp. that will be sent to{" "}
          <b>hannah@gmail.com</b>.
          <br />
          Alveo Land usually takes <b>30 minutes</b> to reply for inquiries sent
          in business days.
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
