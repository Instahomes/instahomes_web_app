import React from "react";
import {
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
  CheckboxGroup,
  CheckboxLabel,
} from "../styles";
import { propertyGuidanceChoices } from "../../../misc/constants";
import { FormErrorMessage } from "../../../components/elements";
import { Field } from "formik";

const StepPropertyType = ({ isSubmitting, values, previous, errors }) => {
  return (
    <React.Fragment>
      <h1 className="center">The type/s of property I want is/are...</h1>
      <p className="subheader center">
        This will narrow down our suggested options. Select as many as you like.
      </p>
      <FormErrorMessage component="span" name="propertyTypes" />
      <CheckboxGroup>
        {propertyGuidanceChoices.map((choice) => (
          <CheckboxLabel key={choice.label}>
            <Field
              type="checkbox"
              name="propertyTypes"
              value={choice.value}
              checked={values.propertyTypes.includes(choice.value)}
            />
            <span>{choice.label}</span>
          </CheckboxLabel>
        ))}
      </CheckboxGroup>
      <ButtonsDiv>
        <SubmitOrangeButton
          type="submit"
          disabled={
            isSubmitting || !values.propertyTypes.length || errors.propertyTypes
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

export default StepPropertyType;
