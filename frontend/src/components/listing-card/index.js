import React, { useState } from "react";
import map from "../../assets/card/map.svg";
import bed from "../../assets/card/bed.svg";
import bath from "../../assets/card/bath.svg";
import check from "../../assets/card/check.svg";
import logo from "../../assets/card/alveo.png";
import heartEmpty from "../../assets/card/heartEmpty.svg";
import heartFull from "../../assets/card/heartFull.svg";
import {
  ListingCard,
  WishlistHeart,
  DeveloperLogo,
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
  developer,
  size,
  price,
  address,
  bedrooms,
  bathrooms,
  isVerified,
  isOnWishlist,
}) => {
  const [isHeartFilled, setIsHeartFilled] = useState(isOnWishlist);

  return (
    <ListingCard>
      <ListingImage>
        <img src={image} alt="House" />
      </ListingImage>
      {developer == "Alveo" && <DeveloperLogo src={logo} alt="Alveo" />}
      <WishlistHeart
        src={isHeartFilled ? heartFull : heartEmpty}
        alt="Heart"
        onClick={() => setIsHeartFilled(!isHeartFilled)}
      />
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
            Starts at{" "}
            <span className="orange bold">
              PHP&nbsp;{price.toLocaleString()}
            </span>
          </ListingPiece>
        </ListingLine>
        <ListingLine style={{ alignItems: "flex-start" }}>
          <img src={map} style={{ marginTop: "4px" }} alt="Map" />
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
        <Link to={`/listing/${id}`} className="view-home">
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
