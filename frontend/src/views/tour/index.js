import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ProductTour from "../../components/product-tour";
import Loading from "../../components/loading";
import EmptyPage from "../../components/empty-page";

import {
  TourContainer,
  TourOrangeButton,
  ContentContainer,
  ListingImageContainer,
  AlignFlexCenter,
  ListingInfoDiv,
} from "./styles";
import { Helmet } from "react-helmet";
import { getListings } from "../../services/listings";
import { isAuthenticated } from "../../services/auth";
import { useRouteMatch, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { withTheme } from "styled-components";
import { OrangeButton } from "../../components/elements";

const platformLabel = (theme, platform) => {
  switch (platform) {
    case "video":
      return (
        <React.Fragment>
          <Icon
            icon={"bi:camera-video-fill"}
            color={theme.colors.orange}
            width="0.8em"
            height="0.8em"
            style={{ marginRight: "0.5em" }}
          />
          VIDEO CALL
        </React.Fragment>
      );
    case "inPerson":
      return (
        <React.Fragment>
          <Icon
            icon={"ri-walk-fill"}
            color={theme.colors.orange}
            width="0.8em"
            height="0.8em"
            style={{ marginRight: "0.5em" }}
          />
          IN PERSON
        </React.Fragment>
      );
  }
};

const Tour = withTheme(
  React.memo(({ theme }) => {
    const match = useRouteMatch();
    const location = useLocation();
    const [listing, setListing] = useState(null);
    const [isEmpty, setIsEmpty] = useState(false);
    const { platform = "video", selectedDate: initialSelectedDate } =
      location.state;

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

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
                <AlignFlexCenter justifyCenter>
                  <h1>Book a tour&nbsp;&nbsp;</h1>
                  <span className="tour-platform">
                    {platformLabel(theme, platform)}
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
                    <AlignFlexCenter gap="0.5em" justifyCenter>
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
                  </div>
                </ListingInfoDiv>
                <h4 style={{ marginBottom: "1em", marginTop: "2em" }}>
                  DATE & TIME
                </h4>
                <ProductTour
                  parentSetSelectedDate={setSelectedDate}
                  parentSetSelectedTime={setSelectedTime}
                  initialSelectedDate={initialSelectedDate}
                  platform={platform}
                  scale={0.85}
                  withTime
                  Header={
                    <AlignFlexCenter
                      gap={"0.7em"}
                      style={{ marginBottom: "1em" }}
                    >
                      <h2 className="btn-rubik">September</h2>
                      <Icon
                        icon={"ph:caret-down-bold"}
                        color="#E0E0E0"
                        width="1em"
                        height="1em"
                      />
                    </AlignFlexCenter>
                  }
                />
                <TourOrangeButton
                  disabled={!selectedDate || !selectedTime}
                  scale={1}
                  style={{ padding: "0.6em 4em", marginTop: "1.5em" }}
                >
                  NEXT PAGE
                </TourOrangeButton>
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
