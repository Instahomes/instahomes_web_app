import React from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ListingCard from "../../components/listing-card";
import DeveloperContact from "../../components/developer-contact";
import FeaturedSection from "../../components/featured-section";

import map from "../../assets/development/map.svg";
import devMap from "../../assets/development/devMap.png";
import house from "../../assets/card/sample_house.png";
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

const sampleListings = [
  {
    id: 1,
    name: "The Lattice Studio Unit",
    size: 33,
    price: "9,500,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 1,
    bathrooms: 1,
    isVerified: true,
  },
  {
    id: 1,
    name: "The Lattice 1-Bedroom",
    size: 58,
    price: "13,000,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 1,
    bathrooms: 1,
    isVerified: false,
  },
  {
    id: 1,
    name: "The Lattice 2-Bedroom",
    size: 94,
    price: "24,000,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 2,
    bathrooms: 1,
    isVerified: true,
  },
  {
    id: 1,
    name: "The Lattice 3-Bedroom",
    size: 128,
    price: "32,000,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 3,
    bathrooms: 2,
    isVerified: true,
  },
];

const sampleAmenities = [
  {
    name: "MULTI-FUNCTION HALL",
    description:
      "The Lattice is Alveo Land's first upscale residential tower in Parklinks. Parklinks is a 35-hectare mixed-used development and the biggest estate along the prime C-5 corridor.",
  },
  {
    name: "STATE-OF-THE-ART GYM",
    description:
      "The Lattice is Alveo Land's first upscale residential tower in Parklinks. Parklinks is a 35-hectare mixed-used development and the biggest estate along the prime C-5 corridor.",
  },
  {
    name: "LUXURIOUS POOL & SPA",
    description:
      "The Lattice is Alveo Land's first upscale residential tower in Parklinks. Parklinks is a 35-hectare mixed-used development and the biggest estate along the prime C-5 corridor.",
  },
];

const sampleFeatures = [
  {
    title: "5 Reasons to Invest in Philippine Real Estate",
    url: "",
    image: house,
  },
  {
    title: "Top Indicators of A Valuable Property",
    url: "",
    image: house,
  },
  {
    title: "The Best Areas to Invest in the Philippines in 2021",
    url: "",
    image: house,
  },
];

const Development = (props) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Instahomes | The Lattice at Parklinks</title>
        <meta name="description" content=""></meta>
      </Helmet>
      <Navbar dark />
      <DevelopmentContainer>
        <HeroSection>
          <div className="hero-gradient">
            <HeroContent>
              <h1>The Lattice at Parklinks</h1>
              <span>
                <img src={map} />
                &nbsp;&nbsp;C-5 Road, Brgy. Rosario, Pasig City
              </span>
              <p>
                The Lattice is Alveo Land's first upscale residential tower in
                Parklinks. Parklinks is a 35-hectare mixed-used development and
                the biggest estate along the prime C-5 corridor. It is
                envisioned to be the greenest urban estate in Metro Manila
                dedicating 50% of the development to open spaces and greeneries.
              </p>
            </HeroContent>
          </div>
          <div className="hero-image"></div>
          <div className="hero-black"></div>
        </HeroSection>
        <ListingRow threeOrLess={sampleListings.length <= 3}>
          {sampleListings.map((listing) => (
            <ListingCard
              id={listing.id}
              key={listing.name}
              image={house}
              name={listing.name}
              size={listing.size}
              price={listing.price}
              address={listing.address}
              bedrooms={listing.bedrooms}
              bathrooms={listing.bathrooms}
              isVerified={listing.isVerified}
            />
          ))}
        </ListingRow>
        <About backgroundImage={devMap}>
          <div>
            <h2 className="h2">About the Lattice at Parklinks</h2>
            <span className="span">DEVELOPMENT OVERVIEW</span>
            <p className="p">
              The Lattice is Alveo Land's first upscale residential tower in
              Parklinks. Parklinks is a 35-hectare mixed-used development and
              the biggest estate along the prime C-5 corridor.
            </p>
            <p className="p">
              It is envisioned to be the greenest urban estate in Metro Manila
              dedicating 50% of the development to open spaces and greeneries.
              It services upscale high-class living in the urban lands of the
              metro and offers a wide selection of unit spaces suited for the
              modern man.
            </p>
          </div>
          <div className="about-map"></div>
        </About>
        <Amenities>
          <h2 className="h2">Amenities in The Lattice at Parklinks </h2>
          <div>
            {sampleAmenities.map((amenity) => (
              <AmenitiesCard key={amenity.name} image={devMap}>
                <div className="amenities-img"></div>
                <span className="span">{amenity.name}</span>
                <p className="p">{amenity.description}</p>
              </AmenitiesCard>
            ))}
          </div>
        </Amenities>
        <DeveloperContact />
        <FeaturedSection data={sampleFeatures} />
      </DevelopmentContainer>
    </Layout>
  );
};

export default Development;
