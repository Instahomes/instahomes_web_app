import React from "react";
import {
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
  CheckboxGroup,
  CheckboxLabel,
} from "../styles";
import { purchaseTypeChoices } from "../../../misc/constants";
import { FormErrorMessage } from "../../../components/elements";
import { Field } from "formik";

const Step3 = ({ isSubmitting, values, previous, errors }) => {
  return (
    <React.Fragment>
      <h1 className="center">I want to...</h1>
      <p className="subheader center">
        This will help us in seeking out the best properties for you.
      </p>
      <FormErrorMessage component="span" name="purchaseType" />
      <CheckboxGroup>
        {purchaseTypeChoices.map((choice) => (
          <CheckboxLabel key={choice.label}>
            <Field
              type="radio"
              name="purchaseType"
              value={choice.value}
              checked={choice.value == values.purchaseType}
            />
            <span>{choice.label}</span>
          </CheckboxLabel>
        ))}
      </CheckboxGroup>
      <ButtonsDiv>
        <SubmitOrangeButton
          type="submit"
          disabled={
            isSubmitting || values.purchaseType == "" || errors.purchaseType
          }
        >
          NEXT QUESTION
        </SubmitOrangeButton>
        <SecondaryButton onClick={() => previous(values)}>
          GO BACK
        </SecondaryButton>
      </ButtonsDiv>
    </React.Fragment>
  );
};

export default Step3;
