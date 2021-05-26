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

const Step4 = ({ isSubmitting, values, previous }) => {
  return (
    <React.Fragment>
      <h1>Preferred Location</h1>
      <p>
        Place your preferred location. To choose current location, click the
        icon.
      </p>
      <FormDiv>
        <FormFrame>
          <FormErrorMessage component="span" name="name" />
          <SignupInput
            as={Field}
            placeholder="Address or Landmark"
            name="address"
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

export default Step4;
