import React from "react";
import {
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
  CheckboxGroup,
  CheckboxLabel,
} from "../styles";
import { reasonChoices } from "../../../misc/constants";
import { FormErrorMessage } from "../../../components/elements";
import { Field } from "formik";

const Step4 = ({ isSubmitting, values, previous, errors }) => {
  return (
    <React.Fragment>
      <h1 className="center">What do you want to use the property for?</h1>
      <p className="subheader center">
        This will allow us to detail a game plan for your investment strategy.
      </p>
      <FormErrorMessage component="span" name="reason" />
      <CheckboxGroup>
        {reasonChoices.map((choice) => (
          <CheckboxLabel key={choice.label}>
            <Field
              type="radio"
              name="reason"
              value={choice.value}
              checked={choice.value == values.reason}
            />
            <span>{choice.label}</span>
          </CheckboxLabel>
        ))}
      </CheckboxGroup>
      <ButtonsDiv>
        <SubmitOrangeButton
          type="submit"
          disabled={isSubmitting || values.reason == "" || errors.reason}
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

export default Step4;
