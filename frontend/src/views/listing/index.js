import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ProductSearch from "../../components/product-search";
import heart from "../../assets/product/heart.svg";
import blueHeart from "../../assets/product/blue_heart.svg";
import map from "../../assets/product/map.svg";
import { ListingContainer } from "./styles";
import { OutlineButton, OrangeButton } from "../../components/elements";

const ListingHeader = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ListingLine = styled.div`
  display: flex;
  margin-bottom: 10px;

  h4 {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 1.5em;
    margin-right: 10px;
  }

  span {
    font-size: 1.1em;
    color: ${({ theme }) => theme.colors.darkBody};
    margin-left: 10px;
  }
`;

const HeaderButtons = styled.div`
  display: flex;
  margin-left: auto;
  padding: 10px 0;
`;

const WishlistButton = styled(OutlineButton)`
  font-size: 1.1em;
  padding: 0 2em;
  display: flex;
  align-items: center;
`;

const WishlistHeart = styled.img`
  margin-right: 5px;
`;

const InquireButton = styled(OrangeButton)`
  font-size: 1.1em;
  padding: 0 2em;
  margin-left: 10px;
`;

const Listing = (props) => {
  return (
    <Layout>
      <Navbar />
      <ListingContainer>
        <ProductSearch />
        <ListingHeader>
          <div>
            <ListingLine>
              <h4>Andrea Duplex Unit</h4>
              <img src={heart} alt="Heart" />
            </ListingLine>
            <ListingLine>
              <img src={map} alt="Map" />
              <span>Bel-Air Residences Lipa, Batangas</span>
            </ListingLine>
          </div>
          <HeaderButtons>
            <WishlistButton>
              <WishlistHeart src={blueHeart} alt="Heart" />
              ADD TO WISHLIST
            </WishlistButton>
            <InquireButton>INQUIRE NOW</InquireButton>
          </HeaderButtons>
        </ListingHeader>
      </ListingContainer>
    </Layout>
  );
};

export default Listing;
