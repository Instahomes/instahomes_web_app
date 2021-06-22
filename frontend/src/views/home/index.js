import React, { useState, useEffect } from "react";
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
  BetaSignupButton,
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
import heroBg from "../../assets/home/hero.jpeg";
import { Helmet } from "react-helmet";
import { getListings } from "../../services/listings";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [listings, setListings] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getListings(setListings, () => {}, "limit=5");
  }, []);

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Instahomes</title>
        <meta name="description" content=""></meta>
      </Helmet>
      <Navbar isHome dark />
      <HeroFrame heroBg={heroBg} showAdvanced={showAdvanced}>
        <HomeSearch
          showAdvanced={showAdvanced}
          setShowAdvanced={setShowAdvanced}
        />
      </HeroFrame>
      <HomeListings>
        <h1 className="dark center">Newest listings in the market today</h1>
        <div className="listing-row-div">
          <ListingRow threeOrLess={listings.length <= 3}>
            {listings.map((listing) => (
              <ListingCard
                id={listing.id}
                key={listing.seo_title}
                developer={listing.development.developer.name}
                image={listing.photo_main}
                name={listing.development.name + " " + listing.unit_name}
                size={listing.floor_size_min}
                price={listing.lowest_price}
                address={listing.development.location}
                bedrooms={listing.bedrooms}
                bathrooms={listing.bathrooms_min}
                isVerified={true}
                isOnWishlist={listing.is_liked}
              />
            ))}
          </ListingRow>
        </div>
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
          <BetaSignupButton onClick={() => history.push("/signup")}>
            SIGN UP FOR BETA
          </BetaSignupButton>
          {/* <form>
            <SignupForm>
              <SignupInput placeholder="Email Address" />
              <SignupButton>JOIN OUR NEWSLETTER</SignupButton>
            </SignupForm>
          </form> */}
        </NewsletterText>
      </NewsletterFrame>
      <ListingFormFrame id="#developer-signup">
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
