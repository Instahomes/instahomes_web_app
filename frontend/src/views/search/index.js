import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Loading from "../../components/loading";
import { Formik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import ListingGrid from "../../components/listing-grid";
import EmptyPage from "../../components/empty-page";

import { SearchContainer, SearchFields, SearchButton } from "./styles";

import {
  WhiteInput,
  GrayInput,
  AdvancedSettings,
  SearchSelect,
} from "../../components/elements";
import { Helmet } from "react-helmet";
import { getListings } from "../../services/listings";
import { getDevelopers } from "../../services/developers";
import { listingChoices, budgetChoices } from "../../misc/constants";

const Search = (props) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [sale_status, setSaleStatus] = useState("");
  const [location, setLocation] = useState("");
  const [development_type, setDevelopmentType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [developer_id, setDeveloper] = useState("");
  const [order_by, setOrderBy] = useState("-created_at");

  const [listings, setListings] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const routeLocation = useLocation();

  const roomOptions = (placeholder) => [
    { value: "", label: placeholder },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  const changeParams = (search) => {
    const searchParams = new URLSearchParams(search);
    setSaleStatus(searchParams.get("sale_status"));
    setLocation(searchParams.get("location"));
    setDevelopmentType(searchParams.get("development_type"));
    setPriceRange(searchParams.get("priceRange"));
    setBathrooms(searchParams.get("bathrooms"));
    setBedrooms(searchParams.get("bedrooms"));
    setDeveloper(searchParams.get("developer_id"));
  };

  useEffect(() => {
    const { search } = routeLocation;
    changeParams(search);
  }, [routeLocation]);

  useEffect(() => {
    const triggerSearch = async (search) => {
      setIsLoading(true);
      await getListings(
        (data) =>
          data.length > 0
            ? setListings(data) || setIsEmpty(false)
            : setIsEmpty(true),
        () => {},
        search
      );
      setIsLoading(false);
    };

    if (routeLocation.search) {
      const { search } = routeLocation;
      changeParams(search);
      triggerSearch(search.slice(1));
    } else {
      triggerSearch("limit=9");
    }

    return function cleanup() {
      setIsLoading(false);
    };
  }, []);

  const handleSearch = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setIsLoading(true);
    setIsEmpty(false);
    const { priceRange, developer_id, ...valuesCopy } = values;

    if (developer_id) {
      valuesCopy.developer_id = developer_id.value;
    }

    const params = Object.entries(valuesCopy)
      .filter(([key, value]) => !!value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    history.push({
      pathname: "/search",
      search: "?" + params + `&order_by=${order_by}`,
    });

    await getListings(
      (data) => (data.length > 0 ? setListings(data) : setIsEmpty(true)),
      () => {},
      params
    );

    setSubmitting(false);
    setIsLoading(false);
  };

  const asyncGetDevelopers = (inputValue, callback) => {
    getDevelopers(
      (data) =>
        callback(
          [{ value: "", label: "Preferred Developer" }].concat(
            data.map((dev) => ({ value: dev.id, label: dev.name }))
          )
        ),
      () => [
        {
          value: "",
          label: "Something went wrong. Please try again in a bit!",
        },
      ],
      `name=${inputValue}`
    );
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
            developer_id,
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
                <SearchSelect
                  containerStyle={{ maxWidth: "150px", flexBasis: "150px" }}
                  fieldName="sale_status"
                  options={[{ value: "", label: "Sale Status" }].concat(
                    listingChoices
                  )}
                  isGray
                  placeholder="Sale Status"
                  mobileOrder={7}
                  formik={{ handleBlur, values, setFieldValue }}
                />
                <GrayInput
                  style={{ flex: "2 0 30%" }}
                  scale={0.9}
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
                <SearchSelect
                  containerStyle={{ flex: "2 0 180px !important" }}
                  fieldName="priceRange"
                  options={[{ value: "", label: "Price Range" }].concat(
                    budgetChoices
                  )}
                  isGray
                  placeholder="Price Range"
                  mobileOrder={3}
                  className="advanced-setting"
                  formik={{
                    handleBlur,
                    values,
                    handleChange: (e) => {
                      setFieldValue("priceRange", e.value);
                      const currPriceRange = e.value;
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
                    },
                  }}
                />
                <SearchSelect
                  fieldName="bedrooms"
                  options={roomOptions("Bedrooms (All)")}
                  placeholder="Bedrooms (All)"
                  isGray
                  className="advanced-setting"
                  mobileOrder={4}
                  formik={{ handleBlur, values, setFieldValue }}
                />
                <SearchSelect
                  fieldName="bathrooms"
                  options={roomOptions("Baths (All)")}
                  placeholder="Baths (All)"
                  isGray
                  className="advanced-setting"
                  mobileOrder={5}
                  formik={{ handleBlur, values, setFieldValue }}
                />
                <SearchSelect
                  containerStyle={{ flex: "3 0 180px !important" }}
                  fieldName="developer_id"
                  asyncLoadOptions={asyncGetDevelopers}
                  placeholder="Preferred Developer"
                  isGray
                  isAsync
                  className="advanced-setting"
                  mobileOrder={6}
                  formik={{
                    handleBlur,
                    values,
                    handleChange: (option) => {
                      setFieldValue("developer_id", option);
                    },
                    getValue: () => values.developer_id,
                  }}
                />
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
        <EmptyPage
          isEmpty={isEmpty}
          header={"There seems to be nothing at this moment..."}
          body={"No worries, try tinkering with the search filters more!"}
          buttonDisappear
        >
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <ListingGrid
              listings={listings}
              order_by={order_by}
              setOrderBy={setOrderBy}
            />
          )}
        </EmptyPage>
      </SearchContainer>
    </Layout>
  );
};

export default Search;
