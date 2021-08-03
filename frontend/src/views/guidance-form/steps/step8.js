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
  { value: "whatsapp", label: "WhatsApp" },
  { value: "viber", label: "Viber" },
  { value: "email", label: "Email" },
];

const InputFlex = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const Step8 = withTheme(
  ({
    theme,
    isSubmitting,
    values,
    previous,
    errors,
    handleBlur,
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

    return (
      <React.Fragment>
        <h1 className="center">Contact Information</h1>
        <p className="subheader center">
          We will connect with you through the information you provide below.
        </p>
        <CheckboxGroup hasInputs width="500px" mobileWidth="90%">
          <FormErrorMessage component="span" name="name" />
          <GuidanceInput as={Field} placeholder="Full Name" name="name" />
          <FormErrorMessage component="span" name="primary_contact" />
          {errors.primary_contact_type && (
            <FormErrorMessage
              as="span"
              component="span"
              name="primary_contact_type"
            >
              {errors.primary_contact_type}
            </FormErrorMessage>
          )}
          <FormErrorMessage component="span" name="secondary_contact" />
          {errors.secondary_contact_type && (
            <FormErrorMessage
              as="span"
              component="span"
              name="secondary_contact_type"
            >
              {errors.secondary_contact_type}
            </FormErrorMessage>
          )}
          {console.log(errors)}
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
              placeholder="Primary Number/Email"
              name="primary_contact"
              style={{ flex: 1 }}
            />
          </InputFlex>
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
              placeholder="Secondary Number/Email"
              name="secondary_contact"
              style={{ flex: 1 }}
            />
          </InputFlex>
        </CheckboxGroup>
        <ButtonsDiv>
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

export default Step8;
