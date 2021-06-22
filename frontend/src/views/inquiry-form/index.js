import React, { useState, useEffect } from "react";
import { ProgressBar, BackButton } from "./styles";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";
import Step7 from "./steps/step7";
import Step8 from "./steps/step8";
import Step9 from "./steps/step9";
import Step10 from "./steps/step10";
import Step11 from "./steps/step11";
import circleFilled from "../../assets/form/circle-filled.svg";
import circleEmpty from "../../assets/form/circle-empty.svg";
import { useHistory, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { createUserWithProfile, createProfile } from "../../services/users";
import { isAuthenticated, hasProfile, getProfile } from "../../services/auth";
import Loading from "../../components/loading";
import { FormErrorMessage } from "../../components/elements";
import {
  IS_AUTHENTICATED_NO_PROFILE,
  IS_AUTHENTICATED_WITH_PROFILE,
  IS_SIGNING_UP,
  IS_NOT_SIGNING_UP,
} from "./constants";

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
    let willProceed = true;
    if (step.props.onSubmit) {
      willProceed = await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      if (willProceed) {
        bag.setTouched({});
        next(values);
      }
    }
  };

  return (
    <React.Fragment>
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
        }) => (
          <Form>
            {React.isValidElement(step)
              ? React.cloneElement(step, {
                  isSubmitting,
                  values,
                  setFieldValue,
                  isValid,
                  dirty,
                  errors,
                  touched,
                  previous,
                })
              : step}
          </Form>
        )}
      </Formik>
      {!isLoading &&
        stepNumber > 0 &&
        stepNumber <
          (inquiryState == IS_SIGNING_UP ? totalSteps - 2 : totalSteps - 1) && (
          <ProgressBar>
            {steps.slice(1, steps.length - 1).map((step, idx) => (
              <img
                key={"step" + idx}
                src={stepNumber <= idx ? circleEmpty : circleFilled}
                alt="Filled Circle"
              />
            ))}
          </ProgressBar>
        )}
      {stepNumber != totalSteps && (
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
              fill="#879EBB"
            />
          </svg>
          <span>Back to Listing Page</span>
        </BackButton>
      )}
    </React.Fragment>
  );
};

