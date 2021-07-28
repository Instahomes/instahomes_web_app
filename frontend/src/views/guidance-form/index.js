import React, { useState, useEffect } from "react";
import {
  GuidanceContainer,
  GuidanceForm,
  ProgressBar,
  BackButton,
  ProgressBarContainer,
} from "./styles";
import * as Yup from "yup";
import { Formik } from "formik";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
// import Step5 from "./steps/step5";
// import Step6 from "./steps/step6";
// import Step7 from "./steps/step7";
// import Step8 from "./steps/step8";
// import Step9 from "./steps/step9";
// import Step10 from "./steps/step10";
// import Step11 from "./steps/step11";
import heroBg from "../../assets/home/hero.webp";
import circleFilled from "../../assets/form/circle-filled.svg";
import circleEmpty from "../../assets/form/circle-empty.svg";
import { useHistory, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { createUserWithProfile, createProfile } from "../../services/users";
import { isAuthenticated, hasProfile, getProfile } from "../../services/auth";
import Loading from "../../components/loading";
import { FormErrorMessage } from "../../components/elements";

// Wizard is a single Formik instance whose children are each page of the
// multi-step form. The form is submitted on each forward transition (can only
// progress with valid input), whereas a backwards step is allowed with
// incomplete data. A snapshot of form state is used as initialValues after each
// transition. Each page has an optional submit handler, and the top-level
// submit is called when the final page is submitted.
// Retrieved from: https://github.com/formium/formik/blob/master/examples/MultistepWizard.js
const Wizard = ({
  children,
  initialValues,
  onSubmit,
  isLoading,
  inquiryState,
}) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);
  const history = useHistory();

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    // let willProceed = true;
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
      // willProceed = await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      // if (willProceed) {
      bag.setTouched({});
      next(values);
      // }
    }
  };

  return (
    <React.Fragment>
      <GuidanceContainer heroBg={heroBg}>
        <Formik
          initialValues={snapshot}
          onSubmit={handleSubmit}
          validationSchema={step.props.validationSchema}
        >
          {({
            isSubmitting,
            values,
            setFieldValue,
            isValid,
            dirty,
            errors,
            touched,
            handleChange,
          }) => (
            <GuidanceForm>
              {React.isValidElement(step)
                ? React.cloneElement(step, {
                    isSubmitting,
                    values,
                    setFieldValue,
                    isValid,
                    dirty,
                    errors,
                    touched,
                    handleChange,
                    previous,
                  })
                : step}
              {!isLoading && stepNumber > 0 && (
                <ProgressBarContainer>
                  <ProgressBar>
                    {steps.slice(1, steps.length).map((step, idx) =>
                      stepNumber <= idx ? (
                        <svg
                          width="10"
                          height="9"
                          viewBox="0 0 10 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="5.28321"
                            cy="4.32324"
                            r="3.57324"
                            fill="#F6F6F6"
                            stroke="#BABABA"
                            stroke-width="1.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="4.32324"
                            cy="4.32324"
                            r="3.57324"
                            fill="#BABABA"
                            stroke="#BABABA"
                            stroke-width="1.5"
                          />
                        </svg>
                      )
                    )}
                  </ProgressBar>
                </ProgressBarContainer>
              )}
            </GuidanceForm>
          )}
        </Formik>
        {stepNumber != 0 && (
          <BackButton onClick={() => history.goBack()}>
            <svg
              width="19"
              height="8"
              viewBox="0 0 19 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM19 3.5L1 3.5V4.5L19 4.5V3.5Z"
                fill="#F7F7F7"
              />
            </svg>
            <span className="m-plus">BACK TO START</span>
          </BackButton>
        )}
      </GuidanceContainer>
    </React.Fragment>
  );
};

const GuidanceFormComponent = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  const FormLoading = ({ children }) =>
    isLoading ? (
      <Loading
        height={"600px"}
        message="Inquiry is being sent, please wait a moment."
      ></Loading>
    ) : (
      children
    );

  const FormErrorsComponent = () =>
    formErrors.map((formError) => (
      <FormErrorMessage as="span">{formError}</FormErrorMessage>
    ));

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Guided Investing | Instahomes</title>
        <meta
          name="description"
          content="How we personalize investment guidance for you"
        ></meta>
      </Helmet>
      <Wizard
        initialValues={{
          name: "",
          contactNumber: "",
          email: "",
          address: "",
          propertyTypes: [],
          budget: "",
          purchaseType: "",
          reason: "",
          progress: "",
          hasAgent: false,
          password: "",
          confirmPassword: "",
        }}
        isLoading={isLoading}
      >
        <Step1 {...props} validationSchema={Yup.object({})} />
        <Step2
          {...props}
          validationSchema={Yup.object({
            progress: Yup.string().required(
              "Please input where you're at right now."
            ),
          })}
        />
        <Step3
          {...props}
          validationSchema={Yup.object({
            purchaseType: Yup.string().required(
              "Please enter your purchase type."
            ),
          })}
        />
        <Step4
          {...props}
          validationSchema={Yup.object({
            reason: Yup.string().required("Please enter your reason."),
          })}
        />
      </Wizard>
    </React.Fragment>
  );
};

export default GuidanceFormComponent;
