import React, { useState, useEffect } from "react";
import { HeaderDiv, DesktopNavbar } from "./styles";
import Layout from "../../layout";
import Navbar from "../../navbar";
import EmptyPage from "../../empty-page";
import { Wizard } from "..";
import ConfirmationModal from "../modal";
import BookSchedule from "../steps/bookSchedule";
import ContactInfo from "../steps/contactInfo";
import * as Yup from "yup";

import { videoAppSchema } from "../constants";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Icon } from "@iconify/react";

import styled from "styled-components";
const Background = styled.main`
  background: ${({ theme }) => theme.colors.mainBg};
`;

const TourContainer = ({ withLayout, children, ...props }) =>
  withLayout ? (
    <Layout {...props}>{children}</Layout>
  ) : (
    <Background {...props}>{children}</Background>
  );

const TourBase = React.memo(
  ({
    HelmetComponent,
    withLayout,
    withNavbar,
    listing,
    handleSubmit,
    profile,
    initialState,
    viewState,
  }) => {
    dayjs.extend(utc);
    const [dateTimeInfo, setDateTimeInfo] = useState(null);
    const { platform = "video", selectedDate: initialSelectedDate } =
      initialState || {};

    const { name, email } = profile;

    return (
      <TourContainer withLayout={withLayout} noFooter>
        <HelmetComponent />
        {withNavbar && <DesktopNavbar />}
        <HeaderDiv withNavbar image={listing && listing.photo_main}>
          {withNavbar && <Navbar dark isHome />}
          {listing && !dateTimeInfo && (
            <div className="listing-info">
              <span className="listing-name">{listing.unit_name}</span>
              <br />
              <span className="listing-location">
                <Icon
                  icon="el:map-marker"
                  color="#F7F7F7"
                  width="0.9em"
                  height="0.9em"
                />
                {listing.development.location}
              </span>
            </div>
          )}
          {dateTimeInfo || null}
        </HeaderDiv>
        <EmptyPage isEmpty={viewState.isEmpty}>
          {viewState.showModal && (
            <ConfirmationModal
              datetime={viewState.finalDatetime}
              developer={listing.development.developer.name}
              open={viewState.showModal}
              setOpen={viewState.setShowModal}
            />
          )}
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
            loading={viewState.loading}
            platform={platform}
            onSubmit={handleSubmit}
            setDateTimeInfo={setDateTimeInfo}
          >
            <BookSchedule
              validationSchema={Yup.object({
                selectedDate: Yup.string().required("Date is required"),
                selectedTime: Yup.string().required("Time is required"),
              })}
              unavailabilities={viewState.unavailabilities.map((time) =>
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
              setDateTimeInfo={setDateTimeInfo}
            />
          </Wizard>
        </EmptyPage>
      </TourContainer>
    );
  }
);
export default TourBase;
