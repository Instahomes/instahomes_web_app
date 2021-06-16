import React, { useState } from "react";
import walk from "../../assets/product/walk.svg";
import online from "../../assets/product/online.svg";
import leftArrow from "../../assets/product/leftArrow.svg";
import rightArrow from "../../assets/product/rightArrow.svg";
import { LightTextarea } from "../elements";
import {
  ProductInquiryContainer,
  DateButtonsDiv,
  DateButtons,
  DateButton,
  InquiryButtons,
  InquiryButtonsChild,
  ButtonIcon,
} from "./styles";

const dates = [
  {
    value: "03-03-2021",
    month: "March",
    day: "3",
  },
  {
    value: "03-04-2021",
    month: "March",
    day: "4",
  },
  {
    value: "03-05-2021",
    month: "March",
    day: "5",
  },
  {
    value: "03-06-2021",
    month: "March",
    day: "6",
  },
  {
    value: "03-07-2021",
    month: "March",
    day: "7",
  },
];

const ProductTour = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <ProductInquiryContainer>
      <h2 className="btn-rubik">
        Tour the <span id="property-name">The Lattice Studio Unit</span>
      </h2>
      <DateButtonsDiv>
        <img src={leftArrow} alt="Left Arrow" />
        <DateButtons>
          {dates.map((date) => (
            <DateButton
              onClick={() => setSelectedDate(date.value)}
              selected={selectedDate == date.value}
            >
              <span>{date.month}</span>
              <h2>{date.day}</h2>
            </DateButton>
          ))}
        </DateButtons>
        <img src={rightArrow} alt="Right Arrow" />
      </DateButtonsDiv>
      <InquiryButtons>
        <InquiryButtonsChild>
          <ButtonIcon src={walk} alt="Walk" />
          TOUR&nbsp;IN&nbsp;PERSON
        </InquiryButtonsChild>
        <InquiryButtonsChild>
          <ButtonIcon src={online} alt="Online" />
          TOUR&nbsp;VIA&nbsp;ONLINE
        </InquiryButtonsChild>
      </InquiryButtons>
      <i id="sms-charges">Subject to availability of Property Seller</i>
    </ProductInquiryContainer>
  );
};

export default ProductTour;
