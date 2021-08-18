import React from "react";
import {
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
  CheckboxGroup,
  GuidanceInput,
} from "../styles";
import { FormErrorMessage, SearchSelect } from "../../../components/elements";
import { Field } from "formik";
import styled, { withTheme } from "styled-components";

const contactTypes = [
  { value: "sms", label: "SMS", placeholder: "Number" },
  { value: "whatsapp", label: "WhatsApp", placeholder: "WhatsApp Number" },
  { value: "viber", label: "Viber", placeholder: "Viber Number" },
  { value: "email", label: "Email", placeholder: "Email" },
  { value: "telegram", label: "Telegram", placeholder: "Telegram Number" },
  { value: "messenger", label: "Messenger", placeholder: "Facebook Link" },
];

const InputFlex = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const StepLocation = withTheme(
  ({
    theme,
    isSubmitting,
    values,
    previous,
    errors,
    handleBlur,
    handleChange,
    setFieldValue,
  }) => {
    return (
      <React.Fragment>
        <h1 className="center">Preferred Location/s</h1>
        <p className="subheader center">
          This allows us to get your areas of interest for the property.
        </p>
        <CheckboxGroup hasInputs mobileWidth="90%">
          <FormErrorMessage component="span" name="location" />
          <GuidanceInput
            as={Field}
            placeholder="Location/s (separate by comma)"
            name="location"
          />
        </CheckboxGroup>
        <ButtonsDiv>
          <SubmitOrangeButton
            type="submit"
            disabled={isSubmitting || values.location == "" || errors.location}
          >
            NEXT QUESTION
          </SubmitOrangeButton>
          <SecondaryButton onClick={() => previous(values)}>
            GO BACK
          </SecondaryButton>
        </ButtonsDiv>
      </React.Fragment>
    );
  }
);

export default StepLocation;
