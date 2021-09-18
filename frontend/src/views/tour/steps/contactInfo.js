import React from "react";
import {
  TourContainer,
  TourOrangeButton,
  ContentContainer,
  ListingImageContainer,
  MobileListingImageContainer,
  AlignFlexCenter,
  PlatformButtonsDiv,
  TourOutlineButton,
  TourInput,
  TourTextarea,
  ContactFlex,
} from "../styles";
import {
  platformLabel,
  AdditionalInfoFields,
  DateTimeInfo,
} from "../../../components/tour";
import { videoApps } from "../constants";
import { Icon } from "@iconify/react";
import { Field } from "formik";

const ContactInfo = ({
  listing,
  platform,
  values,
  errors,
  setFieldValue,
  handleChange,
  handleBlur,
  isSubmitting,
  previous,
  ...props
}) => {
  const isSelected = (app) =>
    !!values.preferredApps.filter((curr) => app == curr.app).length;

  const handleChooseApp = (app) => {
    if (isSelected(app)) {
      const index = values.preferredApps.findIndex((curr) => curr.app == app);
      setFieldValue("preferredApps", [
        ...values.preferredApps.slice(0, index),
        ...values.preferredApps.slice(index + 1),
      ]);
    } else {
      setFieldValue("preferredApps", [
        ...values.preferredApps,
        { app, contact: "" },
      ]);
    }
  };

  return (
    <TourContainer>
      <ContentContainer>
        <AlignFlexCenter justifyCenter>
          <h1>Book a tour&nbsp;&nbsp;</h1>
          <span className="tour-platform">
            {platformLabel(props.theme, platform)}
          </span>
        </AlignFlexCenter>
        <div style={{ marginTop: "1.5em" }}>
          <MobileListingImageContainer mainImage={listing.photo_main} />
          <DateTimeInfo
            date={values.selectedDate}
            time={values.selectedTime}
            previous={previous}
            className="mobile-only"
          />
        </div>
        {platform == "video" && (
          <React.Fragment>
            <h4>PREFERRED VIDEO CALL APPS</h4>
            <PlatformButtonsDiv>
              {videoApps.map((app) => (
                <TourOutlineButton
                  onClick={() => handleChooseApp(app)}
                  selected={isSelected(app)}
                  className="btn-rubik"
                  key={app}
                >
                  <AlignFlexCenter
                    style={{ justifyContent: "center" }}
                    gap={"0.4em"}
                  >
                    {isSelected(app) && (
                      <Icon
                        icon={"akar-icons:check"}
                        color={props.theme.colors.darkHeader}
                        width="1.3em"
                        height="1.3em"
                      />
                    )}
                    {app}
                  </AlignFlexCenter>
                </TourOutlineButton>
              ))}
            </PlatformButtonsDiv>
            <AdditionalInfoFields
              values={values}
              setFieldValue={setFieldValue}
            />
          </React.Fragment>
        )}
        <h4 style={{ marginBottom: "1em", marginTop: "2em" }}>
          CONTACT INFORMATION
        </h4>
        <ContactFlex>
          <TourInput as={Field} name="name" placeholder="Full Name" />
          <TourInput
            as={Field}
            name="email"
            type="email"
            placeholder="Email Address"
          />
        </ContactFlex>
        <ContactFlex>
          <TourTextarea
            name="additional"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Additional Notes"
          />
        </ContactFlex>
        <TourOrangeButton
          type="submit"
          disabled={
            !values.name ||
            errors.name ||
            !values.email ||
            errors.email ||
            !values.preferredApps.length ||
            errors.preferredApps
          }
          scale={1}
        >
          BOOK TOUR
        </TourOrangeButton>
      </ContentContainer>
      <ListingImageContainer mainImage={listing.photo_main}>
        <DateTimeInfo
          date={values.selectedDate}
          time={values.selectedTime}
          previous={previous}
        />
      </ListingImageContainer>
    </TourContainer>
  );
};

export default ContactInfo;
