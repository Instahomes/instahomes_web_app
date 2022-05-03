import React from "react";
import { withTheme } from "styled-components";
import Base from "../../../components/developer-admin/base";
import QuestionContainer from "../../../components/developer-website/questionContainer";
import { OrangeButton, OutlineButton, Wrapper } from "./styles";

const HeaderElements = () => {
  return (
      <OutlineButton>Save for later</OutlineButton> 
  );
};

const Listing = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Base
          headerName="Add a New Listing"
          HeaderElements = {
            <HeaderElements></HeaderElements>
          }
          Body={
            <React.Fragment>
              {/* <OutlineButton>Save for later</OutlineButton> */}
              <QuestionContainer
                QuestionHeading="What is the name of the listing"
                PlaceHolder="Enter Listing Name"
              ></QuestionContainer>
            </React.Fragment>
          }
        ></Base>
      </Wrapper>
    </React.Fragment>
  );
};

export default Listing;
