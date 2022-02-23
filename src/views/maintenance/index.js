import React from "react";
import styled from "styled-components";
import { OutlineButton } from "../../components/elements";
import logo from "../../assets/navbar/logo.svg";

const Frame = styled.section`
  background: ${({ theme }) => theme.colors.mainBg};
  padding: 0 var(--main-padding-x);
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .orange {
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors.orange};
  }

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 700;
  }

  p {
    margin-top: 1.8rem;
    color: ${({ theme }) => theme.colors.darkHeader};
    width: 60%;
  }

  ${OutlineButton} {
    font-size: 0.95em;
    margin-top: 2em;

    text-decoration: none;
  }

  .logo {
    margin-top: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    p {
      width: 100%;
    }
  }
`;

const MaintenanceMode = () => {
  return (
    <Frame>
      <h1>Hey home-ie! You’re here early.</h1>
      <h1>We’re still cleaning up, but come back on</h1>
      <h1 className="orange">June 25, Friday 8 PM Launch</h1>
      <p>
        We will also be raffling off Php 1,000 and 4 Php 250 Grab vouchers for
        those who’ll help us share the news. Learn more about it on our Facebook
        page.
      </p>
      <OutlineButton as="a" href="https://www.facebook.com/Instahomes.com.ph">
        FOLLOW US ON FACEBOOK
      </OutlineButton>

      <img src={logo} alt="Instahomes" className="logo" />
    </Frame>
  );
};

export default MaintenanceMode;
