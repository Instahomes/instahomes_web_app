import React, { useState } from "react";
import {
  TourContainer,
  TourOrangeButton,
  ContentContainer,
  ListingImageContainer,
  AlignFlexCenter,
  ListingInfoDiv,
} from "../styles";
import { platformLabel, MonthsDropdown } from "../../../components/tour";
import ProductTour from "../../../components/product-tour";
import { Icon } from "@iconify/react";

const Header = ({ pivot, setPivot }) => {
  const [open, setOpen] = useState(false);

  return (
    <AlignFlexCenter
      gap={"0.7em"}
      style={{ marginBottom: "1em", position: "relative" }}
    >
      <h2 className="btn-rubik" onClick={() => setOpen(!open)}>
        {pivot.format("MMMM")}
      </h2>
      <Icon
        icon={"ph:caret-down-bold"}
        color="#E0E0E0"
        width="1em"
        height="1em"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <MonthsDropdown pivot={pivot} setPivot={setPivot} setOpen={setOpen} />
      )}
    </AlignFlexCenter>
  );
};

const BookSchedule = ({
  listing,
  platform,
  values,
  errors,
  setFieldValue,
  unavailabilities,
  ...props
}) => {
  return (
    <TourContainer>
      <ContentContainer>
        <AlignFlexCenter justifyCenter>
          <h1>Book a tour&nbsp;&nbsp;</h1>
          <span className="tour-platform">
            {platformLabel(props.theme, platform)}
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
              {listing.development.name} - {listing.development.developer.name}
            </span>
            <br />
            <AlignFlexCenter gap="0.5em" justifyCenter>
              <Icon
                icon={"ci:location"}
                color={props.theme.colors.darkBlue}
                width="1em"
                height="1em"
              />
              <span className="listing-location">
                {listing.development.location}
              </span>
            </AlignFlexCenter>
          </div>
        </ListingInfoDiv>
        <h4 style={{ marginBottom: "1em", marginTop: "2em" }}>DATE & TIME</h4>
        <ProductTour
          parentSetSelectedDate={(value) =>
            setFieldValue("selectedDate", value)
          }
          parentSetSelectedTime={(value) =>
            setFieldValue("selectedTime", value)
          }
          initialSelectedDate={values.selectedDate}
          initialSelectedTime={values.selectedTime}
          platform={platform}
          scale={0.85}
          withTime
          Header={(props) => <Header {...props} />}
          unavailabilities={unavailabilities}
        />
        <TourOrangeButton
          type="submit"
          disabled={
            !values.selectedDate ||
            errors.selectedDate ||
            !values.selectedTime ||
            errors.selectedTime
          }
          scale={1}
        >
          NEXT PAGE
        </TourOrangeButton>
      </ContentContainer>
      <ListingImageContainer mainImage={listing.photo_main} />
    </TourContainer>
  );
};

export default BookSchedule;
