import React from "react";
import { SecondaryButton } from "../styles";
import formComplete from "../../../assets/form/form-complete.svg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Step11Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90%;
`;

const BackToHomeButton = styled(SecondaryButton)`
  margin-top: 2em;
  border: 1.5px solid ${({ theme }) => theme.colors.darkHeader};
  width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 170px;
  }
`;

const StepFinal = ({ isSubmitting, values, previous }) => {
  const history = useHistory();
  return (
    <Step11Container>
      <img
        src={formComplete}
        alt="Form Complete"
        style={{ marginBottom: "1.5em" }}
      />
      <h1 className="center">
        Awesome! We're one step closer to finding your dream property
      </h1>
      <p className="subheader center">
        Please expect a reply to{" "}
        <b>{`${values.primary_contact} (${values.primary_contact_type})`}</b>{" "}
        {values.secondary_contact &&
          `or ${values.secondary_contact} (${values.secondary_contact_type})`}{" "}
        within 24 hours. One of our experts will help you find the best fit with
        curated selections of properties. For now, just sit back and relax.
      </p>
      <BackToHomeButton onClick={() => history.push("/")}>
        BACK TO HOME
      </BackToHomeButton>
    </Step11Container>
  );
};
export default StepFinal;
