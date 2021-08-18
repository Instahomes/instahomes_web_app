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
import StepIntro from "./steps/stepIntro";
import StepProgress from "./steps/stepProgress";
import StepPurchaseType from "./steps/stepPurchaseType";
import StepReason from "./steps/stepReason";
import StepPropertyType from "./steps/stepPropertyType";
import StepOccupants from "./steps/stepOccupants";
import StepBudget from "./steps/stepBudget";
import StepLocation from "./steps/stepLocation";
import StepContact from "./steps/stepContact";
import StepDevelopers from "./steps/stepDevelopers";
import StepAdditionalQuestion from "./steps/stepAdditionalQuestion";
import StepAdditional from "./steps/stepAdditional";
import StepFinal from "./steps/stepFinal";
import heroBg from "../../assets/home/hero.webp";
import { Helmet } from "react-helmet";
import Loading from "../../components/loading";
import { FormErrorMessage } from "../../components/elements";
import { createGuidance } from "../../services/guidance";

// Wizard is a single Formik instance whose children are each page of the
// multi-step form. The form is submitted on each forward transition (can only
// progress with valid input), whereas a backwards step is allowed with
// incomplete data. A snapshot of form state is used as initialValues after each
// transition. Each page has an optional submit handler, and the top-level
// submit is called when the final page is submitted.
// Retrieved from: https://github.com/formium/formik/blob/master/examples/MultistepWizard.js
const Wizard = ({ children, initialValues, onSubmit, isLoading }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values, nextStep = 0) => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1 + nextStep, totalSteps - 1));
  };

  const previous = (values, nextStep = null) => {
    setSnapshot(values);
    if (nextStep != null) {
      setStepNumber(nextStep);
    } else {
      setStepNumber(Math.max(stepNumber - 1, 0));
    }
  };

  const handleSubmit = async (values, bag) => {
    let nextStep;
    if (step.props.onSubmit) {
      nextStep = await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values, nextStep);
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
            <>
              <GuidanceForm
                hasNoBackButton={
                  stepNumber == 0 || stepNumber == totalSteps - 1
                }
              >
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
              {stepNumber != 0 && (
                <BackButton onClick={() => previous(values, 0)}>
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
            </>
          )}
        </Formik>
      </GuidanceContainer>
    </React.Fragment>
  );
};

