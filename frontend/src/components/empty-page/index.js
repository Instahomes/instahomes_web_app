import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { OutlineButton } from "../elements";

const Frame = styled.section`
  background: ${({ theme }) => theme.colors.mainBg};
  max-width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  ${OutlineButton} {
    font-size: 0.95em;
    margin-top: 2em;
  }
`;

const EmptyPage = ({ children, isEmpty }) => {
  const history = useHistory();

  return isEmpty ? (
    <Frame>
      <h1>Oh no! This page does not exist.</h1>
      <p>No worries, it happens. Let’s get you back home instead.</p>
      <OutlineButton onClick={() => history.push("/")}>
        BACK TO HOME
      </OutlineButton>
    </Frame>
  ) : (
    children
  );
};

export default EmptyPage;
