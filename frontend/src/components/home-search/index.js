import React from "react";
import { SearchFrame, SearchForm, SearchButton, Input } from "./styles.js";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { AdvancedSettings, SearchSelect } from "../../components/elements";
import {
  listingChoices,
  budgetChoices,
  devTypeChoices,
} from "../../misc/constants";
import { getDevelopers } from "../../services/developers";
import ReactGA from "react-ga";

const HomeSearch = React.memo(({ showAdvanced, setShowAdvanced }) => {
  const history = useHistory();

  const roomOptions = (placeholder) => [
    { value: "", label: placeholder },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

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
        developer_id: "",
        developer_name: "Preferred Developer",
      }}
      onSubmit={(values, { setSubmitting }) => {
        const { developer_id, ...valuesCopy } = values;

        if (developer_id) {
          valuesCopy.developer_id = developer_id.value || developer_id;
        }

        const params = Object.entries(valuesCopy)
          .filter(([key, value]) => !!value)
          .map(([key, value]) => `${key}=${value}`)
          .join("&");

        // Track search entry in GA
        Object.entries(valuesCopy)
          .filter(([key, value]) => !!value)
          .forEach(([key, value]) => {
            ReactGA.event({
              category: "Search Home",
              action: key,
              label: value,
            });
          });

        // Track search combination in GA
        ReactGA.event({
          category: "Search Combination",
          action: "Searched for a combination of parameters",
          label: params,
        });

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
              <SearchSelect
                containerStyle={{ maxWidth: "150px", flexBasis: "150px" }}
                fieldName="sale_status"
                options={[{ value: "", label: "Sale Status" }].concat(
                  listingChoices
                )}
                placeholder="Sale Status"
                mobileOrder={1}
                formik={{ handleBlur, values, setFieldValue }}
              />
              <Input
                style={{ flex: "2 0 40%" }}
                placeholder="Search for location/development/developer"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                scale={0.9}
                mobileOrder={2}
              />
              <SearchSelect
                containerStyle={{ maxWidth: "150px", flexBasis: "150px" }}
                fieldName="development_type"
                options={[{ value: "", label: "Property Type" }].concat(
                  devTypeChoices
                )}
                placeholder="Property Type"
                mobileOrder={3}
                className="advanced-setting"
                formik={{ handleBlur, values, setFieldValue }}
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
              <SearchSelect
                fieldName="bedrooms"
                options={roomOptions("Bedrooms (All)")}
                placeholder="Bedrooms (All)"
                className="advanced-setting"
                mobileOrder={5}
                formik={{ handleBlur, values, setFieldValue }}
              />
              <SearchSelect
                fieldName="bathrooms"
                options={roomOptions("Baths (All)")}
                placeholder="Baths (All)"
                className="advanced-setting"
                mobileOrder={6}
                formik={{ handleBlur, values, setFieldValue }}
              />
              <SearchSelect
                containerStyle={{ flex: "2 0 170px !important" }}
                fieldName="priceRange"
                options={[{ value: "", label: "Price Range" }].concat(
                  budgetChoices
                )}
                placeholder="Price Range"
                mobileOrder={7}
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
                containerStyle={{ flex: "3 0 180px !important" }}
                fieldName="developer_id"
                asyncLoadOptions={asyncGetDevelopers}
                placeholder="Preferred Developer"
                isAsync
                className="advanced-setting"
                mobileOrder={6}
                formik={{
                  handleBlur,
                  values,
                  handleChange: (option) => {
                    setFieldValue(
                      "developer_id",
                      option.value == "" ? option.value : option
                    );
                    setFieldValue("developer_name", option.label);
                  },
                  getValue: () => ({
                    value: values.developer_id || "",
                    label: values.developer_name,
                  }),
                }}
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
});

export default HomeSearch;
