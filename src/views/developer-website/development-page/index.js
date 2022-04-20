import React, { useState, useEffect } from "react";
import ListingCard from "../../../components/listing-card";
import EmptyPage from "../../../components/empty-page";
import Loading from "../../../components/loading";
import development1 from "./images/development1.webp";
import map from "./images/map.png";
import logo from "../../../assets/navbar/logo.svg";
import { Icon } from "@iconify/react";
import { getDevelopments } from "../../../services/developer-website/developments";
import { getListings } from "../../../services/developer-website/listings";
import { getDeveloperProfile } from "../../../services/developer-website/developers";
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
import { useRouteMatch } from "react-router-dom";
import { Helmet } from "react-helmet";

const Development = React.memo((props) => {
  const developer = getDeveloperProfile();
  const [development, setDevelopment] = useState(null);
  const [listings, setListings] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const match = useRouteMatch();

  useEffect(() => {
    getDevelopments(
      (data) => (data.length > 0 ? setDevelopment(data[0]) : setIsEmpty(true)),
      () => setIsEmpty(true),
      `id=${match.params.id}`
    );
  }, []);

  useEffect(() => {
    if (development) {
      getListings(
        (data) => setListings(data),
        () => {},
        `development_id=${development.id}`
      );
    }
  }, [development]);

  return (
    <DevelopmentPage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{development ? development.seo_title : "Instahomes"}</title>
        <meta
          name="description"
          content={development ? development.seo_desc : ""}
        ></meta>
      </Helmet>
      <EmptyPage isEmpty={isEmpty}>
        {development ? (
          <React.Fragment>
            <Landing>
              <DevelopmentComponent image={development.photo_main}>
                <span className="developer">{developer.name}</span>
                <h1 className="name">{development.name}</h1>
                <h2 className="location">
                  <Icon
                    icon="el:map-marker"
                    color="#e6edf5"
                    width="0.9em"
                    height="0.9em"
                  />
                  {development.location}
                </h2>
              </DevelopmentComponent>
              <PoweredBy>
                POWERED BY <img className="logo" src={logo} alt="Instahomes" />
              </PoweredBy>
            </Landing>
            <DevelopmentFields>
              <div>
                <label>Type of Development</label>
                <p>{development.development_type}</p>
              </div>
              <div>
                <label>Property Status</label>
                <p>Pre-selling, For Sale, For Lease</p>
              </div>
              <div>
                <label>Price Range</label>
                <p>
                  PHP {development.lowest_price} - PHP{" "}
                  {development.highest_price}
                </p>
              </div>
              <div>
                <label>Date of Turnover</label>
                <p>March 20, 2022</p>
              </div>
            </DevelopmentFields>
            <AmenitiesSection>
              <ImageWithDesc bigImage>
                <img
                  src={development.photo_main}
                  alt={development.name}
                  className="image"
                />
                <div className="about">
                  <h2>About the {development.name}</h2>
                  <p>{development.short_desc}</p>
                </div>
              </ImageWithDesc>
              {development.amenity_1 && (
                <ImageWithDesc reverse>
                  <img
                    src={development.amenity_1_image}
                    alt={development.amenity_1}
                    className="image"
                  />
                  <div className="about">
                    <h2>{development.amenity_1}</h2>
                    <p>{development.amenity_1_desc}</p>
                  </div>
                </ImageWithDesc>
              )}
              {development.amenity_2 && (
                <ImageWithDesc>
                  <img
                    src={development.amenity_2_image}
                    alt={development.amenity_2}
                    className="image"
                  />
                  <div className="about">
                    <h2>{development.amenity_2}</h2>
                    <p>{development.amenity_2_desc}</p>
                  </div>
                </ImageWithDesc>
              )}
              {development.amenity_3 && (
                <ImageWithDesc reverse>
                  <img
                    src={development.amenity_3_image}
                    alt={development.amenity_3}
                    className="image"
                  />
                  <div className="about">
                    <h2>{development.amenity_3}</h2>
                    <p>{development.amenity_3_desc}</p>
                  </div>
                </ImageWithDesc>
              )}
            </AmenitiesSection>
            <MapSection>
              <img src={development.map_image} alt="Location" className="map" />
              <div className="details">
                <label>Site Location</label>
                <p>{development.location}</p>
              </div>
            </MapSection>
            <DevListings>
              <h1 className="title">
                View Available Properties in {development.name}
              </h1>
              <div className="listing-row-div">
                <ListingRow threeOrLess={listings.length <= 3}>
                  {listings.map((listing) => (
                    <ListingCard
                      noTourButton
                      id={listing.id}
                      key={listing.seo_title}
                      developer={listing.development.developer.name}
                      developerLogo={
                        listing.development.developer.featured_image
                      }
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
              <h1>Contact {developer.name}</h1>
              <p>
                Skip the lines and sketchy agents. Get in touch our in-house
                brokers direct to developer today!
              </p>
              <div className="buttons">
                <MainButton>BOOK AN ONLINE TOUR</MainButton>
                <SecondaryButton>GET PHONE NUMBER</SecondaryButton>
                <SecondaryButton>GET EMAIL ADDRESS</SecondaryButton>
              </div>
            </ContactSection>
          </React.Fragment>
        ) : (
          <Loading></Loading>
        )}
      </EmptyPage>
    </DevelopmentPage>
  );
});

export default Development;
