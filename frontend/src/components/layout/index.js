import React from "react";
import styled from "styled-components";
import TopBar from "../top-bar";

const Frame = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <TopBar />
      <Frame>{children}</Frame>
    </React.Fragment>
  );
}
