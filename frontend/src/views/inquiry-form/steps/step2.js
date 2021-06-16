import React from "react";
import {
  Frame,
  Content,
  FormDiv,
  FormFrame,
  SignupOrangeButton,
  SecondaryButton,
  SignupInput,
  FormErrorMessage,
} from "../styles";
import { Field } from "formik";

const Step2 = ({ isSubmitting, values, previous, errors }) => {
  return (
    <Frame>
      <Content>
        <h1>What's your name?</h1>
        <p>Please list your full birth name in the form below</p>
        <FormDiv>
          <FormFrame>
            <FormErrorMessage component="span" name="name" />
            <SignupInput as={Field} placeholder="Full Name" name="name" />
            <SignupOrangeButton
              disabled={isSubmitting || values.name == "" || errors.name}
              type="submit"
            >
              NEXT PAGE
            </SignupOrangeButton>
            <SecondaryButton onClick={() => previous(values)}>
              GO BACK
            </SecondaryButton>
          </FormFrame>
        </FormDiv>
      </Content>
    </Frame>
  );
};

export default Step2;
