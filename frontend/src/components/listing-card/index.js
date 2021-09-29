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
  TourButton,
  ViewHomeButton,
  DirectToDeveloper,
} from "./styles";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { updateWishlist } from "../../services/wishlist";
import { isAuthenticated } from "../../services/auth";

const Card = React.memo(
  ({
    id,
    image,
    name,
    developer,
    developerLogo,
    size,
    price,
    address,
    bedrooms,
    bathrooms_min,
    bathrooms_max,
    isVerified,
    isOnWishlist,
    className,
  }) => {
    const [isHeartFilled, setIsHeartFilled] = useState(isOnWishlist);

    const handleUpdateWishlist = () => {
      const newState = !isHeartFilled;
      setIsHeartFilled(newState);
      setTimeout(() => {
        updateWishlist(
          id,
          newState,
          () => {},
          () => {}
        );
      }, 1000);
    };

    return (
      <ListingCard className={className}>
        <ListingImage>
          <img src={image} alt="House" />
        </ListingImage>
        {/* {developerLogo && (
        <DeveloperLogo>
          <img src={developerLogo} alt={developer} />
        </DeveloperLogo>
      )} */}
        {isAuthenticated() && (
          <WishlistHeart
            src={isHeartFilled ? heartFull : heartEmpty}
            alt="Heart"
            onClick={handleUpdateWishlist}
          />
        )}
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
                PHP&nbsp;{price && price.toLocaleString()}
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
              {bathrooms_min}
              {bathrooms_max && "-" + bathrooms_max}&nbsp;Bathrooms
            </ListingPiece>
          </ListingLine>
          <HashLink to={`/listing/${id}#tour`} className="view-home">
            <TourButton>BOOK A TOUR</TourButton>
          </HashLink>
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
  }
);

export default Card;
