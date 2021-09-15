import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Loading from "../../components/loading";
import EmptyPage from "../../components/empty-page";
import { Wizard } from "../../components/tour";
import BookSchedule from "./steps/bookSchedule";
import ContactInfo from "./steps/contactInfo";

import { Helmet } from "react-helmet";
import { getListings } from "../../services/listings";
import { isAuthenticated } from "../../services/auth";
import { useRouteMatch, useLocation } from "react-router-dom";

const Tour = React.memo(() => {
  const match = useRouteMatch();
  const location = useLocation();
  const [listing, setListing] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const { platform = "video", selectedDate: initialSelectedDate } =
    location.state || {};

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [preferredApps, setPreferredApps] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additional, setAdditional] = useState("");
  const [appInfo, setAppInfo] = useState({});

  const values = {
    selectedDate,
    selectedTime,
    preferredApps,
    name,
    email,
    additional,
    appInfo,
  };

  const onChangeFuncs = {
    setSelectedDate,
    setSelectedTime,
    setPreferredApps,
    setName,
    setEmail,
    setAdditional,
    setAppInfo,
  };

  useEffect(() => {
    const listingCallback = (listing) => {
      setListing(listing);
    };

    getListings(
      (data) => (data.length > 0 ? listingCallback(data[0]) : setIsEmpty(true)),
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
          <Wizard
            listing={listing}
            platform={platform}
            initialSelectedDate={initialSelectedDate}
            values={values}
            onChangeFuncs={onChangeFuncs}
          >
            <BookSchedule />
            <ContactInfo />
          </Wizard>
        ) : (
          <Loading height="100vh" />
        )}
      </EmptyPage>
    </Layout>
  );
});
export default Tour;
