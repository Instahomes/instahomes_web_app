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

const purchaseTypeChoices = [
  {
    value: "buy",
    label: "Buy",
  },
  {
    value: "rentToOwn",
    label: "Rent-to-own",
  },
  {
    value: "rent",
    label: "Rent",
  },
];

const reasonChoices = [
  {
    value: "reside",
    label: "To reside in",
  },
  {
    value: "rented",
    label: "To be rented",
  },
  {
    value: "business",
    label: "To use for business",
  },
  {
    value: "secondHouse",
    label: "To save for second house",
  },
  {
    value: "invest",
    label: "To invest in",
  },
  {
    value: "other",
    label: "Other",
  },
];

const Step7 = ({
  isSubmitting,
  values,
  setFieldValue,
  previous,
  touched,
  errors,
}) => {
  return (
    <React.Fragment>
      <h1>What do you want to use the property for?</h1>
      <p>
        Select the reason for buying the property. The property you’re inquiring
        is listed as For Sale.
      </p>
      <p>I want to...</p>
      <FormDiv style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <FormErrorMessage component="span" name="purchaseType" />
        <ChoiceGroup>
          {purchaseTypeChoices.map((choice) => (
            <Choice
              key={choice.value}
              onClick={() => setFieldValue("purchaseType", choice.value)}
              isChecked={values.purchaseType == choice.value}
            >
              {choice.label}
            </Choice>
          ))}
        </ChoiceGroup>
      </FormDiv>
      <FormErrorMessage component="span" name="reason" />
      <CheckboxGroup>
        {reasonChoices.map((choice) => (
          <CheckboxLabel
            key={choice.label}
            isChecked={values.reason == choice.value}
          >
            <span>{choice.label}</span>
            <span className="checkbox__input">
              <SignupInput
                className="checkbox"
                as={Field}
                type="radio"
                name="reason"
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
              isSubmitting ||
              values.purchaseType == "" ||
              !touched.reason ||
              errors.purchaseType ||
              errors.reason
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
    </React.Fragment>
  );
};

export default Step7;
