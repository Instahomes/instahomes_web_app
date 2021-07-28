import React from "react";
import {
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
  CheckboxGroup,
  CheckboxLabel,
} from "../styles";
import { reasonChoices } from "../../../misc/constants";
import { Field } from "formik";

const Step3 = ({ isSubmitting, values, previous, errors }) => {
  return (
    <React.Fragment>
      <h1 className="center">What do you want to use the property for?</h1>
      <p className="subheader center">
        This will help us in facilitating the next steps to prepare for your
        investment.
      </p>
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

export default Step3;
