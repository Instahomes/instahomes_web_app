import React from "react";
import {
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
  CheckboxGroup,
  GuidanceInput,
} from "../styles";
import { FormErrorMessage } from "../../../components/elements";
import { Field } from "formik";

const StepLocation = ({ isSubmitting, values, previous, errors }) => {
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
};

export default StepLocation;
