import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import EmptyPage from "../../components/empty-page";
import { Wizard } from "../../components/tour";
import BookSchedule from "./steps/bookSchedule";
import ContactInfo from "./steps/contactInfo";
import * as Yup from "yup";

import { Helmet } from "react-helmet";
import { getListings } from "../../services/listings";
import { getProfile } from "../../services/auth";
import { bookSchedule, getSchedules } from "../../services/schedule";
import { useRouteMatch, useLocation } from "react-router-dom";
import { videoAppSchema } from "./constants";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

const Tour = React.memo(() => {
  dayjs.extend(utc);
  const match = useRouteMatch();
  const location = useLocation();
  const [listing, setListing] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [unavailabilities, setUnavailabilities] = useState([]);
  const { platform = "video", selectedDate: initialSelectedDate } =
    location.state || {};

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

  const handleSubmit = (values) => {
    setLoading(true);
    const { email, preferredApps, selectedDate, selectedTime, ...rest } =
      values;
    dayjs.extend(utc);
    // In UTC
    const datetime = dayjs(selectedDate + " " + selectedTime)
      .utc()
      .format("YYYY-MM-DD HH:mm");
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
    bookSchedule(
      data,
      (data) => {
        console.log(data);
        setLoading(false);
      },
      (err) => {
        console.log(err);
        setLoading(false);
      }
    );
  };

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
        <Wizard
          initialValues={{
            selectedDate: initialSelectedDate || null,
            selectedTime: null,
            preferredApps: [],
            name: name || "",
            email: email || "",
            additional: "",
            platform,
          }}
          listing={listing}
          loading={loading}
          platform={platform}
          onSubmit={handleSubmit}
        >
          <BookSchedule
            validationSchema={Yup.object({
              selectedDate: Yup.string().required("Date is required"),
              selectedTime: Yup.string().required("Time is required"),
            })}
            unavailabilities={unavailabilities.map((time) =>
              dayjs.utc(time).local()
            )}
          />
          <ContactInfo
            validationSchema={Yup.object({
              name: Yup.string().required("Name is required"),
              email: Yup.string()
                .email("Please input an email")
                .required("Email is required"),
              additional: Yup.string(),
              preferredApps: Yup.array()
                .of(
                  Yup.object({
                    app: Yup.string().required(),
                    contact: Yup.string().when("app", videoAppSchema),
                  })
                )
                .required("Please choose your preferred app/s."),
            })}
          />
        </Wizard>
      </EmptyPage>
    </Layout>
  );
});
export default Tour;
