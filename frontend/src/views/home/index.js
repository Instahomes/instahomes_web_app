import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import ListingCard from "../../components/listing-card";
import heroBg from "../../assets/home/hero.png";
import house from "../../assets/card/sample_house.png";
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

const HomeListings = styled.div`
  padding: 3em ${({ theme }) => theme.padding.mainPaddingX};
`;

const ListingRow = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 400px;
  column-gap: 20px;
`;

const Home = (props) => {
  return (
    <Layout>
      <HeroFrame>
        <Navbar />
        <HomeSearch />
      </HeroFrame>
      <HomeListings>
        <h1 className="dark center">Featured listings in the market today</h1>
        <ListingRow>
          <ListingCard
            image={house}
            name="Lipa Town House Unit"
            size={55}
            address="Bel-Air Residences Lipa, Batangas"
            bedrooms={2}
            bathrooms={2}
          />
          <ListingCard
            image={house}
            name="Lipa Town House Unit"
            size={55}
            address="Bel-Air Residences Lipa, Batangas"
            bedrooms={2}
            bathrooms={2}
          />
          <ListingCard
            image={house}
            name="Lipa Town House Unit"
            size={55}
            address="Bel-Air Residences Lipa, Batangas"
            bedrooms={2}
            bathrooms={2}
          />
        </ListingRow>
      </HomeListings>
    </Layout>
  );
};

export default Home;
