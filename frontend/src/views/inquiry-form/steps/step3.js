import React, { useState } from "react";
import {
  Frame,
  Content,
  FormDiv,
  FormFrame,
  SignupOrangeButton,
  SecondaryButton,
  SignupInput,
  SignupInputWithHelper,
  InputHelper,
  FormErrorMessage,
} from "../styles";
import { Field } from "formik";

const Step3 = ({ isSubmitting, values, previous, errors }) => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <Frame>
      <Content>
        <h1>Contact Information</h1>
        <p>
          Place your preferred contact number. To list your email address, click
          the + icon.
        </p>
        <FormDiv>
          <FormFrame>
            <FormErrorMessage component="span" name="contactNumber" />
            <SignupInputWithHelper>
              <SignupInput
                as={Field}
                placeholder="Contact Number"
                name="contactNumber"
              />
              <InputHelper
                onClick={() => setShowEmail(!showEmail)}
                style={{ right: showEmail ? "-12.5em" : "-10.5em" }}
              >
                {showEmail ? "- Remove email address" : "+ Add email address"}
              </InputHelper>
            </SignupInputWithHelper>
            {showEmail && (
              <SignupInput
                as={Field}
                placeholder="Email Address"
                name="email"
              />
            )}
            <SignupOrangeButton
              disabled={
                isSubmitting ||
                values.contactNumber == "" ||
                errors.contactNumber
              }
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

export default Step3;
