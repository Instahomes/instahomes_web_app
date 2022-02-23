import React from "react";
import {
  Frame,
  Content,
  FormDiv,
  FormFrame,
  SignupOrangeButton,
  SecondaryButton,
  SignupInput,
} from "../styles";
import { Field } from "formik";
import security from "../../../assets/form/security.svg";
import styled from "styled-components";
import { FormErrorMessage } from "../../../components/elements";

const PasswordFrame = styled(Frame)`
  background: ${({ theme }) => theme.colors.darkHeader};
  height: 88vh;

  p {
    color: #d7e4f5;
  }
`;

const PasswordInput = styled(SignupInput)`
  background: rgba(148, 173, 207, 0.12);
  border: 1px solid #879ebb;
`;

const Step10 = ({
  isSubmitting,
  values,
  previous,
  errors,
  FormLoading,
  FormErrorsComponent,
}) => {
  return (
    <PasswordFrame>
      <FormLoading>
        <Content>
          <img src={security} alt="Security" />
          <h1>Secure your account with a Password</h1>
          <p>
            Awesome! You're almost done. To save your information for other
            inquiries, create a password.
          </p>
          <FormDiv>
            <FormFrame>
              <FormErrorMessage component="span" name="password" />
              <FormErrorMessage component="span" name="confirmPassword" />
              <FormErrorsComponent />
              <PasswordInput
                as={Field}
                placeholder="Password"
                type="password"
                name="password"
              />
              <PasswordInput
                as={Field}
                placeholder="Retype Password"
                type="password"
                name="confirmPassword"
              />
              <SignupOrangeButton
                disabled={
                  isSubmitting ||
                  values.password == "" ||
                  values.confirmPassword == "" ||
                  errors.password ||
                  errors.confirmPassword
                }
                type="submit"
              >
                SUBMIT FORM & SIGNUP
              </SignupOrangeButton>
              <SecondaryButton onClick={() => previous(values)}>
                GO BACK
              </SecondaryButton>
            </FormFrame>
          </FormDiv>
        </Content>
      </FormLoading>
    </PasswordFrame>
  );
};

export default Step10;
