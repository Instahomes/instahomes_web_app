import React, { useState } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ListingCard from "../../components/listing-card";
import house from "../../assets/card/sample_house.png";
import arrow from "../../assets/search/arrow.svg";
import arrowUp from "../../assets/search/arrowUp.svg";
import { Formik } from "formik";

import {
  SearchContainer,
  SearchFields,
  SearchButton,
  AdvancedSettings,
  ListingsFilters,
  ListingGrid,
} from "./styles";

import {
  WhiteInput,
  GrayInput,
  LightInput,
  OutlineButton,
} from "../../components/elements";

const sampleListings = [
  {
    name: "The Lattice Studio Unit",
    size: 33,
    price: "9,500,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 1,
    bathrooms: 1,
    isVerified: true,
  },
  {
    name: "The Lattice 1-Bedroom",
    size: 58,
    price: "13,000,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 1,
    bathrooms: 1,
    isVerified: false,
  },
  {
    name: "The Lattice 2-Bedroom",
    size: 94,
    price: "24,000,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 2,
    bathrooms: 1,
    isVerified: true,
  },
  {
    name: "The Lattice 3-Bedroom",
    size: 128,
    price: "32,000,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 3,
    bathrooms: 2,
    isVerified: true,
  },
];

const Search = (props) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <Layout>
      <Navbar />
      <SearchContainer>
        <Formik
          initialValues={{
            listingStatus: "",
            query: "",
            propertyType: "",
            price: "",
            bathrooms: "",
            bedrooms: "",
            developer: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <SearchFields showAdvanced={showAdvanced}>
                <WhiteInput
                  scale={0.9}
                  as="select"
                  name="listingStatus"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.listingStatus}
                  isDefault={values.listingStatus == ""}
                  mobileOrder={7}
                >
                  <option value="" selected>
                    For Sale
                  </option>
                  <option value="For Sale">For Saleasdasdas</option>
                </WhiteInput>
                <GrayInput
                  scale={0.9}
                  style={{ flex: 1.5 }}
                  placeholder="Search for location or landmark"
                  name="query"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.query}
                  mobileOrder={1}
                />
                <GrayInput
                  scale={0.9}
                  as="select"
                  name="propertyType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.propertyType}
                  isDefault={values.propertyType == ""}
                  mobileOrder={2}
                >
                  <option value="">Property Type</option>
                </GrayInput>
                <GrayInput
                  scale={0.9}
                  as="select"
                  name="price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                  isDefault={values.price == ""}
                  mobileOrder={3}
                >
                  <option value="">List Price</option>
                </GrayInput>
                <GrayInput
                  scale={0.9}
                  as="select"
                  name="bedrooms"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bedrooms}
                  isDefault={values.bedrooms == ""}
                  className="advanced-setting"
                  mobileOrder={4}
                >
                  <option value="">Bedrooms (All)</option>
                </GrayInput>
                <GrayInput
                  scale={0.9}
                  as="select"
                  name="bathrooms"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bathrooms}
                  isDefault={values.bathrooms == ""}
                  className="advanced-setting"
                  mobileOrder={5}
                >
                  <option value="">Bath (All)</option>
                </GrayInput>
                <GrayInput
                  scale={0.9}
                  as="select"
                  name="developer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.developer}
                  isDefault={values.developer == ""}
                  className="advanced-setting"
                  mobileOrder={6}
                >
                  <option value="">Preferred Developer</option>
                </GrayInput>
                <SearchButton mobileOrder={7}>
                  FIND&nbsp;MY&nbsp;HOME
                </SearchButton>
              </SearchFields>
            </form>
          )}
        </Formik>
        <AdvancedSettings onClick={() => setShowAdvanced(!showAdvanced)}>
          {showAdvanced ? (
            <React.Fragment>
              <img src={arrowUp} />
              &nbsp;&nbsp; Minimize Advanced Settings
            </React.Fragment>
          ) : (
            <React.Fragment>
              <img src={arrow} />
              &nbsp;&nbsp; Show Advanced Settings
            </React.Fragment>
          )}
        </AdvancedSettings>
        <ListingsFilters>
          <span class="listing-count">
            Showing{" "}
            <span className="count-emphasis">{sampleListings.length}</span> out
            of <span className="count-emphasis">{sampleListings.length}</span>{" "}
            listings
          </span>
          <LightInput scale={0.8} as="select" className="listing-sort">
            <option value="">Sort by Location</option>
          </LightInput>
          <OutlineButton
            className="remove-on-mobile btn-rubik"
            scale={0.8}
            style={{ alignSelf: "stretch", fontWeight: 400 }}
          >
            View with map <span id="beta">BETA</span>
          </OutlineButton>
        </ListingsFilters>
        <ListingGrid>
          {sampleListings.map((listing) => (
            <ListingCard
              key={listing.name}
              image={house}
              name={listing.name}
              size={listing.size}
              price={listing.price}
              address={listing.address}
              bedrooms={listing.bedrooms}
              bathrooms={listing.bathrooms}
              isVerified={listing.isVerified}
            />
          ))}
        </ListingGrid>
      </SearchContainer>
    </Layout>
  );
};

export default Search;
