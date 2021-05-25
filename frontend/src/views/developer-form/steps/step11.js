import React from "react";
import { FormDiv, FormFrame, SignupOutlineButton } from "../styles";
import formComplete from "../../../assets/form/form-complete.svg";
import logo from "../../../assets/navbar/largeLogoDark.svg";

const Step11 = ({ isSubmitting }) => {
  return (
    <React.Fragment>
      <img src={formComplete} alt="Form Complete" />
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
          <SignupOutlineButton>BACK TO HOME</SignupOutlineButton>
        </FormFrame>
      </FormDiv>
      <img src={logo} alt="Instahomes" />
    </React.Fragment>
  );
};

export default Step11;