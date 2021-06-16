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

const Step4 = ({ isSubmitting, values, previous, errors }) => {
  return (
    <Frame>
      <Content>
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
            <SignupOrangeButton
              disabled={isSubmitting || values.address == "" || errors.address}
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

export default Step4;
