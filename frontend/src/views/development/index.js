import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ListingCard from "../../components/listing-card";
import DeveloperContact from "../../components/developer-contact";
import FeaturedSection from "../../components/featured-section";
import Amenities from "../../components/amenities";
import Loading from "../../components/loading";
import EmptyPage from "../../components/empty-page";

import map from "../../assets/development/map.svg";
import devMap from "../../assets/development/devMap.png";
import {
  DevelopmentContainer,
  HeroSection,
  HeroContent,
  ListingRow,
  About,
} from "./styles";
import { Helmet } from "react-helmet";
import { getDevelopments } from "../../services/developments";
import { useRouteMatch } from "react-router-dom";

const Development = React.memo((props) => {
  const [development, setDevelopment] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const match = useRouteMatch();

  useEffect(() => {
    getDevelopments(
      (data) => (data.length > 0 ? setDevelopment(data[0]) : setIsEmpty(true)),
      () => setIsEmpty(true),
      `id=${match.params.id}`
    );
  }, []);

  // const truncateOverview = (overview) => {
  //   const MAX_WORD_COUNT = 50;
  //   const words = overview.split(" ");
  //   if (words.length > MAX_WORD_COUNT) {
  //     return words.slice(0, MAX_WORD_COUNT).join(" ") + "...";
  //   }
  //   return words.join(" ");
  // };

  const headingComponent = () => (
    <h2 className="h2">Amenities in {development.name}</h2>
  );

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{development ? development.seo_title : "Instahomes"}</title>
        <meta
          name="description"
          content={development ? development.seo_desc : ""}
        ></meta>
      </Helmet>
      <Navbar dark />
      <EmptyPage isEmpty={isEmpty}>
        {development ? (
          <DevelopmentContainer>
            <HeroSection image={development.photo_main}>
              <div className="hero-gradient">
                <HeroContent>
                  <h1>{development.name}</h1>
                  <span>
                    <img src={map} />
                    &nbsp;&nbsp;{development.location}
                  </span>
                  <p>{development.developer.short_desc}</p>
                  {/* <p>{truncateOverview(development.overview)}</p> */}
                </HeroContent>
              </div>
              <div className="hero-image"></div>
              <div className="hero-black"></div>
            </HeroSection>
            <ListingRow threeOrLess={development.listing_set.length <= 3}>
              {development.listing_set.map((listing) => (
                <ListingCard
                  id={listing.id}
                  key={listing.seo_title}
                  developer={development.developer.name}
                  developerLogo={development.developer.featured_image}
                  image={listing.photo_main}
                  name={development.name + " " + listing.unit_name}
                  size={listing.lot_size}
                  price={listing.lowest_price}
                  address={development.location}
                  bedrooms={listing.bedrooms}
                  bathrooms_min={listing.bathrooms_min}
                  bathrooms_max={listing.bathrooms_max}
                  isVerified={true}
                  isOnWishlist={listing.is_liked}
                />
              ))}
            </ListingRow>
            <About
              backgroundImage={development.map_image || development.photo_main}
            >
              <div>
                <h2 className="h2">About the {development.name}</h2>
                <span className="span">DEVELOPMENT OVERVIEW</span>
                <p className="p">{development.overview}</p>
              </div>
              <div className="about-map"></div>
            </About>
            <Amenities
              amenities={[
                [
                  development.amenity_1,
                  development.amenity_1_desc,
                  development.amenity_1_image,
                ],
                [
                  development.amenity_2,
                  development.amenity_2_desc,
                  development.amenity_2_image,
                ],
                [
                  development.amenity_3,
                  development.amenity_3_desc,
                  development.amenity_3_image,
                ],
                [
                  development.amenity_4,
                  development.amenity_4_desc,
                  development.amenity_4_image,
                ],
              ]}
              Heading={headingComponent}
            />
            {/* <DeveloperContact /> */}
            <FeaturedSection />
          </DevelopmentContainer>
        ) : (
          <Loading></Loading>
        )}
      </EmptyPage>
    </Layout>
  );
});

export default Development;
