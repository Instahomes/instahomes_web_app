import React from "react";
import styled from "styled-components";
import TopBar from "../top-bar";
import Footer from "../footer";

const Frame = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <TopBar />
      <Frame>{children}</Frame>
      <Footer />
    </React.Fragment>
  );
}
