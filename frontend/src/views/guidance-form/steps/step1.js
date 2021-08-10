import React from "react";
import { ButtonsDiv, SubmitOrangeButton, SecondaryButton } from "../styles";
import styled from "styled-components";
import Step1Image from "../../../assets/guidance-form/step1.png";
import Step2Image from "../../../assets/guidance-form/step2.png";
import Step3Image from "../../../assets/guidance-form/step3.png";
import { useHistory } from "react-router-dom";

const GuidanceSteps = styled.div`
  display: flex;
  gap: 2em;
  // margin-top: 2em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 1em;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

const Step = styled.div`
  flex: 1 0 100px;
  text-align: center;

  .step-number {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 0.8em;
    font-weight: 500;
  }

  .step-image {
    height: 20vh;
    max-width: 95%;
  }

  .step-header {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 1em;
    margin-top: 1em;
  }

  .step-subheader {
    color: ${({ theme }) => theme.colors.darkHeader};
    font-size: 0.9em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex: 1 0 200px;

    .step-image {
      height: 8.5em;
    }
  }
`;

const guidanceStepValues = [
  {
    header: "Answer our Short Form",
    subheader:
      "The form will consist of 7 items about budget, preferences, and current plans",
    image: Step1Image,
  },
  {
    header: "Get Connected with an Advisor",
    subheader:
      "An Instahomes advisor will reach out to your preferred communication channel",
    image: Step2Image,
  },
  {
    header: "Find the Best Listings for You",
    subheader: "We’ll provide 3-5 options that fit your goals and needs",
    image: Step3Image,
  },
];

const Step1 = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <h1 style={{ fontSize: "1.8em" }} className="center">
        How we personalize investment guidance for you
      </h1>
      <p className="subheader center">
        Unlike brokers, Instahomes can provide a wider perspective through its
        many partnerships.
      </p>
      <GuidanceSteps>
        {guidanceStepValues.map((step, idx) => (
          <Step>
            <span className="step-number">Step {idx + 1}</span>
            <br />
            <br />
            <img
              src={step.image}
              className="step-image"
              alt={`Step ${idx + 1} Image`}
            />
            <h1 className="step-header">{step.header}</h1>
            <p className="step-subheader">{step.subheader}</p>
          </Step>
        ))}
      </GuidanceSteps>
      <ButtonsDiv hasNoProgressBar>
        <SubmitOrangeButton type="submit">START THE PROCESS</SubmitOrangeButton>
        <SecondaryButton onClick={() => history.push("/")}>
          BACK TO HOME
        </SecondaryButton>
      </ButtonsDiv>
    </React.Fragment>
  );
};

export default Step1;
