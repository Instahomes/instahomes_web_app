import React from "react";
import {
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
  CheckboxGroup,
  CheckboxLabel,
} from "../styles";
import { progressChoices } from "../../../misc/constants";
import { Field } from "formik";

const Step2 = ({ isSubmitting, values, previous, errors }) => {
  return (
    <React.Fragment>
      <h1 className="center">Where in the process are you?</h1>
      <p className="subheader center">
        This will help us in facilitating the next steps to prepare for your
        investment.
      </p>
      <CheckboxGroup>
        {progressChoices.map((choice) => (
          <CheckboxLabel key={choice.label}>
            <Field
              type="radio"
              name="progress"
              value={choice.value}
              checked={choice.value == values.progress}
            />
            <span>{choice.label}</span>
          </CheckboxLabel>
        ))}
      </CheckboxGroup>
      <ButtonsDiv>
        <SubmitOrangeButton
          type="submit"
          disabled={isSubmitting || values.progress == "" || errors.progress}
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

export default Step2;
