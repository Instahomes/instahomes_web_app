import React from "react";
import { ButtonsDiv, SubmitOrangeButton, SecondaryButton } from "../styles";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
`;

const Step9 = ({ isSubmitting, values, previous }) => {
  return (
    <React.Fragment>
      <h1 className="center">
        Would you want to add more information about your dream property?
      </h1>
      <ButtonsDiv>
        <SubmitOrangeButton type="submit" disabled={isSubmitting}>
          YES. ADD MORE
        </SubmitOrangeButton>
        <SecondaryButton onClick={() => previous(values)}>
          NOT REALLY
        </SecondaryButton>
      </ButtonsDiv>
    </React.Fragment>
  );
};
export default Step9;
