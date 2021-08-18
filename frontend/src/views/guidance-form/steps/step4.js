import React, { useState } from "react";
import {
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
  CheckboxGroup,
  CheckboxLabel,
  GuidanceInput,
} from "../styles";
import { reasonGuidanceChoices } from "../../../misc/constants";
import { FormErrorMessage } from "../../../components/elements";
import { Field } from "formik";

const Step4 = ({
  isSubmitting,
  values,
  previous,
  errors,
  setFieldValue,
  handleChange,
}) => {
  const isOtherSelected =
    !reasonGuidanceChoices
      .slice(0, reasonGuidanceChoices.length - 1)
      .map((rChoice) => rChoice.value)
      .includes(values.reason) && values.reason != null;

  const [otherValue, setOtherValue] = useState(
    isOtherSelected ? values.reason : ""
  );

  return (
    <React.Fragment>
      <h1 className="center">What do you want to use the property for?</h1>
      <p className="subheader center">
        This will allow us to detail a game plan for your investment strategy.
      </p>
      <FormErrorMessage component="span" name="reason" />
      <CheckboxGroup>
        {reasonGuidanceChoices.map((choice) => (
          <CheckboxLabel key={choice.label}>
            <Field
              type="radio"
              name="reason"
              value={choice.value}
              checked={
                choice ==
                reasonGuidanceChoices[reasonGuidanceChoices.length - 1]
                  ? isOtherSelected
                  : choice.value == values.reason
              }
              onChange={(e) => {
                choice ==
                reasonGuidanceChoices[reasonGuidanceChoices.length - 1]
                  ? setFieldValue("reason", otherValue)
                  : handleChange(e);
              }}
            />
            <span>
              {choice.label}&nbsp;&nbsp;
              {choice ==
                reasonGuidanceChoices[reasonGuidanceChoices.length - 1] &&
                (isOtherSelected ? (
                  <GuidanceInput
                    placeholder="Your reason"
                    name="reason"
                    scale={0.8}
                    value={otherValue}
                    onChange={(e) => {
                      setFieldValue("reason", e.target.value);
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
