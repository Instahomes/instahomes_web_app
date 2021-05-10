import React from "react";
import map from "../../assets/card/map.svg";
import bed from "../../assets/card/bed.svg";
import bath from "../../assets/card/bath.svg";
import check from "../../assets/card/check.svg";
import {
  ListingCard,
  ListingImage,
  ListingInfo,
  ListingName,
  ListingLine,
  ListingPiece,
  ListingSize,
  ViewHomeButton,
  DirectToDeveloper,
} from "./styles";

const Card = ({
  image,
  name,
  size,
  address,
  bedrooms,
  bathrooms,
  isVerified,
}) => {
  return (
    <ListingCard>
      <ListingImage src={image} alt="House" />
      <ListingInfo>
        <ListingName>
          {name}&nbsp;&nbsp;
          {isVerified && <img src={check} />}
        </ListingName>
        <ListingLine>
          <ListingSize>{size}&nbsp;sqm</ListingSize>
          <ListingPiece bold large marginLeft="10px">
            Starts at <span class="orange bold">PHP 9,500,000.00</span>
          </ListingPiece>
        </ListingLine>
        <ListingLine>
          <img src={map} alt="Map" />
          <ListingPiece marginLeft="10px">{address}</ListingPiece>
        </ListingLine>
        <ListingLine marginBottom="1em">
          <img src={bed} alt="Bed" />
          <ListingPiece marginLeft="10px" marginRight="20px">
            {bedrooms}&nbsp;Bedrooms
          </ListingPiece>
          <img src={bath} alt="Bath" />
          <ListingPiece marginLeft="10px">
            {bathrooms}&nbsp;Bathrooms
          </ListingPiece>
        </ListingLine>
        <ViewHomeButton>VIEW HOME</ViewHomeButton>
        <DirectToDeveloper>
          <img src={check} alt="" />
          <span>Direct To Official Developer</span>
        </DirectToDeveloper>
      </ListingInfo>
    </ListingCard>
  );
};

export default Card;
