import styled from "styled-components";
import { theme } from "../../../globalStyles";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.mainBg};
  padding: 0 var(--main-padding-x);
  height: 100vh;
  padding: 10rem 12rem 0rem 12rem;
  display: flex;
  flex-direction: column;

  h1 {
    margin-left: 0.75rem;
    font-size: 2.25rem;
    color: #1a2534;
  }

  p {
    margin-left: 0.75rem;
    font-size: 1.4rem;
    color: #1a2534;
    font-weight: 200;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    overflow: hidden;
    margin: 0 auto;
    padding: 5rem 5rem 5rem 5rem;

    body {
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }
    div {
      flex-direction: column;
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    overflow: hidden;
    margin: 0 auto;
    padding: 2rem 2rem 2rem 2rem;

    div {
      flex-direction: column;
    }
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 1rem;
    overflow: hidden;

    body {
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }
    div {
      flex-direction: column;
    }
  }
`;

export const Footer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 0.625rem 0.625rem 3.75rem 0.625rem;
    bottom: 0;
    width: 100%;
    height: 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      padding: 0.625rem;
      bottom: 0;
      height: 0.938rem;
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      padding: 1.25rem;
      bottom: 0;
      height: 1.25rem;
    }
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      padding: 0.625rem;
      bottom: 0;
      height: 0.938rem;
    }
  }
`;
