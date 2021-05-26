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
import { Link } from "react-router-dom";

const Card = ({
  id,
  image,
  name,
  size,
  price,
  address,
  bedrooms,
  bathrooms,
  isVerified,
}) => {
  return (
    <ListingCard>
      <ListingImage src={image} alt="House" />
      <ListingInfo>
        <Link to={`/listing/${id}`}>
          <ListingName>
            {name}&nbsp;&nbsp;
            {isVerified && <img src={check} />}
          </ListingName>
        </Link>
        <ListingLine>
          <ListingSize>{size}&nbsp;sqm</ListingSize>
          <ListingPiece bold marginLeft="10px">
            Starts at <span class="orange bold">PHP&nbsp;{price}</span>
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
        <Link to={`/listing/${id}`}>
          <ViewHomeButton>VIEW HOME</ViewHomeButton>
        </Link>
        <DirectToDeveloper>
          <img src={check} alt="" />
          <span>Direct To Official Developer</span>
        </DirectToDeveloper>
      </ListingInfo>
    </ListingCard>
  );
};

export default Card;
