import React from "react";
import {
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
  CheckboxGroup,
  GuidanceInput,
} from "../styles";
import { FormErrorMessage, SearchSelect } from "../../../components/elements";
import styled, { withTheme } from "styled-components";
import { getDevelopers } from "../../../services/developers";
import { getDevelopments } from "../../../services/developments";

const StepDevelopers = ({
  isSubmitting,
  values,
  previous,
  errors,
  handleBlur,
  setFieldValue,
}) => {
  const asyncGetDevelopers = (inputValue, callback) => {
    getDevelopers(
      (data) =>
        callback(data.map((dev) => ({ value: dev.id, label: dev.name }))),
      () => [
        {
          value: "",
          label: "Something went wrong. Please try again in a bit!",
        },
      ],
      `name=${inputValue}`
    );
  };
  const asyncGetDevelopments = (inputValue, callback) => {
    getDevelopments(
      (data) =>
        callback(data.map((dev) => ({ value: dev.id, label: dev.name }))),
      () => [
        {
          value: "",
          label: "Something went wrong. Please try again in a bit!",
        },
      ],
      `name=${inputValue}`
    );
  };

  return (
    <React.Fragment>
      <h1 className="center">
        I'm particularly interested in the following...
      </h1>
      <p className="subheader center">
        This allows us to get your specific preferences. Select from the options
        or add your own.
      </p>
      <CheckboxGroup hasInputs mobileWidth="90%">
        {errors.developers && (
          <FormErrorMessage as="span" component="span" name="developers">
            {errors.developers}
          </FormErrorMessage>
        )}
        <SearchSelect
          isMulti
          fieldName="developers"
          asyncLoadOptions={asyncGetDevelopers}
          placeholder="Developers (Optional)"
          isCreatableAndAsync
          formik={{
            handleBlur,
            values,
            setFieldValue,
            handleChange: (option) => {
              setFieldValue("developers", option);
            },
            getValue: () => values.developers,
          }}
        />
        <SearchSelect
          isMulti
          fieldName="developments"
          asyncLoadOptions={asyncGetDevelopments}
          placeholder="Developments (Optional)"
          isCreatableAndAsync
          formik={{
            handleBlur,
            values,
            setFieldValue,
            handleChange: (option) => {
              setFieldValue("developments", option);
            },
            getValue: () => values.developments,
          }}
        />
      </CheckboxGroup>
      <ButtonsDiv>
        <SubmitOrangeButton
          type="submit"
          disabled={isSubmitting || errors.developers || errors.developments}
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

export default StepDevelopers;
