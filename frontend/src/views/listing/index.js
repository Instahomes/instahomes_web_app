import React from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ProductInquiry from "../../components/product-inquiry";
import heart from "../../assets/product/heart.svg";
import blueHeart from "../../assets/product/blue_heart.svg";
import map from "../../assets/product/map.svg";
import imageMain from "../../assets/product/imageMain.png";
import image1 from "../../assets/product/image1.png";
import image2 from "../../assets/product/image2.png";
import image3 from "../../assets/product/image3.png";
import image4 from "../../assets/product/image4.png";
import area from "../../assets/product/area.svg";
import bath from "../../assets/product/bath.svg";
import bed from "../../assets/product/bed.svg";
import money from "../../assets/product/money.svg";
import {
  ListingContainer,
  ListingHeadContainer,
  ListingProductSearch,
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
  DescriptionContainer,
  DescriptionLeft,
  DescriptionRight,
  MetadataLine,
  MetadataNumber,
  MetadataProperty,
  ProductPriceLine,
} from "./styles";

const Listing = (props) => {
  return (
    <Layout>
      <Navbar />
      <ListingContainer>
        <ListingProductSearch />
        <ListingHeadContainer>
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
        </ListingHeadContainer>
        <ProductTabContainer>
          <ProductTab active first>
            OVERVIEW
          </ProductTab>
          <ProductTab>PROPERTY&nbsp;DETAILS</ProductTab>
          <ProductTab last>DEVELOPER&nbsp;INFORMATION</ProductTab>
        </ProductTabContainer>
        <DescriptionContainer>
          <DescriptionLeft>
            <div>
              <h4>OVERVIEW</h4>
              <p>
                This House and Lot unit was designed to suit the needs of
                individuals or couples who are just starting out a whole new
                adventure on independence. This house unit is also ideal to
                invest with by turning each unit as an apartment for students
                studying at the nearby schools in Lipa City, Batangas.
              </p>
              <p>
                The design of the house unit was incorporated for possible
                future expansions to accommodate the needs of a growing family.
                It is laid out to even allow a small dressing room for the
                masters, a covered garage, and generous toilet bathing space.
              </p>
            </div>
            <div>
              <h4>PROPERTY DETAILS</h4>
              <p>
                This House and Lot unit was designed to suit the needs of
                individuals or couples who are just starting out a whole new
                adventure on independence. This house unit is also ideal to
                invest with by turning each unit as an apartment for students
                studying at the nearby schools in Lipa City, Batangas.
              </p>
              <p>
                The design of the house unit was incorporated for possible
                future expansions to accommodate the needs of a growing family.
                It is laid out to even allow a small dressing room for the
                masters, a covered garage, and generous toilet bathing space.
              </p>
            </div>
            <div>
              <h4>HOW TO GET THERE</h4>
              <p>
                This House and Lot unit was designed to suit the needs of
                individuals or couples who are just starting out a whole new
                adventure on independence. Tcdhis house unit is also ideal to
                invest with by turning each unit as an apartment for students
                studying at the nearby schools in Lipa City, Batangas.
              </p>
            </div>
          </DescriptionLeft>
          <DescriptionRight>
            <MetadataLine>
              <div>
                <MetadataNumber>55 sqm</MetadataNumber>
                <MetadataProperty>
                  <img src={area} alt="Area" />
                  <span>Lot Size</span>
                </MetadataProperty>
              </div>
              <div>
                <MetadataNumber>55 sqm</MetadataNumber>
                <MetadataProperty>
                  <img src={area} alt="Area" />
                  <span>Floor Area</span>
                </MetadataProperty>
              </div>
              <div>
                <MetadataNumber>2</MetadataNumber>
                <MetadataProperty>
                  <img src={bed} alt="Bed" />
                  <span>Bedrooms</span>
                </MetadataProperty>
              </div>
              <div>
                <MetadataNumber>2</MetadataNumber>
                <MetadataProperty>
                  <img src={bath} alt="Bath" />
                  <span>Bathrooms</span>
                </MetadataProperty>
              </div>
            </MetadataLine>
            <ProductPriceLine>
              <div>
                <img src={money} alt="Money" />
                <span className="body-dark">Est.&nbsp;Property&nbsp;Price</span>
              </div>
              <span className="dark-blue">Php 1,820,000.00</span>
            </ProductPriceLine>
            <ProductInquiry />
          </DescriptionRight>
        </DescriptionContainer>
      </ListingContainer>
    </Layout>
  );
};

export default Listing;
