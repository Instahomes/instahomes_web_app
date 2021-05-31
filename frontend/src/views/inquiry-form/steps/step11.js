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

const Step11 = ({ isSubmitting }) => {
  return (
    <Frame>
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
            <SignupOutlineButton type="submit">
              BACK TO HOME
            </SignupOutlineButton>
          </FormFrame>
        </FormDiv>
        <img src={logo} alt="Instahomes" />
      </Content>
    </Frame>
  );
};

export default Step11;
