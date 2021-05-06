import React from "react";
import {
  FormDiv,
  FormFrame,
  SignupOrangeButton,
  SignupOutlineButton,
} from "../styles";
import logo from "../../../assets/navbar/logoDark.svg";

const Step1 = ({ isSubmitting }) => {
  return (
    <React.Fragment>
      <h1>Inquire about Alveo Land’s The Lattice 1-Bedroom Unit today</h1>
      <p>
        Hi there! To make your investment process with Alveo Land easier, we’ll
        just need a couple of preset information. <br />
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
          <SignupOutlineButton>JUST ANSWER</SignupOutlineButton>
        </FormFrame>
      </FormDiv>
      <p>Either form only takes approx. 3 mins</p>
      <img src={logo} alt="Instahomes" />
    </React.Fragment>
  );
};

export default Step1;
