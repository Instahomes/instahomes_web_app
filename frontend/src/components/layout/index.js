import React from "react";
import styled from "styled-components";
import TopBar from "../top-bar";
import Footer from "../footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Frame = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <TopBar />
      <MessengerCustomerChat
        pageId="100233035447229"
        // appId="<APP_ID>"
        // htmlRef="<REF_STRING>"
      />
      <Frame>{children}</Frame>
      <Footer />
    </React.Fragment>
  );
}
