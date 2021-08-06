import React, { useState } from "react";
import {
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
  CheckboxGroup,
  CheckboxLabel,
  GuidanceInput,
} from "../styles";
import { progressChoices } from "../../../misc/constants";
import { Field } from "formik";
import { FormErrorMessage } from "../../../components/elements";

const Step2 = ({
  isSubmitting,
  values,
  previous,
  errors,
  setFieldValue,
  handleChange,
}) => {
  const isOtherSelected =
    !progressChoices
      .slice(0, progressChoices.length - 1)
      .map((pChoice) => pChoice.value)
      .includes(values.progress) && values.progress != null;

  const [otherValue, setOtherValue] = useState(
    isOtherSelected ? values.progress : ""
  );

  return (
    <React.Fragment>
      <h1 className="center">Where in the process are you?</h1>
      <p className="subheader center">
        This will help us in facilitating the next steps to prepare for your
        investment.
      </p>
      <FormErrorMessage component="span" name="progress" />
      <CheckboxGroup>
        {progressChoices.map((choice) => (
          <CheckboxLabel key={choice.label}>
            <Field
              type="radio"
              name="progress"
              value={choice.value}
              checked={
                choice == progressChoices[progressChoices.length - 1]
                  ? isOtherSelected
                  : choice.value == values.progress
              }
              onChange={(e) => {
                choice == progressChoices[progressChoices.length - 1]
                  ? setFieldValue("progress", otherValue)
                  : handleChange(e);
              }}
            />
            <span>
              {choice.label}&nbsp;&nbsp;
              {choice == progressChoices[progressChoices.length - 1] &&
                (isOtherSelected ? (
                  <GuidanceInput
                    placeholder="Your stage"
                    name="progress"
                    scale={0.8}
                    value={otherValue}
                    onChange={(e) => {
                      setFieldValue("progress", e.target.value);
                      setOtherValue(e.target.value);
                    }}
                  />
                ) : (
                  "_______"
                ))}
            </span>
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
