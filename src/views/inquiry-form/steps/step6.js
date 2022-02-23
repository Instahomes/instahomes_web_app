import React from "react";
import {
  Frame,
  Content,
  FormDiv,
  FormFrame,
  SignupOrangeButton,
  SecondaryButton,
  SignupInput,
  CheckboxGroup,
  CheckboxLabel,
} from "../styles";
import { Field } from "formik";
import { budgetChoices } from "../../../misc/constants";
import { FormErrorMessage } from "../../../components/elements";

const Step6 = ({ isSubmitting, values, previous, errors }) => {
  return (
    <Frame>
      <Content>
        <h1>Estimated Budget</h1>
        <p>
          Select your estimated budget below. The property you're inquiring is
          approx. PHP 13,000,000.00.
        </p>
        <FormErrorMessage component="span" name="budget" />
        <CheckboxGroup>
          {budgetChoices.map((choice) => (
            <CheckboxLabel
              key={choice.label}
              isChecked={values.budget == choice.value}
            >
              <span>{choice.label}</span>
              <span className="checkbox__input">
                <SignupInput
                  className="checkbox"
                  as={Field}
                  type="radio"
                  name="budget"
                  value={choice.value}
                />
                <span className="checkbox__control">
                  <svg
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L3.5 6L7.5 1"
                      stroke="#BACCE2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </span>
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
        <FormDiv>
          <FormFrame>
            <SignupOrangeButton
              disabled={isSubmitting || values.budget == "" || errors.budget}
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

export default Step6;
