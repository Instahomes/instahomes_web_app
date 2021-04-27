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
  ListingFormFrame,
  ListingFormText,
  ListingForm,
  ListingFormDiv,
  ListingButton,
} from "./styles";
import {
  LightInput,
  LightTextarea,
  OrangeButton,
} from "../../components/elements";

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
            name="Ferndale Villas, Pasong Tamo"
            size={30}
            address="Sampaguita Ave., Pasong Tamo, QC"
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
      <ListingFormFrame>
        <ListingFormText>
          <h1 className="dark">
            Interested in Joining Our Roster of Fast-Growing Developers?
          </h1>
          <p className="body-dark">
            We are opening up our doors for real-estate developers in the
            Philippines who want a free and seamless/no-hassle experience
            selling their available listings.
          </p>
          <ul>
            <li className="body-dark">
              <i className="fa-li fa fa-check"></i>We’ll create a <b>funnel</b>{" "}
              for customer acquisition.
            </li>
            <li className="body-dark">
              <i className="fa-li fa fa-check"></i>We’ll <b>streamline</b>{" "}
              quotation to accounting process.
            </li>
            <li className="body-dark">
              <i className="fa-li fa fa-check"></i>We’ll add your listings
              completely <b>free of cost</b>.
            </li>
          </ul>
        </ListingFormText>
        <ListingForm>
          <ListingFormDiv>
            <LightInput
              marginBottom="1em"
              type="text"
              name="name"
              placeholder="Full name or Company name"
            />
            <LightInput
              marginBottom="1em"
              type="email"
              name="email"
              placeholder="Email address"
            />
            <LightInput
              marginBottom="1em"
              type="text"
              name="phone"
              placeholder="Cellphone number"
            />
            <LightTextarea
              marginBottom="1em"
              name="details"
              id="details"
              placeholder="Any details about your properties (locations, types of property, prices, etc.)"
            ></LightTextarea>
            <ListingButton>
              <OrangeButton>
                LIST YOUR PROPERTY <i id="signup-free">it's free</i>
              </OrangeButton>
            </ListingButton>
          </ListingFormDiv>
        </ListingForm>
      </ListingFormFrame>
    </Layout>
  );
};

export default Home;