const GuidanceFormComponent = (props) => {
  const [isIncludingAdditional, setIsIncludingAdditional] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  const FormLoading = ({ children }) =>
    isLoading ? (
      <Loading
        height={"600px"}
        message="Inquiry is being sent, please wait a moment."
        color="#3F526A"
      ></Loading>
    ) : (
      children
    );

  const FormErrorsComponent = () =>
    formErrors.map((formError) => (
      <FormErrorMessage as="span">{formError}</FormErrorMessage>
    ));

  const handleSubmit = async (values) => {
    const successCallback = () => {
      setIsLoading(false);
    };

    const errorCallback = (err) => {
      setIsLoading(false);
      setFormErrors(
        [].concat(
          ...Object.entries(err.response.data).map(
            ([key, value]) => `${key}: ${value}`
          )
        )
      );
    };

    setIsLoading(true);
    const guidance = {
      name: values.name,
      property_types: values.propertyTypes,
      budget: values.budget,
      occupants: values.occupants,
      preferred_type: values.purchaseType,
      preferred_use: values.reason,
      process_stage: values.progress,
      additional: values.additional,
      primary_contact: values.primary_contact,
      primary_contact_type: values.primary_contact_type,
      secondary_contact: values.secondary_contact,
      secondary_contact_type: values.secondary_contact_type,
      location: values.location,
      developers: values.developers,
      developments: values.developments,
    };

    await createGuidance(guidance, successCallback, errorCallback);
  };

  const contactSchema = (contact_type, schema) => {
    if (contact_type == "email") {
      return schema
        .email("Please enter a valid email")
        .required("Please enter your contact details");
    } else if (
      contact_type == "whatsapp" ||
      contact_type == "viber" ||
      contact_type == "sms" ||
      contact_type == "telegram"
    ) {
      return schema
        .required("Please enter your contact details")
        .matches(
          /^\+639\d{9}$/,
          "Please follow the correct format for your contact details: +639171234567"
        );
    } else if (contact_type == "messenger") {
      return schema
        .required("Please enter your contact details")
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Please enter the URL to your Facebook account (e.g. facebook.com/username)"
        );
    }
  };

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
          reason: null,
          occupants: "",
          progress: null,
          primary_contact: "",
          primary_contact_type: "",
          secondary_contact: "",
          secondary_contact_type: "",
          additional: "",
          location: "",
          developers: [],
          developments: [],
        }}
        isLoading={isLoading}
      >
        {/* <StepIntro {...props} validationSchema={Yup.object({})} />
        <StepProgress
          {...props}
          validationSchema={Yup.object({
            progress: Yup.string()
              .required("Please input where you're at right now.")
              .nullable(),
          })}
        />
        <StepPurchaseType
          {...props}
          validationSchema={Yup.object({
            purchaseType: Yup.string().required(
              "Please enter your purchase type."
            ),
          })}
        />
        <StepReason
          {...props}
          validationSchema={Yup.object({
            reason: Yup.string()
              .required("Please enter your reason.")
              .nullable(),
          })}
        />
        <StepPropertyType
          {...props}
          validationSchema={Yup.object({
            propertyTypes: Yup.array()
              .of(Yup.string())
              .required("Please choose your preferred type/s."),
          })}
        />
        <StepOccupants
          {...props}
          validationSchema={Yup.object({
            occupants: Yup.string().required(
              "Please enter the number of occupants."
            ),
          })}
        />
        <StepBudget
          {...props}
          validationSchema={Yup.object({
            budget: Yup.string().required("Please enter your budget range."),
          })}
        />
        <StepLocation
          {...props}
          validationSchema={Yup.object({
            location: Yup.string().required("Please enter your location/s."),
          })}
        />
        <StepContact
          {...props}
          validationSchema={Yup.object().shape(
            {
              name: Yup.string().required("Please enter your full name."),
              primary_contact: Yup.string()
                .required("Please enter your primary contact details.")
                .ensure()
                .when("primary_contact_type", contactSchema),
              primary_contact_type: Yup.string().required(
                "Please enter the primary contact type."
              ),
              secondary_contact: Yup.string()
                .ensure()
                .when("secondary_contact_type", contactSchema),
              secondary_contact_type: Yup.string()
                .ensure()
                .when("secondary_contact", (secondary_contact, schema) => {
                  return secondary_contact
                    ? schema.required("Please enter a contact type")
                    : schema;
                }),
            },
            [["secondary_contact", "secondary_contact_type"]]
          )}
        />
        <StepAdditionalQuestion
          {...props}
          onSubmit={async (values) => {
            if (!isIncludingAdditional) {
              await handleSubmit(values);
              return 1;
            }
          }}
          setIsIncludingAdditional={setIsIncludingAdditional}
          FormLoading={FormLoading}
          FormErrorsComponent={FormErrorsComponent}
        /> */}
        <StepDevelopers
          {...props}
          validationSchema={Yup.object({
            developers: Yup.array().of(
              Yup.object({ value: Yup.string(), label: Yup.string() })
            ),
            developments: Yup.array().of(
              Yup.object({ value: Yup.string(), label: Yup.string() })
            ),
          })}
        />
        <StepAdditional
          {...props}
          onSubmit={async (values) => {
            await handleSubmit(values);
          }}
          validationSchema={Yup.object({
            additional: Yup.string().required(
              "Please enter additional information."
            ),
          })}
          FormLoading={FormLoading}
          FormErrorsComponent={FormErrorsComponent}
        />
        <StepFinal {...props} />
      </Wizard>
    </React.Fragment>
  );
};

export default GuidanceFormComponent;
