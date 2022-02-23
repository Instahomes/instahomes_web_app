import React from "react";
import styled from "styled-components";
import TopBar from "../top-bar";
import Footer from "../footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Frame = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default function Layout({ children, noFooter }) {
  return (
    <React.Fragment>
      <TopBar />
      <MessengerCustomerChat
        pageId="100233035447229"
        appId="1024950421584974"
        // htmlRef="<REF_STRING>"
      />
      <Frame>{children}</Frame>
      {!noFooter && <Footer />}
    </React.Fragment>
  );
}
