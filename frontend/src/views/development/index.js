import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ListingCard from "../../components/listing-card";
import DeveloperContact from "../../components/developer-contact";
import FeaturedSection from "../../components/featured-section";
import Loading from "../../components/loading";

import map from "../../assets/development/map.svg";
import devMap from "../../assets/development/devMap.png";
import {
  DevelopmentContainer,
  HeroSection,
  HeroContent,
  ListingRow,
  About,
  Amenities,
  AmenitiesCard,
} from "./styles";
import { Helmet } from "react-helmet";
import { getDevelopments } from "../../services/developments";
import { useRouteMatch } from "react-router-dom";

const Development = (props) => {
  const [development, setDevelopment] = useState(null);
  const match = useRouteMatch();

  useEffect(() => {
    getDevelopments(
      (data) => data.length > 0 && setDevelopment(data[0]),
      `id=${match.params.id}`
    );
  }, []);

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{development ? development.seo_title : "Instahomes"}</title>
        <meta
          name="description"
          content={development ? development.overview : ""}
        ></meta>
      </Helmet>
      <Navbar dark />
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
                <p>{development.overview}</p>
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
                image={listing.photo_main}
                name={development.name + " " + listing.unit_name}
                size={listing.floor_size_min}
                price={listing.lowest_price}
                address={development.location}
                bedrooms={listing.bedrooms}
                bathrooms={listing.bathrooms_min}
                isVerified={true}
              />
            ))}
          </ListingRow>
          <About backgroundImage={devMap}>
            <div>
              <h2 className="h2">About the {development.name}</h2>
              <span className="span">DEVELOPMENT OVERVIEW</span>
              <p className="p">{development.overview}</p>
            </div>
            <div className="about-map"></div>
          </About>
          <Amenities>
            <h2 className="h2">Amenities in {development.name}</h2>
            <div>
              {[
                [development.amenity_1, development.amenity_1_desc],
                [development.amenity_2, development.amenity_2_desc],
                [development.amenity_3, development.amenity_3_desc],
                [development.amenity_4, development.amenity_4_desc],
              ].map(
                ([amenityName, amenityDesc]) =>
                  amenityName && (
                    <AmenitiesCard key={amenityName} image={devMap}>
                      <div className="amenities-img"></div>
                      <span className="span">{amenityName}</span>
                      <p className="p">{amenityDesc}</p>
                    </AmenitiesCard>
                  )
              )}
            </div>
          </Amenities>
          <DeveloperContact />
          <FeaturedSection />
        </DevelopmentContainer>
      ) : (
        <Loading></Loading>
      )}
    </Layout>
  );
};

export default Development;
