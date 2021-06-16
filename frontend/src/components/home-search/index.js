import React from "react";
import { SearchFrame, SearchForm, SearchButton, Input } from "./styles.js";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { AdvancedSettings } from "../../components/elements";

const HomeSearch = ({ showAdvanced, setShowAdvanced }) => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        listingStatus: "",
        query: "",
        propertyType: "",
        keywords: "",
        priceRange: "",
        bathrooms: "",
        bedrooms: "",
        developer: "",
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
          <SearchFrame>
            <h1 className="center">Secure your dream home instantly</h1>
            <p className="center">
              Get in touch with the best developers directly easily and for free
            </p>
            <SearchForm showAdvanced={showAdvanced}>
              <Input
                scale={0.9}
                as="select"
                name="listingStatus"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.listingStatus}
                isDefault={values.listingStatus == ""}
                mobileOrder={1}
                className="flex-grow-mobile"
              >
                <option value="" selected>
                  For Sale
                </option>
                <option value="For Sale">For Sale</option>
              </Input>
              <Input
                style={{ flex: 1 }}
                placeholder="Search for location/city/subdivision"
                name="query"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.query}
                scale={0.9}
                mobileOrder={2}
              />
              <Input
                placeholder="Property Type"
                name="propertyType"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.propertyType}
                className="advanced-setting"
                scale={0.9}
                mobileOrder={3}
              />
              <Input
                placeholder="Keywords (Pool, garage, etc.)"
                name="keywords"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.keywords}
                className="advanced-setting"
                scale={0.9}
                mobileOrder={4}
              />
              <Input
                as="select"
                name="bedrooms"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bedrooms}
                className="advanced-setting"
                scale={0.9}
                mobileOrder={5}
                isDefault={values.bedrooms == ""}
              >
                <option value="">Bedrooms (All)</option>
              </Input>
              <Input
                as="select"
                name="bathrooms"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bathrooms}
                className="advanced-setting"
                scale={0.9}
                mobileOrder={6}
                isDefault={values.bathrooms == ""}
              >
                <option value="">Baths (All)</option>
              </Input>
              <Input
                as="select"
                name="priceRange"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.priceRange}
                className="advanced-setting"
                scale={0.9}
                mobileOrder={7}
                isDefault={values.priceRange == ""}
              >
                <option value="">Price Range</option>
              </Input>
              <Input
                placeholder="Preferred Developer (All)"
                style={{ flex: 1 }}
                name="preferredDeveloper"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.preferredDeveloper}
                className="advanced-setting"
                scale={0.9}
                mobileOrder={9}
              />
              <SearchButton scale={0.9} mobileOrder={10}>
                FIND&nbsp;MY&nbsp;HOME
              </SearchButton>
            </SearchForm>
            <AdvancedSettings
              setShowAdvanced={setShowAdvanced}
              showAdvanced={showAdvanced}
            />
          </SearchFrame>
        </form>
      )}
    </Formik>
  );
};

export default HomeSearch;
