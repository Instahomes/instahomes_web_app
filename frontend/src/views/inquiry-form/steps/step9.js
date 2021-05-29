import React from "react";
import {
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

const hasAgentChoices = [
  {
    value: true,
    label: "Yes",
  },
  {
    value: false,
    label: "No",
  },
];

const Step9 = ({
  isSubmitting,
  values,
  setFieldValue,
  previous,
  errors,
  touched,
}) => {
  return (
    <React.Fragment>
      <h1>Do you already have an agent?</h1>
      <p>Please let us know if you have an agent by choosing Yes or No below</p>
      <FormDiv style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <FormErrorMessage component="span" name="hasAgent" />
        <ChoiceGroup>
          {hasAgentChoices.map((choice) => (
            <Choice
              key={choice.label}
              onClick={() => setFieldValue("hasAgent", choice.value)}
              isChecked={values.hasAgent == choice.value}
            >
              {choice.label}
            </Choice>
          ))}
        </ChoiceGroup>
      </FormDiv>
      <FormDiv>
        <FormFrame>
          <SignupOrangeButton
            disabled={isSubmitting || errors.hasAgent}
            type="submit"
          >
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

export default Step9;
