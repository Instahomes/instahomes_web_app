import React from "react";
import { ButtonsDiv, SubmitOrangeButton, SecondaryButton } from "../styles";
import styled from "styled-components";

const Step9Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90%;
`;

const Step9 = ({ isSubmitting, values, previous }) => {
  return (
    <Step9Container>
      <h1 className="center">
        Would you want to add more information about your dream property?
      </h1>
      <ButtonsDiv style={{ marginTop: "2em" }}>
        <SubmitOrangeButton type="submit" disabled={isSubmitting}>
          YES. ADD MORE
        </SubmitOrangeButton>
        <SecondaryButton onClick={() => previous(values)}>
          NOT REALLY
        </SecondaryButton>
      </ButtonsDiv>
    </Step9Container>
  );
};
export default Step9;
