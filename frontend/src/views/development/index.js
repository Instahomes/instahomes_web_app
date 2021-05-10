import React from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ListingCard from "../../components/listing-card";
import FeaturedCard from "../../components/featured-card";

import heart from "../../assets/product/heart.svg";
import check from "../../assets/product/check.svg";
import email from "../../assets/product/email.svg";
import phone from "../../assets/product/phone.svg";
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
  ContactComponent,
  InquiryButtons,
  InquiryButtonsChild,
  ButtonIcon,
  Footnotes,
  FeaturedNews,
} from "./styles";
import house from "../../assets/card/sample_house.png";

const Development = (props) => {
  return (
    <Layout>
      <Navbar dark />
      <DevelopmentContainer>
        <HeroSection>
          <HeroContent>
            <h1>The Lattice at Parklinks</h1>
            <span>
              <img src={map} />
              &nbsp;&nbsp;C-5 Road, Brgy. Rosario, Pasig City
            </span>
            <p>
              The Lattice is Alveo Land's first upscale residential tower in
              Parklinks. Parklinks is a 35-hectare mixed-used development and
              the biggest estate along the prime C-5 corridor. It is envisioned
              to be the greenest urban estate in Metro Manila dedicating 50% of
              the development to open spaces and greeneries.
            </p>
          </HeroContent>
        </HeroSection>
        <ListingRow>
          <ListingCard
            image={house}
            name="Lipa Town House Unit"
            size={55}
            address="Bel-Air Residences Lipa, Batangas"
            bedrooms={2}
            bathrooms={2}
            isVerified
          />
          <ListingCard
            image={house}
            name="Lipa Town House Unit"
            size={55}
            address="Bel-Air Residences Lipa, Batangas"
            bedrooms={2}
            bathrooms={2}
            isVerified
          />
          <ListingCard
            image={house}
            name="Lipa Town House Unit"
            size={55}
            address="Bel-Air Residences Lipa, Batangas"
            bedrooms={2}
            bathrooms={2}
            isVerified
          />
          <ListingCard
            image={house}
            name="Lipa Town House Unit"
            size={55}
            address="Bel-Air Residences Lipa, Batangas"
            bedrooms={2}
            bathrooms={2}
            isVerified
          />
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
            <AmenitiesCard image={devMap}>
              <div className="amenities-img"></div>
              <span className="span">MULTI-FUNCTION HALL</span>
              <p className="p">
                The Lattice is Alveo Land's first upscale residential tower in
                Parklinks. Parklinks is a 35-hectare mixed-used development and
                the biggest estate along the prime C-5 corridor.
              </p>
            </AmenitiesCard>
            <AmenitiesCard image={devMap}>
              <div className="amenities-img"></div>
              <span className="span">MULTI-FUNCTION HALL</span>
              <p className="p">
                The Lattice is Alveo Land's first upscale residential tower in
                Parklinks. Parklinks is a 35-hectare mixed-used development and
                the biggest estate along the prime C-5 corridor.
              </p>
            </AmenitiesCard>
            <AmenitiesCard image={devMap}>
              <div className="amenities-img"></div>
              <span className="span">MULTI-FUNCTION HALL</span>
              <p className="p">
                The Lattice is Alveo Land's first upscale residential tower in
                Parklinks. Parklinks is a 35-hectare mixed-used development and
                the biggest estate along the prime C-5 corridor.
              </p>
            </AmenitiesCard>
          </div>
        </Amenities>
        <ContactComponent>
          <h2 className="h2">
            Get in touch with Alveo Land Corporation directly today!
          </h2>
          <InquiryButtons>
            <InquiryButtonsChild>
              <ButtonIcon src={email} alt="Email" />
              CONTACT&nbsp;VIA&nbsp;EMAIL
            </InquiryButtonsChild>
            <InquiryButtonsChild>
              <ButtonIcon src={phone} alt="Phone" />
              CONTACT&nbsp;VIA&nbsp;PHONE*
            </InquiryButtonsChild>
          </InquiryButtons>
          <div>
            <Footnotes>
              <i>*SMS charges may apply</i>
            </Footnotes>
          </div>
        </ContactComponent>
        <FeaturedNews>
          <h2 className="h2">Featured News and Press</h2>
          <div>
            <FeaturedCard
              image={devMap}
              title="5 Reasons to Invest in Philippine Real Estate"
            />
            <FeaturedCard
              image={devMap}
              title="5 Reasons to Invest in Philippine Real Estate"
            />
            <FeaturedCard
              image={devMap}
              title="5 Reasons to Invest in Philippine Real Estate"
            />
          </div>
        </FeaturedNews>
      </DevelopmentContainer>
    </Layout>
  );
};

export default Development;
