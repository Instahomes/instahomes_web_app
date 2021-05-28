import React, { useState } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ProductInquiry from "../../components/product-inquiry";
import ProductTour from "../../components/product-tour";

import heart from "../../assets/product/heart.svg";
import check from "../../assets/product/check.svg";
import map from "../../assets/product/map.svg";
import specsArrow from "../../assets/product/specs_arrow.svg";
import propertyDetails from "../../assets/product/propertyDetails.png";
import propertyMap from "../../assets/product/propertyMap.png";
import parklinks from "../../assets/product/parklinks.png";
import alveo from "../../assets/product/alveo.png";
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
  DescriptionDiv,
  DevInformation,
  ViewDev,
  DescriptionRight,
  MetadataLine,
  MetadataNumber,
  MetadataProperty,
  ProductPriceLine,
} from "./styles";

const Listing = (props) => {
  const [active, setActive] = useState("overview");

  return (
    <Layout>
      <Navbar />
      <ListingContainer>
        {/* <ListingProductSearch /> */}
        <ListingHeadContainer>
          <ListingHeader>
            <div>
              <ListingLine>
                <h4>The Lattice 1-Bedroom Unit</h4>
                <img src={check} alt="Heart" />
                <img src={heart} alt="Heart" />
              </ListingLine>
              <ListingLine>
                <img src={map} alt="Map" />
                <span>C-5 Road, Brgy. Rosario, Pasig City</span>
              </ListingLine>
            </div>
            <HeaderButtons>
              <WishlistButton>ADD TO WISHLIST</WishlistButton>
              <InquireButton>SEND AN INQUIRY</InquireButton>
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
          <ProductTab
            onClick={() => setActive("overview")}
            active={active == "overview"}
            first
          >
            OVERVIEW
          </ProductTab>
          <ProductTab
            onClick={() => setActive("propertyDetails")}
            active={active == "propertyDetails"}
            href="#property-details"
          >
            PROPERTY&nbsp;DETAILS
          </ProductTab>
          <ProductTab
            href="#prop-directions"
            onClick={() => setActive("propertyDirections")}
            active={active == "propertyDirections"}
          >
            HOW&nbsp;TO&nbsp;GET&nbsp;THERE
          </ProductTab>
          <ProductTab
            href="#area-facts"
            onClick={() => setActive("facts")}
            active={active == "facts"}
          >
            AREA&nbsp;FACTS
          </ProductTab>
          <ProductTab
            href="#development"
            onClick={() => setActive("development")}
            active={active == "development"}
          >
            DEVELOPMENT&nbsp;INFORMATION
          </ProductTab>
          <ProductTab
            href="#developer"
            onClick={() => setActive("developer")}
            active={active == "developer"}
            last
          >
            DEVELOPER&nbsp;INFORMATION
          </ProductTab>
        </ProductTabContainer>
        <DescriptionContainer>
          <DescriptionLeft>
            <DescriptionDiv active={active == "overview"}>
              <h4>OVERVIEW</h4>
              <p>
                A high-rise residential development located at the greenest
                urban estate along the prime C5 corridor, with direct access to
                3-hectare central park and retail choices.
              </p>
              <p>
                The design of the house unit was incorporated for possible
                future expansions to accommodate the needs of a growing family.
                It is laid out to even allow a small dressing room for the
                masters, a covered garage, and generous toilet bathing space.
              </p>
            </DescriptionDiv>
            <DescriptionDiv
              active={active == "propertyDetails"}
              id="property-details"
            >
              <h4>PROPERTY DETAILS</h4>
              <div id="prop-details">
                <img src={propertyDetails} alt="Property Details" />
                <div>
                  <p>
                    The Lattice at Parklinks’ 1 Bedroom Unit Condominium is a 58
                    sqm space with refined finish.
                  </p>
                  <p>
                    The Living, Dining, Kitchen, and Balcony are built with
                    600x600mm porcelain tile floors, while the Bedroom has Wood
                    Laminated Flooring. All parts of the unit have paint
                    finished ceilings and walls.
                  </p>
                  <span id="view-specs">
                    View All Specifications <img src={specsArrow} alt="Arrow" />
                  </span>
                </div>
              </div>
            </DescriptionDiv>
            <DescriptionDiv
              active={active == "propertyDirections"}
              id="prop-directions"
            >
              <h4>HOW TO GET THERE</h4>
              <img src={propertyMap} alt="Property Map" id="prop-map" />
              <div id="directions-details">
                <div>
                  <h4>By Car</h4>
                  <p>
                    Accessible via C-5, Ortigas Avenue and Amang Rodriguez
                    avenue with future access to Circulo Verde and Metropoli
                  </p>
                </div>
                <div>
                  <h4>By Commute</h4>
                  <p>
                    From the I.P.I Bus Stop, take the Cainta-Quiapo to Taytay-
                    Quiapo via Ortigas Avenue Manila East Road
                  </p>
                </div>
              </div>
            </DescriptionDiv>
            <DescriptionDiv active={active == "facts"} id="area-facts">
              <h4>AREA FACTS</h4>
              <p>
                This House and Lot unit was designed to suit the needs of
                individuals or couples who are just starting out a whole new
                adventure on independence. This house unit is also ideal to
                invest with by turning each unit as an apartment for students
                studying at the nearby schools in Lipa City, Batangas.
              </p>
            </DescriptionDiv>
            <DescriptionDiv active={active == "development"} id="development">
              <h4>DEVELOPMENT INFORMATION</h4>
              <DevInformation>
                <img src={parklinks} className="logo" alt="Parklinks" />
                <div className="dev-info">
                  <h4>The Lattice at Park Links</h4>
                  <p>
                    <img src={map} alt="Map" />
                    &nbsp;C-5 Road, Pasig City
                  </p>
                  <p className="orange-text m-plus">RESIDENTIAL CONDOMINIUM</p>
                </div>
                <ViewDev>VIEW DEVELOPMENT</ViewDev>
              </DevInformation>
            </DescriptionDiv>
            <DescriptionDiv active={active == "developer"} id="developer">
              <h4>DEVELOPER INFORMATION</h4>
              <DevInformation>
                <img src={alveo} className="logo" alt="Alveo" />
                <div className="dev-info">
                  <h4>Alveo Land Corporation</h4>
                  <p>9 more Developments</p>
                </div>
                <ViewDev>VIEW DEVELOPER</ViewDev>
              </DevInformation>
            </DescriptionDiv>
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
            {/* <ProductTour />
            <br />
            <br /> */}
            <ProductInquiry />
          </DescriptionRight>
        </DescriptionContainer>
      </ListingContainer>
    </Layout>
  );
};

export default Listing;
