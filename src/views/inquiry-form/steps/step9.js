import React from "react";
import {
  Frame,
  Content,
  FormDiv,
  FormFrame,
  SignupOrangeButton,
  SecondaryButton,
  SignupInput,
  CheckboxGroup,
  CheckboxLabel,
  ChoiceGroup,
  Choice,
} from "../styles";
import { FormErrorMessage } from "../../../components/elements";

const hasAgentChoices = [
  {
    value: true,
    label: "Yes",
  },
  {
    value: false,
    label: "No",
  },
];

const Step9 = ({
  FormLoading,
  FormErrorsComponent,
  isSubmitting,
  values,
  setFieldValue,
  previous,
  errors,
  touched,
}) => {
  return (
    <Frame>
      <FormLoading>
        <Content>
          <h1>Do you already have an agent?</h1>
          <p>
            Please let us know if you have an agent by choosing Yes or No below
          </p>
          <FormDiv style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <FormErrorMessage component="span" name="hasAgent" />
            <FormErrorsComponent />
            <ChoiceGroup>
              {hasAgentChoices.map((choice) => (
                <Choice
                  key={choice.label}
                  onClick={() => setFieldValue("hasAgent", choice.value)}
                  isChecked={values.hasAgent == choice.value}
                >
                  {choice.label}
                </Choice>
              ))}
            </ChoiceGroup>
          </FormDiv>
          <FormDiv>
            <FormFrame>
              <SignupOrangeButton
                disabled={isSubmitting || errors.hasAgent}
                type="submit"
              >
                NEXT PAGE
              </SignupOrangeButton>
              <SecondaryButton onClick={() => previous(values)}>
                GO BACK
              </SecondaryButton>
            </FormFrame>
          </FormDiv>
        </Content>
      </FormLoading>
    </Frame>
  );
};

export default Step9;
