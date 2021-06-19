import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Loading from "../../components/loading";
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
import { getListings } from "../../services/listings";
import { listingChoices, budgetChoices } from "../../misc/constants";

const Search = (props) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [sale_status, setSaleStatus] = useState("");
  const [location, setLocation] = useState("");
  const [development_type, setDevelopmentType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [developer, setDeveloper] = useState("");

  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const routeLocation = useLocation();

  useEffect(() => {
    const { search } = routeLocation;
    const searchParams = new URLSearchParams(search);
    setSaleStatus(searchParams.get("sale_status"));
    setLocation(searchParams.get("location"));
    setDevelopmentType(searchParams.get("development_type"));
    setPriceRange(searchParams.get("priceRange"));
    setBathrooms(searchParams.get("bathrooms"));
    setBedrooms(searchParams.get("bedrooms"));
    setDeveloper(searchParams.get("developer"));
  }, [routeLocation]);

  useEffect(() => {
    getListings(setListings, "limit=9");
  }, []);

  const handleSearch = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setIsLoading(true);
    const { priceRange, ...valuesCopy } = values;

    const params = Object.entries(valuesCopy)
      .filter(([key, value]) => !!value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    history.push({
      pathname: "/search",
      search: "?" + params,
    });

    await getListings(setListings, params);

    setSubmitting(false);
    setIsLoading(false);
  };

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Search | Instahomes</title>
        <meta name="description" content=""></meta>
      </Helmet>
      <Navbar />
      <SearchContainer>
        <Formik
          enableReinitialize
          initialValues={{
            sale_status,
            location,
            development_type,
            priceRange,
            price_low: "",
            price_high: "",
            bathrooms,
            bedrooms,
            developer,
          }}
          onSubmit={handleSearch}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <SearchFields showAdvanced={showAdvanced}>
                <WhiteInput
                  scale={0.9}
                  as="select"
                  name="sale_status"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sale_status}
                  isDefault={!values.sale_status}
                  mobileOrder={7}
                >
                  <option value="">Sale Status</option>
                  {listingChoices.map((choice) => (
                    <option value={choice.value} key={choice.value}>
                      {choice.label}
                    </option>
                  ))}
                </WhiteInput>
                <GrayInput
                  scale={0.9}
                  style={{ flex: 1.5 }}
                  placeholder="Search for location or landmark"
                  name="location"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                  mobileOrder={1}
                />
                <GrayInput
                  scale={0.9}
                  placeholder="Property Type (e.g. condominium)"
                  name="development_type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.development_type}
                  mobileOrder={2}
                />
                {/* <GrayInput
                  scale={0.9}
                  as="select"
                  name="development_type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.development_type}
                  isDefault={!values.development_type}
                  mobileOrder={2}
                >
                  <option value="">Property Type</option>
                </GrayInput> */}
                <GrayInput
                  as="select"
                  // onChange={handleChange}
                  name="priceRange"
                  value={values.priceRange}
                  onChange={(e) => {
                    handleChange(e);
                    const currPriceRange = e.target.value;
                    if (currPriceRange) {
                      const priceOption = budgetChoices.find(
                        (item) => item.value === currPriceRange
                      );

                      setFieldValue("price_low", priceOption.lowPrice);
                      setFieldValue("price_high", priceOption.highPrice);
                    } else {
                      setFieldValue("price_low", "");
                      setFieldValue("price_high", "");
                    }
                  }}
                  onBlur={handleBlur}
                  scale={0.9}
                  mobileOrder={3}
                  isDefault={!values.priceRange}
                >
                  <option value="">Price Range</option>
                  {budgetChoices.map((choice) => (
                    <option value={choice.value} key={choice.value}>
                      {choice.label}
                    </option>
                  ))}
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
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
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
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
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
                <SearchButton mobileOrder={7} type="submit">
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
        {isLoading ? <Loading></Loading> : <ListingGrid listings={listings} />}
      </SearchContainer>
    </Layout>
  );
};

export default Search;
