import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import {
  GuidanceContainer,
  GuidanceForm,
  GuidanceSteps,
  Step,
  ButtonsDiv,
  SubmitOrangeButton,
  SecondaryButton,
} from "./styles";
import heroBg from "../../assets/home/hero.webp";
import Step1Image from "../../assets/guidance-form/step1.svg";
import Step2Image from "../../assets/guidance-form/step2.svg";
import Step3Image from "../../assets/guidance-form/step3.svg";
import { Helmet } from "react-helmet";

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

const Home = React.memo((props) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Guided Investing | Instahomes</title>
        <meta
          name="description"
          content="How we personalize investment guidance for you"
        ></meta>
      </Helmet>
      <GuidanceContainer heroBg={heroBg}>
        <GuidanceForm>
          <h1 className="center">
            How we personalize investment guidance for you
          </h1>
          <p className="subheader center">
            The benefits will be reiterated in this section right here
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
          <ButtonsDiv>
            <SubmitOrangeButton type="submit">
              START THE PROCESS
            </SubmitOrangeButton>
            <SecondaryButton>BACK TO HOME</SecondaryButton>
          </ButtonsDiv>
        </GuidanceForm>
      </GuidanceContainer>
    </Layout>
  );
});

export default Home;
