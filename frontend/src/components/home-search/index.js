import React from "react";
import { SearchFrame, SearchForm, SearchButton, Input } from "./styles.js";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { AdvancedSettings } from "../../components/elements";
import { listingChoices, budgetChoices } from "../../misc/constants";

const HomeSearch = ({ showAdvanced, setShowAdvanced }) => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        sale_status: "",
        location: "",
        development_type: "",
        // keywords: "",
        priceRange: "",
        price_low: "",
        price_high: "",
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
        setFieldValue,
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
                name="sale_status"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sale_status}
                isDefault={values.sale_status == ""}
                mobileOrder={1}
                className="flex-grow-mobile"
              >
                <option value="">Sale Status</option>
                {listingChoices.map((choice) => (
                  <option value={choice.value} key={choice.value}>
                    {choice.label}
                  </option>
                ))}
              </Input>
              <Input
                style={{ flex: 1 }}
                placeholder="Search for location/city/subdivision"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                scale={0.9}
                mobileOrder={2}
              />
              <Input
                placeholder="Property Type (e.g. condominium)"
                name="development_type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.development_type}
                className="advanced-setting"
                scale={0.9}
                mobileOrder={3}
              />
              {/* <Input
                placeholder="Keywords (Pool, garage, etc.)"
                name="keywords"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.keywords}
                className="advanced-setting"
                scale={0.9}
                mobileOrder={4}
              /> */}
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
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
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
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Input>
              <Input
                as="select"
                name="priceRange"
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
              <SearchButton scale={0.9} mobileOrder={10} type="submit">
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
