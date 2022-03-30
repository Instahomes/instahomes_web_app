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
} from "../styles";
import { Field } from "formik";
import { FormErrorMessage } from "../../../components/elements";

const Step3 = ({
  isSubmitting,
  values,
  previous,
  errors,
  setFieldValue,
  handleChange,
}) => {
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
                onChange={(e) => {
                  if (e.target.value.startsWith("09")) {
                    setFieldValue(
                      "contactNumber",
                      "+639" + e.target.value.substring(2)
                    );
                  } else {
                    handleChange(e);
                  }
                }}
              />
              <InputHelper
                onClick={() => setShowEmail(!showEmail)}
                style={{ right: showEmail ? "-12.5em" : "-10.5em" }}
              >
                {showEmail ? "- Remove email address" : "+ Add email address"}
              </InputHelper>
            </SignupInputWithHelper>
            {showEmail && (
              <React.Fragment>
                <FormErrorMessage component="span" name="email" />
                <SignupInput
                  as={Field}
                  placeholder="Email Address"
                  name="email"
                />
              </React.Fragment>
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
