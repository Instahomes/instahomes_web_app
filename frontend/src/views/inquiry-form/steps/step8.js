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
  CheckboxGroup,
  CheckboxLabel,
  ChoiceGroup,
  Choice,
} from "../styles";
import { Field } from "formik";

const progressChoices = [
  {
    value: "asking_around",
    label: "I'm just asking around",
  },
  {
    value: "visiting",
    label: "I'm just visiting properties",
  },
  {
    value: "ready",
    label: "I'm ready to close a deal",
  },
  {
    value: "other",
    label: "Other",
  },
];

const Step8 = ({
  isSubmitting,
  values,
  setFieldValue,
  previous,
  errors,
  touched,
}) => {
  return (
    <Frame>
      <Content>
        <h1>Where in the process are you?</h1>
        <p>Select where you are in the process right now.</p>
        <FormErrorMessage component="span" name="progress" />
        <CheckboxGroup>
          {progressChoices.map((choice) => (
            <CheckboxLabel
              key={choice.label}
              isChecked={values.progress == choice.value}
            >
              <span>{choice.label}</span>
              <span className="checkbox__input">
                <SignupInput
                  className="checkbox"
                  as={Field}
                  type="radio"
                  name="progress"
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
              disabled={
                isSubmitting || values.progress == "" || errors.progress
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

export default Step8;
