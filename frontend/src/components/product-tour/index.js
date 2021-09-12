import React, { useState } from "react";
import walk from "../../assets/product/walk.svg";
import online from "../../assets/product/online.svg";
import leftArrow from "../../assets/product/leftArrow.svg";
import rightArrow from "../../assets/product/rightArrow.svg";
import check from "../../assets/product/check.svg";
import { LightTextarea } from "../elements";
import {
  ProductInquiryContainer,
  DateButtonsDiv,
  DateButtons,
  DateButton,
  InquiryButtons,
  InquiryButtonsChild,
} from "./styles";
import { Icon } from "@iconify/react";
import { withTheme } from "styled-components";
import { dayStrings } from "./constants";

const getWeekFromPivot = (pivot, numDays = 7) => {
  let dayOfPivot = pivot.getDay();
  let startDate = new Date();
  startDate.setDate(pivot.getDate() - dayOfPivot);

  let dateNextWeek = new Date();
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

const ProductTour = withTheme(({ theme, initialPivot }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pivot, setPivot] = useState(
    initialPivot ? new Date(initialPivot) : new Date()
  );
  let dates = getWeekFromPivot(pivot);

  const changePivot = (isPlus) => {
    let dateNextWeek = new Date();
    dateNextWeek.setDate(isPlus ? pivot.getDate() + 6 : pivot.getDate() - 6);
    setPivot(dateNextWeek);
  };

  return (
    <ProductInquiryContainer>
      <h2 className="btn-rubik">
        Book a tour in this home
        <img
          src={check}
          alt="Check"
          style={{ marginLeft: "10px", width: "0.8em", height: "0.8em" }}
        />
      </h2>
      <i id="sms-charges">*Subject to availability of Developer</i>
      <DateButtonsDiv>
        <img
          src={leftArrow}
          alt="Left Arrow"
          onClick={() => changePivot(false)}
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
          src={rightArrow}
          alt="Right Arrow"
          onClick={() => changePivot(true)}
        />
      </DateButtonsDiv>
      <InquiryButtons>
        <InquiryButtonsChild>
          <Icon
            icon={"bi:camera-video-fill"}
            color="#FFE5D2"
            width="1.2em"
            height="1.2em"
            style={{ marginRight: "1em" }}
          />
          TOUR&nbsp;IN&nbsp;VIDEO CALL
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
    </ProductInquiryContainer>
  );
});

export default ProductTour;
