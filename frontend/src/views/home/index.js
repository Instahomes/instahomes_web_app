import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import ListingCard from "../../components/listing-card";
import Navbar from "../../components/navbar";
import HomeSearch from "../../components/home-search";
import ListProperty from "../../components/list-property-form";
import {
  HeroFrame,
  HomeListings,
  ListingRow,
  NewsletterFrame,
  NewsletterImage,
  NewsletterText,
  BetaSignupButton,
  ListingFormFrame,
  ListingFormText,
  SecondarySearchFrame,
} from "./styles";
import SearchComponent from "../../components/search-component";
import heroBg from "../../assets/home/hero.webp";
import { Helmet } from "react-helmet";
import { getListings } from "../../services/listings";
import { useHistory } from "react-router-dom";
import ReactGA from "react-ga";

const Home = React.memo((props) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [listings, setListings] = useState([]);
  const history = useHistory();

  const handleSearchSubmit = (values) => {
    const { developer_id, ...valuesCopy } = values;

    if (developer_id) {
      valuesCopy.developer_id = developer_id.value || developer_id;
    }

    const params = Object.entries(valuesCopy)
      .filter(([key, value]) => !!value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    // Track search entry in GA
    Object.entries(valuesCopy)
      .filter(([key, value]) => !!value)
      .forEach(([key, value]) => {
        ReactGA.event({
          category: "Search Home",
          action: key,
          label: value,
        });
      });

    // Track search combination in GA
    ReactGA.event({
      category: "Search Combination",
      action: "Searched for a combination of parameters",
      label: params,
    });

    history.push({
      pathname: "/search",
      search: "?" + params,
    });
  };

  useEffect(() => {
    getListings(setListings, () => {}, "limit=5");
  }, []);

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Instahomes: Trusted Properties for Rent & Sale Philippines
        </title>
        <meta
          name="description"
          content="Find the best properties for sale and for rent in the Philippines through Instahomes’ partnerships with only the top & trusted real estate developers."
        />
      </Helmet>
      <Navbar isHome dark />
      <HeroFrame heroBg={heroBg} showAdvanced={showAdvanced}>
        <HomeSearch
          showAdvanced={showAdvanced}
          setShowAdvanced={setShowAdvanced}
          handleSearchSubmit={handleSearchSubmit}
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
                developerLogo={listing.development.developer.featured_image}
                image={listing.photo_main}
                name={listing.development.name + " " + listing.unit_name}
                size={listing.lot_size}
                price={listing.lowest_price}
                address={listing.development.location}
                bedrooms={listing.bedrooms}
                bathrooms_min={listing.bathrooms_min}
                bathrooms_max={listing.bathrooms_max}
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
      {/* <ListingFormFrame id="#developer-signup">
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
        <ListProperty />
      </ListingFormFrame> */}
      <SecondarySearchFrame>
        <h1>Find your new dream home in just a click</h1>
        <SearchComponent
          showAdvanced={showAdvanced}
          setShowAdvanced={setShowAdvanced}
          handleSearchSubmit={handleSearchSubmit}
        />
      </SecondarySearchFrame>
    </Layout>
  );
});

export default Home;
