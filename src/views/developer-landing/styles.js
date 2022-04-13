import styled from "styled-components";
import { theme } from "../../globalStyles";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.mainBg};
  padding: 0 var(--main-padding-x);
  height: 100vh;
  top: -100vh;
  padding: 10rem 20rem 0rem 20rem;
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
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 1rem;
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

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 10px 10px 50px 10px;
    bottom: 0;
    width: 100%;
    height: 20px;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    body {
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      padding: 10px 10px 60px 10px;
      bottom: 0;
      height: 20px;
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    body {
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      padding: 10px 10px 60px 10px;
      bottom: 0;
      height: 20px;
    }
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    body {
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      padding: 10px 10px 60px 10px;
      bottom: 0;
      height: 20px;
    }
  }
`;
