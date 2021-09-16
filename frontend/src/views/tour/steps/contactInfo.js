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

const ContactInfo = ({
  listing,
  platform,
  values,
  onChangeFuncs,
  previous,
  ...props
}) => {
  const isSelected = (app) => values.preferredApps.includes(app);

  const handleChooseApp = (app) => {
    if (isSelected(app)) {
      const index = values.preferredApps.findIndex((curr) => curr == app);
      onChangeFuncs.setPreferredApps([
        ...values.preferredApps.slice(0, index),
        ...values.preferredApps.slice(index + 1),
      ]);
    } else {
      onChangeFuncs.setPreferredApps([...values.preferredApps, app]);
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
              onChangeFuncs={onChangeFuncs}
            />
          </React.Fragment>
        )}
        <h4 style={{ marginBottom: "1em", marginTop: "2em" }}>
          CONTACT INFORMATION
        </h4>
        <ContactFlex>
          <TourInput
            name="name"
            onChange={(e) => onChangeFuncs.setName(e.target.value)}
            placeholder="Full Name"
          />
          <TourInput
            name="email"
            type="email"
            onChange={(e) => onChangeFuncs.setEmail(e.target.value)}
            placeholder="Email Address"
          />
        </ContactFlex>
        <ContactFlex>
          <TourTextarea
            name="additional"
            placeholder="Additional Notes"
            onChange={(e) => onChangeFuncs.setAdditional(e.target.value)}
          />
        </ContactFlex>
        <TourOrangeButton
          disabled={
            !values.name || !values.email || !values.preferredApps.length
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
