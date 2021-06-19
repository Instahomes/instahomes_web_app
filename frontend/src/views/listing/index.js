import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ProductInquiry from "../../components/product-inquiry";
import ProductTour from "../../components/product-tour";
import ListingImageGrid from "../../components/listing-image-grid";
import Amenities from "../../components/amenities";
import Loading from "../../components/loading";

import heart from "../../assets/product/heart.svg";
import check from "../../assets/product/check.svg";
import map from "../../assets/product/map.svg";
import specsArrow from "../../assets/product/specs_arrow.svg";
import parklinks from "../../assets/product/parklinks.png";
import alveo from "../../assets/product/alveo.png";
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
  InquireButton,
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
import { Helmet } from "react-helmet";
import SimpleReactLightbox, {
  useLightbox,
  SRLWrapper,
} from "simple-react-lightbox";
import { getListings } from "../../services/listings";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

const PropertyDetails = ({ active, floorPlan, ...props }) => {
  const { openLightbox } = useLightbox();

  return (
    <React.Fragment>
      <DescriptionDiv
        active={active == "propertyDetails"}
        id="property-details"
      >
        <h4>PROPERTY DETAILS</h4>
        <SRLWrapper>
          <div style={{ display: "none" }}>
            <img src={floorPlan} />
          </div>
        </SRLWrapper>
        <div id="prop-details">
          <img
            onClick={() => openLightbox(0)}
            className="floor-plan"
            src={floorPlan}
            alt="Floor Plan"
          />
          <div className="plan-details">
            <p>
              The Lattice at Parklinks’ 1 Bedroom Unit Condominium is a 58 sqm
              space with refined finish.
            </p>
            <p>
              The Living, Dining, Kitchen, and Balcony are built with 600x600mm
              porcelain tile floors, while the Bedroom has Wood Laminated
              Flooring. All parts of the unit have paint finished ceilings and
              walls.
            </p>
            <span id="view-specs">
              View All Specifications <img src={specsArrow} alt="Arrow" />
            </span>
          </div>
        </div>
      </DescriptionDiv>
    </React.Fragment>
  );
};

const PropertyDetailsWrapper = ({ active, floorPlan }) => (
  <SimpleReactLightbox>
    <PropertyDetails active={active} floorPlan={floorPlan} />
  </SimpleReactLightbox>
);

