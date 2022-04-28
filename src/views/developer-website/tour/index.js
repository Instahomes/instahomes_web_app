import React, { useState, useEffect } from "react";
import TourBase from "../../../components/tour/base";

import { Helmet } from "react-helmet";
import { useRouteMatch, useLocation } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { getListings } from "../../../services/listings";
import { getProfile } from "../../../services/auth";
import { bookSchedule, getSchedules } from "../../../services/schedule";
import { getDeveloperProfile } from "../../../services/developer-website/developers";

const Tour = React.memo(() => {
  dayjs.extend(utc);

  const developer = getDeveloperProfile();
  const match = useRouteMatch();
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [listing, setListing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [finalDatetime, setFinalDatetime] = useState(null);
  const [unavailabilities, setUnavailabilities] = useState([]);
  const initialState = location.state || {};

  const viewState = {
    showModal,
    showModal,
    setShowModal,
    isEmpty,
    loading,
    unavailabilities,
    finalDatetime,
  };

  const profile = getProfile() || {};
  const { name, email, user_id } = profile;

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

  useEffect(() => {
    if (listing)
      getSchedules(
        listing.development.developer.id,
        setUnavailabilities,
        () => {}
      );
  }, [listing]);

  const successCallback = (res) => {
    setLoading(false);
    setMessage("");
    if (res.status == 200) {
      setMessage(res.data.message);
    } else {
      setShowModal(true);
    }
  };

  const handleSubmit = (values) => {
    setLoading(true);
    const { email, preferredApps, selectedDate, selectedTime, ...rest } =
      values;
    dayjs.extend(utc);
    const localDatetime = dayjs(selectedDate + " " + selectedTime);
    setFinalDatetime(localDatetime.format("MMMM D h:mma"));
    // In UTC
    const datetime = localDatetime.utc().format("YYYY-MM-DD HH:mm");
    const data = {
      schedule: {
        ...rest,
        listing: listing.id,
        user_email: email,
        user: user_id || null,
        contact_info: preferredApps,
        datetime,
      },
    };
    bookSchedule(data, successCallback, (err) => {
      console.log(err);
      setMessage("");
      setLoading(false);
    });
  };

  const HelmetComponent = () => (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Book a Tour | {developer.name}</title>
      <meta
        name="description"
        content="Book a tour with your preferred developer for specific properties, through Instahomes' touring feature!"
      ></meta>
    </Helmet>
  );

  return (
    <TourBase
      HelmetComponent={HelmetComponent}
      listing={listing}
      handleSubmit={handleSubmit}
      viewState={viewState}
      profile={{ name, email }}
      initialState={initialState}
    />
  );
});
export default Tour;
