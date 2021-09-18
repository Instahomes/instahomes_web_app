import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Loading from "../../components/loading";
import EmptyPage from "../../components/empty-page";
import { Wizard } from "../../components/tour";
import BookSchedule from "./steps/bookSchedule";
import ContactInfo from "./steps/contactInfo";
import * as Yup from "yup";

import { Helmet } from "react-helmet";
import { getListings } from "../../services/listings";
import { isAuthenticated } from "../../services/auth";
import { useRouteMatch, useLocation } from "react-router-dom";
import { videoAppSchema } from "./constants";

const Tour = React.memo(() => {
  const match = useRouteMatch();
  const location = useLocation();
  const [listing, setListing] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const { platform = "video", selectedDate: initialSelectedDate } =
    location.state || {};

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
            initialValues={{
              selectedDate: initialSelectedDate || null,
              selectedTime: null,
              preferredApps: [],
              name: "",
              email: "",
              additional: "",
            }}
            listing={listing}
            platform={platform}
          >
            <BookSchedule
              validationSchema={Yup.object({
                selectedDate: Yup.string().required("Date is required"),
                selectedTime: Yup.string().required("Time is required"),
              })}
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
        ) : (
          <Loading height="100vh" />
        )}
      </EmptyPage>
    </Layout>
  );
});
export default Tour;
