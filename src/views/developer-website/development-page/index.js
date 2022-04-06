import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import EmptyPage from "../../../components/empty-page";
import development1 from "./images/development1.webp";

// import {
//   DevelopmentContainer,
//   HeroSection,
//   HeroContent,
//   ListingRow,
//   About,
// } from "./styles";
import { Helmet } from "react-helmet";

import styled from "styled-components";
const DevelopmentPage = styled.main`
  background: ${({ theme }) => theme.colors.mainBg};
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);
`;

const Landing = styled.section`
  height: 100vh;
`;

const DevelopmentComponent = styled.article`
  width: 100%;
  height: 500px;
  background: linear-gradient(
      360deg,
      rgba(15, 15, 17, 0.64) 22.92%,
      rgba(0, 0, 0, 0) 68.23%
    ),
    url("${({ image }) => image}");

  border-radius: 0px 0px 26px 26px;
  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.15));
`;

const Development = React.memo((props) => {
  return (
    <DevelopmentPage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Instahomes</title>
        <meta name="description" content=""></meta>
      </Helmet>
      <EmptyPage isEmpty={false}>
        <Landing>
          <DevelopmentComponent image={development1}></DevelopmentComponent>
        </Landing>
      </EmptyPage>
    </DevelopmentPage>
  );
});

export default Development;
