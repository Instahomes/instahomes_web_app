import React, { useEffect, useState } from "react";
import leftArrow from "../../assets/product/leftArrow.svg";
import rightArrow from "../../assets/product/rightArrow.svg";
import {
  ProductInquiryContainer,
  DateButtonsDiv,
  TimeButtonsDiv,
  DateButtons,
  DateButton,
  TimeButton,
  InquiryButtons,
  InquiryButtonsChild,
} from "./styles";
import { Icon } from "@iconify/react";
import { withTheme } from "styled-components";
import { times } from "./constants";
import { useHistory, useRouteMatch } from "react-router-dom";
import dayjs from "dayjs";

const getWeekFromPivot = (pivot, numDays = 7) => {
  let startDate = pivot;
  if (numDays == 7) startDate = startDate.day(0);

  let dateNextWeek = startDate.add(numDays, "day");

  let arrOfDates = [];
  let currDate = startDate;
  while (currDate.isBefore(dateNextWeek)) {
    arrOfDates.push({
      rawDate: currDate,
      value: currDate.format("YYYY-MM-DD"),
    });
    currDate = currDate.add(1, "day");
  }
  return arrOfDates;
};

const computeDays = (theme) => {
  // Boundaries for whether to go with seven days in the calendar or five days per week
  let newDaysInterval;
  if (window.innerWidth <= 320) {
    newDaysInterval = 4;
  } else if (
    (window.innerWidth > theme.breakpoints.lg.replace("px", "") &&
      window.innerWidth < 1300) ||
    (window.innerWidth < theme.breakpoints.sm.replace("px", "") &&
      window.innerWidth > 320)
  ) {
    newDaysInterval = 5;
  } else {
    newDaysInterval = 7;
  }
  return newDaysInterval;
};

const ProductTour = withTheme(
  ({
    theme,
    showButtons,
    withTime,
    Header,
    scale,
    initialSelectedDate,
    initialSelectedTime,
    parentSetSelectedDate,
    parentSetSelectedTime,
  }) => {
    const [selectedDate, setSelectedDate] = useState(
      initialSelectedDate || null
    );
    const [selectedTime, setSelectedTime] = useState(
      initialSelectedTime || null
    );
    const [pivot, setPivot] = useState(
      initialSelectedDate ? dayjs(initialSelectedDate) : dayjs()
    );
    const [daysInterval, setDaysInterval] = useState(computeDays(theme));
    const history = useHistory();
    const match = useRouteMatch();

    let dates = getWeekFromPivot(pivot, daysInterval);

    useEffect(() => {
      window.addEventListener("resize", updateDaysInterval);

      return function cleanup() {
        window.removeEventListener("resize", updateDaysInterval);
      };
    }, []);

    useEffect(() => {
      if (parentSetSelectedDate) parentSetSelectedDate(selectedDate);
      if (parentSetSelectedTime) parentSetSelectedTime(selectedTime);
    }, [selectedDate, selectedTime]);

    const updateDaysInterval = () => {
      const newDaysInterval = computeDays(theme);
      setDaysInterval(newDaysInterval);
    };

    const changePivot = (isPlus) => {
      const newDate = isPlus
        ? pivot.add(daysInterval, "day")
        : pivot.subtract(daysInterval, "day");
      setPivot(newDate);
    };

    const handleTourClick = (data) =>
      history.push(`/tour/${match.params.id}`, data);

    return (
      <ProductInquiryContainer scale={scale || 1}>
        {<Header pivot={pivot} setPivot={setPivot} />}
        <DateButtonsDiv>
          <img
            src={leftArrow}
            alt="Left Arrow"
            onClick={() => changePivot(false)}
          />
          <DateButtons>
            {dates.map((date) => (
              <DateButton
                type="button"
                onClick={() => setSelectedDate(date.value)}
                selected={selectedDate == date.value}
                disabled={date.rawDate.isBefore(dayjs())}
              >
                <h2 className="btn-rubik">{date.rawDate.date()}</h2>
                <span className="day-of-week">
                  {date.rawDate.format("ddd")}
                </span>
              </DateButton>
            ))}
          </DateButtons>
          <img
            style={{ cursor: "pointer" }}
            src={rightArrow}
            alt="Right Arrow"
            onClick={() => changePivot(true)}
          />
        </DateButtonsDiv>
        {withTime && (
          <TimeButtonsDiv>
            {times.map((time) => (
              <TimeButton
                type="button"
                onClick={() => setSelectedTime(time.value)}
                selected={selectedTime == time.value}
              >
                <h2 className="btn-rubik">{time.label}</h2>
                <span className="day-of-week">{time.period}</span>
              </TimeButton>
            ))}
          </TimeButtonsDiv>
        )}
        {showButtons && (
          <InquiryButtons>
            <InquiryButtonsChild
              onClick={() =>
                handleTourClick({ selectedDate, platform: "video" })
              }
            >
              <Icon
                icon={"bi:camera-video-fill"}
                color="#FFE5D2"
                width="1.2em"
                height="1.2em"
                style={{ marginRight: "1em" }}
              />
              TOUR&nbsp;IN&nbsp;VIDEO&nbsp;CALL
            </InquiryButtonsChild>
            <InquiryButtonsChild
              className="muted"
              onClick={() =>
                handleTourClick({ selectedDate, platform: "inPerson" })
              }
            >
              <Icon
                icon={"ri:walk-fill"}
                color={theme.colors.orange}
                width="1.4em"
                height="1.4em"
                style={{ marginRight: "1em" }}
              />
              TOUR&nbsp;IN&nbsp;PERSON
            </InquiryButtonsChild>
          </InquiryButtons>
        )}
      </ProductInquiryContainer>
    );
  }
);

export default ProductTour;
