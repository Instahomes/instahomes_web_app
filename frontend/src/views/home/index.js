import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import ListingCard from "../../components/listing-card";
import house from "../../assets/card/sample_house.png";
import Navbar from "../../components/navbar";
import HomeSearch from "../../components/home-search";
import {
  HeroFrame,
  HomeListings,
  ListingRow,
  NewsletterFrame,
  NewsletterImage,
  NewsletterText,
  SignupForm,
  SignupInput,
  SignupButton,
} from "./styles";

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
      <NewsletterFrame>
        <NewsletterImage />
        <NewsletterText>
          <h1>Invest in Real Estate for your Family’s Future</h1>
          <p>
            Invest in real estate in the Philippines without having to worry
            about legal concerns. We make sure you get recommended trustworthy
            and relevant properties suited for your area, budget, and investment
            needs through our algorithm.
          </p>
          <form>
            <SignupForm>
              <SignupInput placeholder="Email Address" />
              <SignupButton>JOIN OUR NEWSLETTER</SignupButton>
            </SignupForm>
          </form>
        </NewsletterText>
      </NewsletterFrame>
    </Layout>
  );
};

export default Home;
