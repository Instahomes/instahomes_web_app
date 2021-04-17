import React from "react";
import styled from "styled-components";
import map from "../../assets/card/map.svg";
import bed from "../../assets/card/bed.svg";
import bath from "../../assets/card/bath.svg";
import { OutlineButton } from "../../components/elements";

const ListingCard = styled.div`
  background: ${({ theme }) => theme.colors.mainBgColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

const ListingImage = styled.img`
  object-fit: cover;
  height: 50%;
  width: 100%;
`;

const ListingInfo = styled.div`
  height: 50%;
  padding: 0.5em 1.1em;
`;

const ListingName = styled.h1`
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 8px;
`;

const ListingLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

const ListingPiece = styled.span`
  font-size: 1em;
  font-weight: ${({ bold }) => (bold ? 500 : 400)};
  color: ${({ theme, orange }) =>
    orange ? theme.colors.orange : theme.colors.navColor};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
`;

const ListingSize = styled.span`
  border: 1.5px solid ${({ theme }) => theme.colors.darkHeader};
  box-sizing: border-box;
  border-radius: 18px;

  color: ${({ theme }) => theme.colors.darkHeader};
  font-size: 0.75em;
  font-weight: 500;
  padding: 0.2em 0.5em;
`;

const Card = ({ image, name, size, address, bedrooms, bathrooms }) => {
  return (
    <ListingCard>
      <ListingImage src={image} alt="House" />
      <ListingInfo>
        <ListingName>{name}</ListingName>
        <ListingLine>
          <ListingPiece orange bold marginRight="10px">
            For Sale
          </ListingPiece>
          <ListingSize>{size} sqm</ListingSize>
        </ListingLine>
        <ListingLine>
          <img src={map} alt="Map" />
          <ListingPiece marginLeft="10px">{address}</ListingPiece>
        </ListingLine>
        <ListingLine marginBottom="0.7em">
          <img src={bed} alt="Bed" />
          <ListingPiece marginLeft="10px" marginRight="20px">
            {bedrooms} Bedrooms
          </ListingPiece>
          <img src={bath} alt="Bath" />
          <ListingPiece marginLeft="10px">{bathrooms} Bathrooms</ListingPiece>
        </ListingLine>
        <OutlineButton className="btn-rubik">VIEW HOME</OutlineButton>
      </ListingInfo>
    </ListingCard>
  );
};

export default Card;
