import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import EmptyPage from "../../../components/empty-page";
import development1 from "./images/development1.webp";
import logo from "../../../assets/navbar/logo.svg";
import { Icon } from "@iconify/react";

import {
  DevelopmentPage,
  Landing,
  DevelopmentComponent,
  PoweredBy,
} from "./styles";
import { Helmet } from "react-helmet";

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
          <DevelopmentComponent image={development1}>
            <span className="developer">ALVEO LAND CORPORATION</span>
            <h1 className="name">Callisto Towers</h1>
            <h2 className="location">
              <Icon
                icon="el:map-marker"
                color="#e6edf5"
                width="0.9em"
                height="0.9em"
              />
              Circuit Lane, Makati
            </h2>
          </DevelopmentComponent>
          <PoweredBy>
            POWERED BY <img className="logo" src={logo} alt="Instahomes" />
          </PoweredBy>
        </Landing>
      </EmptyPage>
    </DevelopmentPage>
  );
});

export default Development;
