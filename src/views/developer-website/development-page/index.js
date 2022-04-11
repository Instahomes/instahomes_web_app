import React, { useState, useEffect } from "react";
import ListingCard from "../../../components/listing-card";
import EmptyPage from "../../../components/empty-page";
import development1 from "./images/development1.webp";
import map from "./images/map.png";
import logo from "../../../assets/navbar/logo.svg";
import { Icon } from "@iconify/react";
import listings from "./sampleListings.json";

import {
  DevelopmentPage,
  Landing,
  DevelopmentComponent,
  PoweredBy,
  DevelopmentFields,
  AmenitiesSection,
  ImageWithDesc,
  MapSection,
  DevListings,
  ListingRow,
  ContactSection,
  MainButton,
  SecondaryButton,
} from "./styles";
import { Helmet } from "react-helmet";

const Development = React.memo((props) => {
  return (
    <DevelopmentPage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Instahomes</title>
        <meta name="description" content=""></meta>
      </Helmet>
      <EmptyPage isEmpty={false}>
        <Landing>
          <DevelopmentComponent image={development1}>
            <span className="developer">ALVEO LAND CORPORATION</span>
            <h1 className="name">Callisto Towers</h1>
            <h2 className="location">
              <Icon
                icon="el:map-marker"
                color="#e6edf5"
                width="0.9em"
                height="0.9em"
              />
              Circuit Lane, Makati
            </h2>
          </DevelopmentComponent>
          <PoweredBy>
            POWERED BY <img className="logo" src={logo} alt="Instahomes" />
          </PoweredBy>
        </Landing>
        <DevelopmentFields>
          <div>
            <label>Type of Development</label>
            <p>Residential Condominium</p>
          </div>
          <div>
            <label>Property Status</label>
            <p>Pre-selling, For Sale, For Lease</p>
          </div>
          <div>
            <label>Price Range</label>
            <p>PHP 6,000,000 - PHP 30,000,000</p>
          </div>
          <div>
            <label>Date of Turnover</label>
            <p>March 20, 2022</p>
          </div>
        </DevelopmentFields>
        <AmenitiesSection>
          <ImageWithDesc bigImage>
            <img src={development1} alt="Callisto Towers" className="image" />
            <div className="about">
              <h2>About the Callisto Towers</h2>
              <p>
                The Callisto is a two-tower community comprising of 38-storey
                condo units with its own segments of retail shops.
              </p>
            </div>
          </ImageWithDesc>
          <ImageWithDesc reverse>
            <img src={development1} alt="Callisto Towers" className="image" />
            <div className="about">
              <h2>Multi-function Hall</h2>
              <p>
                The Lattice is Alveo Land's first upscale residential tower in
                Parklinks. Parklinks is a 35-hectare mixed-used development and
                the biggest estate along the prime C-5 corridor.
              </p>
            </div>
          </ImageWithDesc>
          <ImageWithDesc>
            <img src={development1} alt="Callisto Towers" className="image" />
            <div className="about">
              <h2>State-of-the-Art Gym</h2>
              <p>
                The Lattice is Alveo Land's first upscale residential tower in
                Parklinks. Parklinks is a 35-hectare mixed-used development and
                the biggest estate along the prime C-5 corridor.
              </p>
            </div>
          </ImageWithDesc>
          <ImageWithDesc reverse>
            <img src={development1} alt="Callisto Towers" className="image" />
            <div className="about">
              <h2>Luxurious Pool & Spa</h2>
              <p>
                The Lattice is Alveo Land's first upscale residential tower in
                Parklinks. Parklinks is a 35-hectare mixed-used development and
                the biggest estate along the prime C-5 corridor.
              </p>
            </div>
          </ImageWithDesc>
        </AmenitiesSection>
        <MapSection>
          <img src={map} alt="Location" className="map" />
          <div className="details">
            <label>Site Location</label>
            <p>
              Theater Drive corner West Gala Drive, Circuit, Makati, Metro
              Manila
            </p>
          </div>
        </MapSection>
        <DevListings>
          <h1 className="title">
            View Available Properties in Callisto Towers
          </h1>
          <div className="listing-row-div">
            <ListingRow threeOrLess={listings.length <= 3}>
              {listings.map((listing) => (
                <ListingCard
                  noTourButton
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
        </DevListings>
        <ContactSection>
          <h1>Contact Alveo Land Corporation Directly</h1>
          <p>
            Skip the lines and sketchy agents. Get in touch our in-house brokers
            direct to developer today!
          </p>
          <div className="buttons">
            <MainButton>BOOK AN ONLINE TOUR</MainButton>
            <SecondaryButton>GET PHONE NUMBER</SecondaryButton>
            <SecondaryButton>GET EMAIL ADDRESS</SecondaryButton>
          </div>
        </ContactSection>
      </EmptyPage>
    </DevelopmentPage>
  );
});

export default Development;
