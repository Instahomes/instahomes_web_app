import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ProductTour from "../../components/product-tour";
import Loading from "../../components/loading";
import EmptyPage from "../../components/empty-page";

import {
  TourContainer,
  ContentContainer,
  ListingImageContainer,
  AlignFlexCenter,
  ListingInfoDiv,
} from "./styles";
import { Helmet } from "react-helmet";
import { getListings } from "../../services/listings";
import { isAuthenticated } from "../../services/auth";
import { useRouteMatch, useHistory, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { withTheme } from "styled-components";
import { OrangeButton } from "../../components/elements";

const Tour = withTheme(
  React.memo(({ theme }) => {
    const match = useRouteMatch();
    const history = useHistory();
    const [listing, setListing] = useState(null);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
      const listingCallback = (listing) => {
        setListing(listing);
      };

      getListings(
        (data) =>
          data.length > 0 ? listingCallback(data[0]) : setIsEmpty(true),
        () => {},
        `id=${match.params.id}`
      );
    }, [match.params.id]);

    return (
      <Layout noFooter>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Book a Tour | Instahomes</title>
          <meta
            name="description"
            content="Book a tour with your preferred developer for specific properties, through Instahomes' touring feature!"
          ></meta>
        </Helmet>
        <Navbar />
        <EmptyPage isEmpty={isEmpty}>
          {listing ? (
            <TourContainer>
              <ContentContainer>
                <AlignFlexCenter>
                  <h1>Book a tour&nbsp;&nbsp;</h1>
                  <span className="tour-platform">
                    <Icon
                      icon={"bi:camera-video-fill"}
                      color={theme.colors.orange}
                      width="0.8em"
                      height="0.8em"
                      style={{ marginRight: "0.5em" }}
                    />
                    VIDEO CALL
                  </span>
                </AlignFlexCenter>
                <h4>PROPERTY DETAILS</h4>
                <ListingInfoDiv>
                  <img
                    src={listing.photo_main}
                    alt={listing.unit_name}
                    className="listing-img"
                  />
                  <div className="listing-info">
                    <span className="listing-title">{listing.unit_name}</span>
                    <br />
                    <span>
                      {listing.development.name} -{" "}
                      {listing.development.developer.name}
                    </span>
                    <br />
                    <AlignFlexCenter gap="0.5em">
                      <Icon
                        icon={"ci:location"}
                        color={theme.colors.darkBlue}
                        width="1em"
                        height="1em"
                      />
                      <span className="listing-location">
                        {listing.development.location}
                      </span>
                    </AlignFlexCenter>
                    <br />
                  </div>
                </ListingInfoDiv>
                <h4 style={{ marginBottom: "1em", marginTop: "2em" }}>
                  DATE & TIME
                </h4>
                <ProductTour />
                <OrangeButton
                  scale={1}
                  style={{ padding: "0.6em 4em", marginTop: "1.5em" }}
                >
                  NEXT PAGE
                </OrangeButton>
              </ContentContainer>
              <ListingImageContainer mainImage={listing.photo_main} />
            </TourContainer>
          ) : (
            <Loading height="100vh" />
          )}
        </EmptyPage>
      </Layout>
    );
  })
);

export default Tour;
