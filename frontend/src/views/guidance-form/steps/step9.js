import React from "react";
import { ButtonsDiv, SubmitOrangeButton, SecondaryButton } from "../styles";
import styled from "styled-components";
import { useFormikContext } from "formik";

const Step9Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90%;
`;

const NotReallyButton = styled(SecondaryButton)`
  background: ${({ theme }) => theme.colors.softWhite};
  border: 1.5px solid ${({ theme }) => theme.colors.darkHeader};
  color: ${({ theme }) => theme.colors.darkHeader};
`;

const Step9 = ({
  isSubmitting,
  values,
  setIsIncludingAdditional,
  previous,
  FormLoading,
  FormErrorsComponent,
}) => {
  const { submitForm } = useFormikContext();

  return (
    <FormLoading>
      <Step9Container>
        <FormErrorsComponent />
        <h1 className="center">
          Would you want to add more information about your dream property?
        </h1>
        <ButtonsDiv style={{ marginTop: "2em" }}>
          <SubmitOrangeButton
            onClick={() => {
              setIsIncludingAdditional(true);
              submitForm();
            }}
          >
            YES. ADD MORE
          </SubmitOrangeButton>
          <NotReallyButton
            disabled={isSubmitting}
            onClick={() => {
              setIsIncludingAdditional(false);
              submitForm();
            }}
          >
            NOT REALLY, SUBMIT
          </NotReallyButton>
          <SecondaryButton onClick={() => previous(values)}>
            GO BACK
          </SecondaryButton>
        </ButtonsDiv>
      </Step9Container>
    </FormLoading>
  );
};
export default Step9;