const Listing = (props) => {
  const [active, setActive] = useState("overview");
  const match = useRouteMatch();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    getListings(
      (data) => (data.length > 0 ? setListing(data[0]) : () => {}),
      `id=${match.params.id}`
    );
  }, []);

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{listing ? listing.seo_title : "Instahomes"}</title>
        <meta
          name="description"
          content={listing ? listing.overview : ""}
        ></meta>
      </Helmet>
      <Navbar />
      {listing ? (
        <ListingContainer>
          {/* <ListingProductSearch /> */}
          <ListingHeadContainer>
            <ListingHeader>
              <div>
                <ListingLine>
                  <h4>{listing.development.name + " " + listing.unit_name}</h4>
                  <img src={check} alt="Heart" />
                  <img src={heart} alt="Heart" />
                </ListingLine>
                <ListingLine style={{ alignItems: "flex-start" }}>
                  <img src={map} alt="Map" style={{ marginTop: "5px" }} />
                  <span>{listing.development.location}</span>
                </ListingLine>
              </div>
              <HeaderButtons>
                <WishlistButton>ADD TO WISHLIST</WishlistButton>
                <InquireButton>SEND AN INQUIRY</InquireButton>
              </HeaderButtons>
            </ListingHeader>
            <ListingImageGrid
              imageMain={listing.photo_main}
              images={[
                listing.image_1,
                listing.image_2,
                listing.image_3,
                listing.image_4,
                listing.image_5,
                listing.image_6,
              ]}
            />
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
                <p>{listing.overview}</p>
              </DescriptionDiv>
              <PropertyDetailsWrapper
                active={active}
                floorPlan={listing.floor_plan}
              />
              <DescriptionDiv
                active={active == "propertyDirections"}
                id="prop-directions"
              >
                <h4>HOW TO GET THERE</h4>
                {/* <img
                  src={listing.floor_plan}
                  alt="Property Map"
                  id="prop-map"
                /> */}
                <div id="directions-details">
                  <div>
                    <h4>By Car</h4>
                    <p>{listing.development.description_by_car}</p>
                  </div>
                  {listing.development.description_by_commute && (
                    <div>
                      <h4>By Commute</h4>
                      <p>{listing.development.description_by_commute}</p>
                    </div>
                  )}
                </div>
              </DescriptionDiv>
              <DescriptionDiv active={active == "facts"} id="area-facts">
                <h4>AREA FACTS</h4>
                <p>{listing.area_facts}</p>
                <Amenities
                  amenities={[
                    [
                      listing.development.amenity_1,
                      listing.development.amenity_1_desc,
                    ],
                    [
                      listing.development.amenity_2,
                      listing.development.amenity_2_desc,
                    ],
                    [
                      listing.development.amenity_3,
                      listing.development.amenity_3_desc,
                    ],
                    [
                      listing.development.amenity_4,
                      listing.development.amenity_4_desc,
                    ],
                  ]}
                  direction="column"
                  noPadding
                />
              </DescriptionDiv>
              <DescriptionDiv active={active == "development"} id="development">
                <h4>DEVELOPMENT INFORMATION</h4>
                <DevInformation>
                  <img
                    src={listing.development.photo_main}
                    className="logo"
                    alt="Parklinks"
                  />
                  <div className="dev-info">
                    <h4>{listing.development.name}</h4>
                    <p>
                      <img className="dev-info-icon" src={map} alt="Map" />
                      &nbsp;{listing.development.location}
                    </p>
                    <p className="orange-text m-plus">
                      {listing.development.development_type}
                    </p>
                  </div>
                  <ViewDev>
                    <Link to={`/development/${listing.development.id}`}>
                      VIEW DEVELOPMENT
                    </Link>
                  </ViewDev>
                </DevInformation>
              </DescriptionDiv>
              <DescriptionDiv active={active == "developer"} id="developer">
                <h4>DEVELOPER INFORMATION</h4>
                <DevInformation>
                  <img
                    src={listing.development.developer.featured_image}
                    className="logo"
                    alt="Alveo"
                  />
                  <div className="dev-info">
                    <h4>{listing.development.developer.name}</h4>
                    <p>More Developments!</p>
                  </div>
                  <ViewDev>
                    <Link to={`/developer/${listing.development.developer.id}`}>
                      VIEW DEVELOPER
                    </Link>
                  </ViewDev>
                </DevInformation>
              </DescriptionDiv>
            </DescriptionLeft>
            <DescriptionRight>
              <div className="sticky">
                <MetadataLine>
                  <div>
                    <MetadataNumber>{listing.lot_size} sqm</MetadataNumber>
                    <MetadataProperty>
                      <img src={area} alt="Area" />
                      <span>Lot Size</span>
                    </MetadataProperty>
                  </div>
                  <div>
                    <MetadataNumber>
                      {`${listing.floor_size_min}${
                        listing.floor_size_max
                          ? `-${listing.floor_size_max}`
                          : ""
                      }`}{" "}
                      sqm
                    </MetadataNumber>
                    <MetadataProperty>
                      <img src={area} alt="Area" />
                      <span>Floor Area</span>
                    </MetadataProperty>
                  </div>
                  <div>
                    <MetadataNumber>{listing.bedrooms}</MetadataNumber>
                    <MetadataProperty>
                      <img src={bed} alt="Bed" />
                      <span>Bedrooms</span>
                    </MetadataProperty>
                  </div>
                  <div>
                    <MetadataNumber>
                      {listing.bathrooms_min}
                      {listing.bathrooms_max && "-" + listing.bathrooms_max}
                    </MetadataNumber>
                    <MetadataProperty>
                      <img src={bath} alt="Bath" />
                      <span>Bathrooms</span>
                    </MetadataProperty>
                  </div>
                </MetadataLine>
                <ProductPriceLine>
                  <div>
                    <img src={money} alt="Money" />
                    <span className="body-dark">
                      Est.&nbsp;Property&nbsp;Price
                    </span>
                  </div>
                  <span className="dark-blue">
                    Php {listing.lowest_price.toLocaleString()}
                  </span>
                </ProductPriceLine>
                {/* <ProductTour />
                <br />
                <br /> */}
                <ProductInquiry
                  listing={{
                    developer: {
                      id: listing.development.developer.id,
                      name: listing.development.developer.name,
                    },
                    development: {
                      id: listing.development.id,
                      name: listing.development.name,
                    },
                    name: listing.unit_name,
                    id: listing.id,
                  }}
                />
              </div>
            </DescriptionRight>
          </DescriptionContainer>
        </ListingContainer>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default Listing;
