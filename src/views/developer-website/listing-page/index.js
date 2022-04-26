import React from "react";
import { withTheme } from "styled-components";
import Base from "../../../components/developer-admin/base";
import QuestionContainer from "../../../components/developer-website/questionContainer";
import { OutlineButton, Wrapper } from "./styles";

// const HeaderElements = () => {
//   return (
//     <React.Fragment>
//       <OutlineButton>Save for later</OutlineButton>
//     </React.Fragment>
//   );
// };

const Listing = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Base
          headerName="Add a New Listing"
          // headerElements={<HeaderElements />}
          Body={
            <React.Fragment>
              <OutlineButton>Save for later</OutlineButton>
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
