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

const StepContact = withTheme(
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
    const customStyles = {
      container: (provided) => ({
        ...provided,
        flex: "1",
      }),
      control: (provided) => ({
        ...provided,
        backgroundColor: theme.colors.softWhite,
        border: `1px solid ${theme.colors.whiteInputColor}`,
        borderRadius: "4px",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "1em",
        height: "100%",
      }),
      menu: (provided) => ({ ...provided, zIndex: 999 }),
      valueContainer: (provided) => ({
        ...provided,
        padding: "0.8em 2em",
      }),
      placeholder: () => ({
        color: theme.colors.whiteInputColor,
      }),
      singleValue: (styles, { data }) => ({
        ...styles,
        color:
          data.value == ""
            ? theme.colors.whiteInputColor
            : theme.colors.darkGray,
      }),
      option: (styles, { data }) => ({
        ...styles,
        color:
          data.value == ""
            ? theme.colors.whiteInputColor
            : theme.colors.darkGray,
        fontSize: "0.8em",
      }),
      indicatorSeparator: () => {},
    };

    const selectedContact = (contactType) =>
      contactTypes.find((contact) => contact.value == contactType);

    return (
      <React.Fragment>
        <h1 className="center">Contact Information</h1>
        <p className="subheader center">
          We will connect with you through the information you provide below.
        </p>
        <CheckboxGroup hasInputs width="500px" mobileWidth="90%">
          {/* <FormErrorMessage component="span" name="name" /> */}
          <GuidanceInput as={Field} placeholder="Full Name" name="name" />
          {/* <FormErrorMessage component="span" name="primary_contact" /> */}
          {(errors.primary_contact || errors.secondary_contact) && (
            <FormErrorMessage as="span" component="span" name="primary_contact">
              {`${errors.primary_contact} ${
                errors.primary_contact && "(primary)"
              }`}
              <br />
              {`${errors.secondary_contact} ${
                errors.secondary_contact && "(secondary)"
              }`}
            </FormErrorMessage>
          )}
          {/* {errors.primary_contact_type && (
            <FormErrorMessage
              as="span"
              component="span"
              name="primary_contact_type"
            >
              {errors.primary_contact_type}
            </FormErrorMessage>
          )} */}
          <InputFlex>
            <SearchSelect
              fieldName="primary_contact_type"
              options={[{ value: "", label: "Primary Info" }].concat(
                contactTypes
              )}
              placeholder="Primary Info"
              formik={{ handleBlur, values, setFieldValue }}
              newCustomStyles={customStyles}
            />
            <GuidanceInput
              as={Field}
              placeholder={
                selectedContact(values.primary_contact_type)
                  ? "Primary " +
                    selectedContact(values.primary_contact_type).placeholder
                  : "Primary Details"
              }
              name="primary_contact"
              style={{ flex: 1 }}
              onChange={(e) => {
                if (e.target.value.startsWith("09")) {
                  setFieldValue(
                    "primary_contact",
                    "+639" + e.target.value.substring(2)
                  );
                } else {
                  handleChange(e);
                }
              }}
            />
          </InputFlex>
          {/* <FormErrorMessage component="span" name="secondary_contact" /> */}
          {/* {errors.secondary_contact_type && (
            <FormErrorMessage
              as="span"
              component="span"
              name="secondary_contact_type"
            >
              {errors.secondary_contact_type}
            </FormErrorMessage>
          )} */}
          <InputFlex>
            <SearchSelect
              fieldName="secondary_contact_type"
              options={[{ value: "", label: "Secondary Info" }].concat(
                contactTypes
              )}
              placeholder="Secondary Info"
              formik={{ handleBlur, values, setFieldValue }}
              newCustomStyles={customStyles}
            />
            <GuidanceInput
              as={Field}
              placeholder={
                selectedContact(values.secondary_contact_type)
                  ? "Secondary " +
                    selectedContact(values.secondary_contact_type).placeholder
                  : "Secondary Details"
              }
              name="secondary_contact"
              style={{ flex: 1 }}
              onChange={(e) => {
                if (e.target.value.startsWith("09")) {
                  setFieldValue(
                    "secondary_contact",
                    "+639" + e.target.value.substring(2)
                  );
                } else {
                  handleChange(e);
                }
              }}
            />
          </InputFlex>
        </CheckboxGroup>
        <ButtonsDiv style={{ marginTop: "0" }}>
          <SubmitOrangeButton
            type="submit"
            disabled={
              isSubmitting ||
              values.name == "" ||
              errors.name ||
              values.primary_contact == "" ||
              errors.primary_contact ||
              values.primary_contact_type == "" ||
              errors.primary_contact_type ||
              errors.secondary_contact ||
              errors.secondary_contact_type
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
  }
);

export default StepContact;
