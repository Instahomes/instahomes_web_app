import React, { useState } from "react";
import { ProgressBar } from "./styles";
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
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

// Wizard is a single Formik instance whose children are each page of the
// multi-step form. The form is submitted on each forward transition (can only
// progress with valid input), whereas a backwards step is allowed with
// incomplete data. A snapshot of form state is used as initialValues after each
// transition. Each page has an optional submit handler, and the top-level
// submit is called when the final page is submitted.
// Retrieved from: https://github.com/formium/formik/blob/master/examples/MultistepWizard.js
const Wizard = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

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
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      console.log(values);
      next(values);
      console.log(values);
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
      {stepNumber > 0 && stepNumber < totalSteps - 2 && (
        <ProgressBar>
          {steps.slice(1, steps.length - 2).map((step, idx) => (
            <img
              key={"step" + idx}
              src={stepNumber <= idx ? circleEmpty : circleFilled}
              alt="Filled Circle"
            />
          ))}
        </ProgressBar>
      )}
    </React.Fragment>
  );
};

const DeveloperForm = (props) => {
  const [isSigningUp, setIsSigningUp] = useState(true);
  const history = useHistory();

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
      >
        <Step1
          onSubmit={() => console.log("Is signing up: " + isSigningUp)}
          validationSchema={Yup.object({})}
          setIsSigningUp={setIsSigningUp}
        />
        <Step2
          onSubmit={() => console.log("Step2 onSubmit")}
          validationSchema={Yup.object({ name: Yup.string().required() })}
        />
        <Step3
          onSubmit={() => console.log("Step3 onSubmit")}
          validationSchema={Yup.object({
            contactNumber: Yup.string().required(),
            email: Yup.string().email(),
          })}
        />
        <Step4
          onSubmit={() => console.log("Step4 onSubmit")}
          validationSchema={Yup.object({
            address: Yup.string().required(),
          })}
        />
        <Step5
          onSubmit={() => console.log("Step5 onSubmit")}
          validationSchema={Yup.object({
            propertyTypes: Yup.array().of(Yup.string()).required(),
          })}
        />
        <Step6
          onSubmit={() => console.log("Step6 onSubmit")}
          validationSchema={Yup.object({
            budget: Yup.string().required(),
          })}
        />
        <Step7
          onSubmit={() => console.log("Step7 onSubmit")}
          validationSchema={Yup.object({
            purchaseType: Yup.string().required(),
            reason: Yup.string().required(),
          })}
        />
        <Step8
          onSubmit={() => console.log("Step8 onSubmit")}
          validationSchema={Yup.object({
            progress: Yup.string().required(),
          })}
        />
        <Step9
          onSubmit={() => console.log("Step9 onSubmit")}
          validationSchema={Yup.object({
            hasAgent: Yup.boolean().required(),
          })}
        />
        {isSigningUp && (
          <Step10
            onSubmit={() => console.log("Step10 onSubmit")}
            validationSchema={Yup.object({
              password: Yup.string().required(),
              confirmPassword: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Passwords must match"
              ),
            })}
          />
        )}
        <Step11
          onSubmit={(values) => {
            console.log(values);
            history.push("/");
          }}
          validationSchema={Yup.object({})}
        />
      </Wizard>
    </React.Fragment>
  );
};

export default DeveloperForm;
