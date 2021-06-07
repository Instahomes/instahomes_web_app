import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import { Formik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import ListingGrid from "../../components/listing-grid";

import { SearchContainer, SearchFields, SearchButton } from "./styles";

import {
  WhiteInput,
  GrayInput,
  AdvancedSettings,
} from "../../components/elements";
import { Helmet } from "react-helmet";

const sampleListings = [
  {
    id: 1,
    name: "The Lattice Studio Unit",
    size: 33,
    price: "9,500,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 1,
    bathrooms: 1,
    isVerified: true,
  },
  {
    id: 1,
    name: "The Lattice 1-Bedroom",
    size: 58,
    price: "13,000,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 1,
    bathrooms: 1,
    isVerified: false,
  },
  {
    id: 1,
    name: "The Lattice 2-Bedroom",
    size: 94,
    price: "24,000,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 2,
    bathrooms: 1,
    isVerified: true,
  },
  {
    id: 1,
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
  const [listingStatus, setListingStatus] = useState("");
  const [query, setQuery] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [developer, setDeveloper] = useState("");

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { search } = location;
    const searchParams = new URLSearchParams(search);
    setListingStatus(searchParams.get("listingStatus"));
    setQuery(searchParams.get("query"));
    setPropertyType(searchParams.get("propertyType"));
    setPriceRange(searchParams.get("priceRange"));
    setBathrooms(searchParams.get("bathrooms"));
    setBedrooms(searchParams.get("bedrooms"));
    setDeveloper(searchParams.get("developer"));
  }, [location]);

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Instahomes | Search</title>
        <meta name="description" content=""></meta>
      </Helmet>
      <Navbar />
      <SearchContainer>
        <Formik
          enableReinitialize
          initialValues={{
            listingStatus,
            query,
            propertyType,
            priceRange,
            bathrooms,
            bedrooms,
            developer,
          }}
          onSubmit={(values, { setSubmitting }) => {
            const params = Object.entries(values)
              .filter(([key, value]) => !!value)
              .map(([key, value]) => `${key}=${value}`)
              .join("&");

            history.push({
              pathname: "/search",
              search: "?" + params,
            });
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
                  isDefault={!values.listingStatus}
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
                  isDefault={!values.propertyType}
                  mobileOrder={2}
                >
                  <option value="">Property Type</option>
                </GrayInput>
                <GrayInput
                  as="select"
                  name="priceRange"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.priceRange}
                  scale={0.9}
                  mobileOrder={3}
                  isDefault={!values.priceRange}
                >
                  <option value="">Price Range</option>
                </GrayInput>
                <GrayInput
                  scale={0.9}
                  as="select"
                  name="bedrooms"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bedrooms}
                  isDefault={!values.bedrooms}
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
                  isDefault={!values.bathrooms}
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
                  isDefault={!values.developer}
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
        <AdvancedSettings
          setShowAdvanced={setShowAdvanced}
          showAdvanced={showAdvanced}
        />
        <div style={{ marginBottom: "2em" }}></div>
        <ListingGrid listings={sampleListings} />
      </SearchContainer>
    </Layout>
  );
};

export default Search;
