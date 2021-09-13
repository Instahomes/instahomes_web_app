import React, { useEffect, useState } from "react";
import walk from "../../assets/product/walk.svg";
import online from "../../assets/product/online.svg";
import leftArrow from "../../assets/product/leftArrow.svg";
import rightArrow from "../../assets/product/rightArrow.svg";
import check from "../../assets/product/check.svg";
import { LightTextarea } from "../elements";
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
import { dayStrings, times } from "./constants";

const getWeekFromPivot = (pivot, numDays = 7) => {
  let dayOfPivot = pivot.getDay();
  let startDate = new Date(pivot);
  startDate.setDate(pivot.getDate() - dayOfPivot);

  let dateNextWeek = new Date(startDate);
  dateNextWeek.setDate(startDate.getDate() + numDays);

  let arrOfDates = [];
  for (
    var dt = new Date(startDate);
    dt < dateNextWeek;
    dt.setDate(dt.getDate() + 1)
  ) {
    let currDate = new Date(dt);
    arrOfDates.push({
      rawDate: currDate,
      value: currDate.toISOString().slice(0, 10),
    });
  }
  return arrOfDates;
};

const ProductTour = withTheme(
  ({ theme, initialPivot, showButtons, withTime, Header }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const [pivot, setPivot] = useState(
      initialPivot ? new Date(initialPivot) : new Date()
    );
    const [daysInterval, setDaysInterval] = useState(7);

    let dates = getWeekFromPivot(pivot, daysInterval);

    useEffect(() => {
      window.addEventListener("resize", updateDaysInterval);

      return function cleanup() {
        window.removeEventListener("resize", updateDaysInterval);
      };
    }, []);

    const updateDaysInterval = () => {
      // Boundaries for whether to go with seven days in the calendar or five days per week
      const hasFiveDays =
        (window.innerWidth > theme.breakpoints.lg.replace("px", "") &&
          window.innerWidth < 1300) ||
        window.innerWidth < theme.breakpoints.sm.replace("px", "");
      setDaysInterval(hasFiveDays ? 5 : 7);
    };

    const changePivot = (isPlus) => {
      let newDate = new Date(pivot);
      newDate.setDate(
        isPlus ? pivot.getDate() + daysInterval : pivot.getDate() - daysInterval
      );
      setPivot(newDate);
    };

    return (
      <ProductInquiryContainer>
        {Header}
        <DateButtonsDiv>
          <img
            src={leftArrow}
            alt="Left Arrow"
            onClick={() => changePivot(false)}
            style={{
              display:
                pivot.getDate().valueOf() == new Date().getDate().valueOf() ||
                pivot.getDate().valueOf() ==
                  new Date(initialPivot).getDate().valueOf()
                  ? "none"
                  : "block",
              cursor: "pointer",
            }}
          />
          <DateButtons>
            {dates.map((date) => (
              <DateButton
                onClick={() => setSelectedDate(date.value)}
                selected={selectedDate == date.value}
                disabled={date.rawDate < new Date()}
              >
                <h2 className="btn-rubik">{date.rawDate.getDate()}</h2>
                <span className="day-of-week">
                  {dayStrings[date.rawDate.getDay()]}
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
        <TimeButtonsDiv>
          {times.map((time) => (
            <TimeButton
              onClick={() => setSelectedTime(time.value)}
              selected={selectedTime == time.value}
            >
              <h2 className="btn-rubik">{time.label}</h2>
              <span className="day-of-week">{time.period}</span>
            </TimeButton>
          ))}
        </TimeButtonsDiv>
        {showButtons && (
          <InquiryButtons>
            <InquiryButtonsChild>
              <Icon
                icon={"bi:camera-video-fill"}
                color="#FFE5D2"
                width="1.2em"
                height="1.2em"
                style={{ marginRight: "1em" }}
              />
              TOUR&nbsp;IN&nbsp;VIDEO&nbsp;CALL
            </InquiryButtonsChild>
            <InquiryButtonsChild className="muted">
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
