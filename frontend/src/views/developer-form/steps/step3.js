import React from "react";
import {
  FormDiv,
  FormFrame,
  SignupOrangeButton,
  SecondaryButton,
  SignupInput,
  FormErrorMessage,
} from "../styles";
import { Field } from "formik";

const Step3 = ({ isSubmitting, values, previous }) => {
  return (
    <React.Fragment>
      <h1>Contact Information</h1>
      <p>
        Place your preferred contact number. To list your email address, click
        the + icon.
      </p>
      <FormDiv>
        <FormFrame>
          <FormErrorMessage component="span" name="name" />
          <SignupInput
            as={Field}
            placeholder="Contact Number"
            name="contactNumber"
          />
          <SignupOrangeButton disabled={isSubmitting} type="submit">
            NEXT PAGE
          </SignupOrangeButton>
          <SecondaryButton onClick={() => previous(values)}>
            GO BACK
          </SecondaryButton>
        </FormFrame>
      </FormDiv>
    </React.Fragment>
  );
};

export default Step3;
