import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ProductSearch from "../../components/product-search";
import heart from "../../assets/product/heart.svg";
import blueHeart from "../../assets/product/blue_heart.svg";
import map from "../../assets/product/map.svg";
import imageMain from "../../assets/product/imageMain.png";
import image1 from "../../assets/product/image1.png";
import image2 from "../../assets/product/image2.png";
import image3 from "../../assets/product/image3.png";
import image4 from "../../assets/product/image4.png";
import {
  ListingContainer,
  ListingHeader,
  ListingLine,
  HeaderButtons,
  WishlistButton,
  WishlistHeart,
  InquireButton,
  Image,
  ImageContainer,
  MoreImages,
  ProductTabContainer,
  ProductTab,
} from "./styles";

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
        <ImageContainer>
          <Image image={imageMain} />
          <Image image={image1} />
          <Image image={image2} />
          <Image image={image3} />
          <Image image={image4} />
          <MoreImages>+10 more photos</MoreImages>
        </ImageContainer>
        <ProductTabContainer>
          <ProductTab active first>
            OVERVIEW
          </ProductTab>
          <ProductTab>PROPERTY DETAILS</ProductTab>
          <ProductTab last>DEVELOPER INFORMATION</ProductTab>
        </ProductTabContainer>
      </ListingContainer>
    </Layout>
  );
};

export default Listing;
