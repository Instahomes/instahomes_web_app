import React from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ProductInquiry from "../../components/product-inquiry";
import ProductTour from "../../components/product-tour";
import styled from "styled-components";

import heart from "../../assets/product/heart.svg";
import check from "../../assets/product/check.svg";
import map from "../../assets/product/map.svg";
import specsArrow from "../../assets/product/specs_arrow.svg";
import propertyDetails from "../../assets/product/propertyDetails.png";
import propertyMap from "../../assets/product/propertyMap.png";
import parklinks from "../../assets/product/parklinks.png";
import alveo from "../../assets/product/alveo.png";
import imageMain from "../../assets/product/imageMain.png";
import image1 from "../../assets/product/image1.png";
import image2 from "../../assets/product/image2.png";
import image3 from "../../assets/product/image3.png";
import image4 from "../../assets/product/image4.png";
import area from "../../assets/product/area.svg";
import bath from "../../assets/product/bath.svg";
import bed from "../../assets/product/bed.svg";
import alveoProperty from "../../assets/development/alveoProperty.jpeg";
import {} from "./styles";

const HeroSection = styled.section`
  height: 800px;
  background: linear-gradient(
      180deg,
      rgba(12, 20, 31, 0.62) 0%,
      rgba(28, 55, 90, 0) 116.2%
    ),
    url(${alveoProperty}), #0d1115;
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeroContent = styled.div`
  width: 40%;
  margin: auto;
`;

const Development = (props) => {
  return (
    <Layout>
      <Navbar dark />
      <HeroSection>
        <HeroContent>
          <h1>The Lattice at Parklinks</h1>
          <span>
            <img src={map} />
            &nbsp;C-5 Road, Brgy. Rosario, Pasig City
          </span>
          <p>
            The Lattice is Alveo Land's first upscale residential tower in
            Parklinks. Parklinks is a 35-hectare mixed-used development and the
            biggest estate along the prime C-5 corridor. It is envisioned to be
            the greenest urban estate in Metro Manila dedicating 50% of the
            development to open spaces and greeneries.
          </p>
        </HeroContent>
      </HeroSection>
    </Layout>
  );
};

export default Development;