const DeveloperForm = (props) => {
  // Which user flow are we going for:
  const initialInquiryState = isAuthenticated()
    ? hasProfile()
      ? IS_AUTHENTICATED_WITH_PROFILE
      : IS_AUTHENTICATED_NO_PROFILE
    : IS_SIGNING_UP;
  const [inquiryState, setInquiryState] = useState(initialInquiryState);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();
  const location = useLocation();

  let listing, inquiry;
  if (location.state) {
    listing = location.state.listing;
    inquiry = location.state.inquiry;
  }
  useEffect(() => {
    if (!location.state) {
      history.push("/search");
    }
  }, []);

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

  const isAuthenticatedWithProfile =
    inquiryState == IS_AUTHENTICATED_WITH_PROFILE;
  const isAuthenticatedNoProfile = inquiryState == IS_AUTHENTICATED_NO_PROFILE;
  const isSigningUp = inquiryState == IS_SIGNING_UP;
  const isNotSigningUp = inquiryState == IS_NOT_SIGNING_UP;

  const handleSubmit = async (values, setSubmitting) => {
    let willProceed = true;
    setIsLoading(true);
    setSubmitting(true);
    const profile = {
      name: values.name,
      preferred_location: values.address,
      property_types: values.propertyTypes,
      budget: values.budget,
      preferred_type: values.purchaseType,
      preferred_use: values.reason,
      process_stage: values.progress,
      has_agent: values.hasAgent,
    };

    const successCallback = () => {
      setIsLoading(false);
      setSubmitting(false);
    };

    const errorCallback = (err) => {
      setIsLoading(false);
      setSubmitting(false);
      setFormErrors(
        [].concat(
          ...Object.entries(err.response.data).map(
            ([key, value]) => `${key}: ${value}`
          )
        )
      );
      willProceed = false;
    };

    switch (inquiryState) {
      case IS_AUTHENTICATED_WITH_PROFILE:
        break;
      case IS_AUTHENTICATED_NO_PROFILE:
        const currId = getProfile().user_id;
        const currProfile = { ...profile, user: currId };
        await createProfile(
          currProfile,
          inquiry,
          successCallback,
          errorCallback
        );
      case IS_SIGNING_UP:
        await createUserWithProfile(
          values.contactNumber,
          values.email || null,
          values.password,
          profile,
          inquiry,
          successCallback,
          errorCallback
        );
      case IS_NOT_SIGNING_UP:
        await createProfile(profile, inquiry, successCallback, errorCallback);
    }

    return willProceed;
  };

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inquire | Instahomes</title>
        <meta name="description" content=""></meta>
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
        inquiryState={inquiryState}
      >
        {!isAuthenticatedWithProfile && (
          <Step1
            {...props}
            validationSchema={Yup.object({})}
            inquiryState={inquiryState}
            setInquiryState={setInquiryState}
            listing={listing}
          />
        )}
        {!isAuthenticatedWithProfile && (
          <Step2
            {...props}
            validationSchema={Yup.object({
              name: Yup.string().required("Please enter your name."),
            })}
          />
        )}
        {!isAuthenticatedWithProfile && (
          <Step3
            {...props}
            validationSchema={Yup.object({
              contactNumber: Yup.string()
                .required("Please enter a contact number.")
                .matches(
                  /^(09|\+639)\d{9}$/,
                  "Please follow the correct format: +639171234567"
                ),
              email: Yup.string().email("Please input a correct email."),
            })}
          />
        )}
        {!isAuthenticatedWithProfile && (
          <Step4
            {...props}
            validationSchema={Yup.object({
              address: Yup.string().required("Please enter your location."),
            })}
          />
        )}
        {!isAuthenticatedWithProfile && (
          <Step5
            {...props}
            validationSchema={Yup.object({
              propertyTypes: Yup.array()
                .of(Yup.string())
                .required("Please choose your preferred type/s."),
            })}
          />
        )}
        {!isAuthenticatedWithProfile && (
          <Step6
            {...props}
            validationSchema={Yup.object({
              budget: Yup.string().required(
                "Please choose your estimated budget."
              ),
            })}
          />
        )}
        {!isAuthenticatedWithProfile && (
          <Step7
            {...props}
            validationSchema={Yup.object({
              purchaseType: Yup.string().required(
                "Please choose your preference."
              ),
              reason: Yup.string().required("Please choose your reason."),
            })}
          />
        )}
        {!isAuthenticatedWithProfile && (
          <Step8
            {...props}
            validationSchema={Yup.object({
              progress: Yup.string().required("Please choose an option."),
            })}
          />
        )}
        {!isAuthenticatedWithProfile && (
          <Step9
            {...props}
            onSubmit={async (values, { setSubmitting }) =>
              isNotSigningUp || isAuthenticatedNoProfile
                ? await handleSubmit(values, setSubmitting)
                : true
            }
            validationSchema={Yup.object({
              hasAgent: Yup.boolean().required(),
            })}
            FormLoading={FormLoading}
            FormErrorsComponent={FormErrorsComponent}
          />
        )}
        {isSigningUp && (
          <Step10
            {...props}
            onSubmit={async (values, { setSubmitting }) =>
              await handleSubmit(values, setSubmitting)
            }
            validationSchema={Yup.object({
              password: Yup.string().required("Please type a password."),
              confirmPassword: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Passwords must match."
              ),
            })}
            FormLoading={FormLoading}
            FormErrorsComponent={FormErrorsComponent}
          />
        )}
        <Step11
          {...props}
          onSubmit={(values) => {
            console.log(values);
            history.push("/");
          }}
          validationSchema={Yup.object({})}
          inquiryState={inquiryState}
          listing={listing}
        />
      </Wizard>
    </React.Fragment>
  );
};

export default DeveloperForm;
