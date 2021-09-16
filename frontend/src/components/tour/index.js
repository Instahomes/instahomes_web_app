import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { withTheme } from "styled-components";
import { TourInput, DateTimeInfoContainer } from "../../views/tour/styles";
import { videoApps, videoAppsPlaceholders } from "../../views/tour/constants";

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
  ({
    children,
    listing,
    theme,
    platform,
    initialSelectedDate,
    initialSelectedTime,
    values,
    onChangeFuncs,
  }) => {
    const [stepNumber, setStepNumber] = useState(0);
    const steps = React.Children.toArray(children);

    const step = steps[stepNumber];
    const totalSteps = steps.length;

    const next = () => {
      setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
    };

    const previous = () => {
      setStepNumber(Math.max(stepNumber - 1, 0));
    };

    return (
      <React.Fragment>
        {React.isValidElement(step)
          ? React.cloneElement(step, {
              listing,
              theme,
              platform,
              initialSelectedDate,
              initialSelectedTime,
              values,
              onChangeFuncs,
              previous,
              next,
            })
          : step}
      </React.Fragment>
    );
  }
);

const AppContactInput = ({ values, onChangeFuncs, app, placeholder }) => (
  <TourInput
    name={app}
    onChangeFuncs={(e) =>
      onChangeFuncs.setAppInfo({ ...values.appInfo, [app]: e.target.value })
    }
    placeholder={placeholder}
    style={{ marginTop: "0.5em" }}
  />
);

export const AdditionalInfoFields = ({ values, onChangeFuncs }) => {
  const { preferredApps } = values;
  const finalInputs = videoApps
    .filter((app) => preferredApps.includes(app))
    .map((app) => (
      <React.Fragment>
        <br />
        <AppContactInput
          values={values}
          onChangeFuncs={onChangeFuncs}
          app={app}
          placeholder={videoAppsPlaceholders[app]}
        />
      </React.Fragment>
    ));
  return finalInputs;
};

export const DateTimeInfo = withTheme(
  ({ date, time, theme, previous, className }) => {
    const chosenDateTime = new Date(date + " " + time);

    Date.prototype.addHours = function (h) {
      const newDate = new Date();
      newDate.setTime(this.getTime() + h * 60 * 60 * 1000);
      return newDate;
    };

    return (
      <DateTimeInfoContainer className={className}>
        <h1>
          {chosenDateTime.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          })}
        </h1>
        <h2>
          {chosenDateTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          -{" "}
          {chosenDateTime
            .addHours(1)
            .toLocaleTimeString([], { hour: "numeric", minute: "numeric" })}
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
