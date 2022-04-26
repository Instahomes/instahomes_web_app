import React from "react";
import { withTheme } from "styled-components";
import { MainHeader, OrangeButton } from "./style.js";
const Question = withTheme(
  React.memo(({ QuestionHeading, PlaceHolder }) => {
    return (
      <React.Fragment>
        <MainHeader>
          <span className="header">{QuestionHeading}?</span>
          <input placeholder={PlaceHolder} className="input"></input>
          <OrangeButton>Next</OrangeButton>
        </MainHeader>
      </React.Fragment>
    );
  })
);

export default Question;
