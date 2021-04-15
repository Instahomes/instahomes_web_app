import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import heroBg from "../../assets/home/hero.png";
import Navbar from "../../components/navbar";
import HomeSearch from "../../components/home-search";

const HeroFrame = styled.div`
  height: 792px;
  width: 100%;
  background: linear-gradient(
      180deg,
      #f9f9f9 4.69%,
      rgba(254, 254, 254, 0.226848) 78.38%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${heroBg});
  background-size: cover;
`;

const Home = (props) => {
  return (
    <Layout>
      <HeroFrame>
        <Navbar />
        <HomeSearch />
      </HeroFrame>
    </Layout>
  );
};

export default Home;
