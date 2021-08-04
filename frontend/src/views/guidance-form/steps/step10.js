import React from "react";
import {
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
  CheckboxGroup,
  GuidanceTextarea,
} from "../styles";
import { FormErrorMessage } from "../../../components/elements";
import { Field } from "formik";

const Step10 = ({
  isSubmitting,
  values,
  previous,
  errors,
  handleChange,
  handleBlur,
  FormLoading,
  FormErrorsComponent,
}) => {
  return (
    <FormLoading>
      <FormErrorsComponent />
      <h1 className="center">Add more information about your dream property</h1>
      <p className="subheader center">
        This will take our guided investing to the next level with active search
        on the best property for you
      </p>
      <CheckboxGroup hasInputs width="500px" mobileWidth="90%">
        {errors.additional && (
          <FormErrorMessage as="span" component="span" name="additional">
            {errors.additional}
          </FormErrorMessage>
        )}
        <GuidanceTextarea
          placeholder="Examples of additional information: preference of property in the hillside, childproof, three-story, open space, etc."
          name="additional"
          value={values.additional}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </CheckboxGroup>
      <ButtonsDiv>
        <SubmitOrangeButton
          type="submit"
          disabled={
            isSubmitting || values.additional == "" || errors.additional
          }
        >
          FINISH ASSESSMENT
        </SubmitOrangeButton>
        <SecondaryButton onClick={() => previous(values)}>
          GO BACK
        </SecondaryButton>
      </ButtonsDiv>
    </FormLoading>
  );
};
export default Step10;
