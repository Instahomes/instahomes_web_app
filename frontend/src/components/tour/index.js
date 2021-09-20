import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { withTheme } from "styled-components";
import {
  TourInput,
  DateTimeInfoContainer,
  MonthsDropdownContainer,
} from "../../views/tour/styles";
import { videoAppsValidation } from "../../views/tour/constants";
import { Formik, Form } from "formik";
import { FormErrorMessage } from "../../components/elements";
import dayjs from "dayjs";

export const platformLabel = (theme, platform) => {
  switch (platform) {
    case "video":
      return (
        <React.Fragment>
          <Icon
            icon={"bi:camera-video-fill"}
            color={theme.colors.orange}
            width="0.8em"
            height="0.8em"
            style={{ marginRight: "0.5em" }}
          />
          VIDEO CALL
        </React.Fragment>
      );
    case "inPerson":
      return (
        <React.Fragment>
          <Icon
            icon={"ri-walk-fill"}
            color={theme.colors.orange}
            width="0.8em"
            height="0.8em"
            style={{ marginRight: "0.5em" }}
          />
          IN PERSON
        </React.Fragment>
      );
  }
};

export const Wizard = withTheme(
  ({ children, initialValues, listing, theme, platform, onSubmit }) => {
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
      if (isLastStep) {
        return onSubmit(values, bag);
      } else {
        bag.setTouched({});
        next(values);
      }
    };

    return (
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
          errors,
          touched,
          handleChange,
        }) => (
          <Form>
            {React.isValidElement(step)
              ? React.cloneElement(step, {
                  isSubmitting,
                  values,
                  listing,
                  theme,
                  platform,
                  setFieldValue,
                  errors,
                  touched,
                  isValid,
                  handleChange,
                  previous,
                })
              : step}
          </Form>
        )}
      </Formik>
    );
  }
);

const AppContactInput = ({ values, setFieldValue, app, placeholder }) => {
  const { preferredApps } = values;
  const currAppIndex = preferredApps.findIndex((curr) => curr.app == app);
  return (
    <TourInput
      name={app}
      placeholder={placeholder}
      value={preferredApps[currAppIndex].contact}
      style={{ flex: 1, minWidth: "auto" }}
      onChange={(e) => {
        const newValue = (value) => [
          ...preferredApps.slice(0, currAppIndex),
          { app, contact: value },
          ...preferredApps.slice(currAppIndex + 1),
        ];
        if (e.target.value.startsWith("09")) {
          setFieldValue(
            "preferredApps",
            newValue("+639" + e.target.value.substring(2))
          );
        } else {
          setFieldValue("preferredApps", newValue(e.target.value));
        }
      }}
    />
  );
};

export const AdditionalInfoFields = ({ values, setFieldValue, errors }) => {
  const { preferredApps } = values;
  const finalInputs = preferredApps.map((app) => (
    <AppContactInput
      values={values}
      setFieldValue={setFieldValue}
      app={app.app}
      placeholder={videoAppsValidation()[app.app].placeholder}
    />
  ));
  return (
    <React.Fragment>
      {errors.preferredApps && errors.preferredApps.length && (
        <FormErrorMessage
          as="div"
          style={{ marginTop: "1em", whiteSpace: "pre-line" }}
        >
          {errors.preferredApps
            .filter((error) => !!error)
            .map((error) => Object.values(error).join("\n"))
            .join("\n")}
        </FormErrorMessage>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          marginTop: "1em",
        }}
      >
        {finalInputs}
      </div>
    </React.Fragment>
  );
};

export const DateTimeInfo = withTheme(
  ({ date, time, theme, previous, className }) => {
    const chosenDateTime = dayjs(date + " " + time);
    return (
      <DateTimeInfoContainer className={className}>
        <h1>{chosenDateTime.format("MMMM D")}</h1>
        <h2>
          {chosenDateTime.format("h:mm A")} -{" "}
          {chosenDateTime.add(1, "hour").format("h:mm A")}
        </h2>
        <span onClick={previous}>
          <Icon
            icon={"fluent:arrow-swap-20-filled"}
            color={theme.colors.darkBody}
            width="1.3em"
            height="1.3em"
          />
          Change Date/Time
        </span>
      </DateTimeInfoContainer>
    );
  }
);

export const MonthsDropdown = withTheme(
  ({ pivot, setPivot, setOpen, className }) => {
    const rawMonths = [];
    let dayIncrement = dayjs();
    const endOfYear = dayIncrement.endOf("year");
    while (dayIncrement.isBefore(endOfYear)) {
      rawMonths.push(dayIncrement);
      dayIncrement = dayIncrement.add(1, "month");
    }

    const handleClick = (month) => {
      setOpen(false);
      setPivot(month.date(1));
    };

    const pivotDate = dayjs(pivot);
    return (
      <MonthsDropdownContainer className={className}>
        {rawMonths.map((rawMonth) => (
          <h2
            className={`month ${
              pivotDate.month() == rawMonth.month() ? "selected" : ""
            }`}
            onClick={() => handleClick(rawMonth)}
          >
            {rawMonth.format("MMMM")}
          </h2>
        ))}
      </MonthsDropdownContainer>
    );
  }
);
