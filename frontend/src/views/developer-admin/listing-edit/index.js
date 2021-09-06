import React, { useState, useEffect } from "react";
import Base from "../../../components/developer-admin/base";
import {
  OrangeButton,
  OutlineButton,
} from "../../../components/developer-admin/base/styles";
import { withTheme } from "styled-components";
import {
  FormFrame,
  InputGroup,
  HelperLabel,
  Label,
  Input,
  CheckboxGroup,
  Textarea,
} from "../../../components/developer-admin/form";
import Loading from "../../../components/loading";
import {
  FormWarningMessage,
  FormErrorMessage,
} from "../../../components/elements";
import { Formik } from "formik";
import { useRouteMatch } from "react-router-dom";
import {
  getListingById,
  updateListing,
} from "../../../services/developer-admin/listings";

const HeaderElements = withTheme(() => {
  return (
    <React.Fragment>
      <OutlineButton style={{ marginLeft: "auto", marginRight: "1em" }}>
        Save for Later
      </OutlineButton>
      <OrangeButton form="edit-listing" type="submit">
        Save & Make Visible
      </OrangeButton>
    </React.Fragment>
  );
});

const FormComponent = ({ data }) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    id,
    unit_name,
    seo_title,
    seo_desc,
    development,
    lowest_price,
    bedrooms,
    bathrooms_min,
    bathrooms_max,
    lot_size,
    floor_size_min,
    floor_size_max,
    overview,
  } = data || {};

  const formGridTemplates = `
    grid-template-areas:
      ${(success || error) && `"message message . ."`}
      "unit_name unit_name seo_title seo_title"
      "seo_desc seo_desc . ."
      "development development . ."
      "lowest_price bedrooms bathrooms_min bathrooms_max"
      "lot_size floor_size_min floor_size_max ."
      "overview overview . ."
      "image1 image2 image3 .";
  `;

  const handleSubmit = async (values) => {
    setLoading(true);
    console.log(values);
    updateListing(
      id,
      values,
      () => {
        setLoading(false);
        setSuccess("Successfully updated the listing!");
      },
      (err) => {
        console.log(err);
        setLoading(false);
        // setError(err);
      }
    );
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        unit_name: unit_name || "",
        seo_title: seo_title || "",
        seo_desc: seo_desc || "",
        development: development || "",
        lowest_price: lowest_price || "",
        bedrooms: bedrooms || "",
        bathrooms_min: bathrooms_min || "",
        bathrooms_max: bathrooms_max || null,
        lot_size: lot_size,
        floor_size_min: floor_size_min || "",
        floor_size_max: floor_size_max || null,
        overview: overview || "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, isSubmitting }) =>
        loading ? (
          <Loading color="#3F526A" />
        ) : (
          <FormFrame id="edit-listing" formGridTemplates={formGridTemplates}>
            {success && (
              <FormWarningMessage as="span" style={{ gridArea: "message" }}>
                {success}
              </FormWarningMessage>
            )}
            {error && (
              <FormErrorMessage as="span" style={{ gridArea: "message" }}>
                {error}
              </FormErrorMessage>
            )}
            <InputGroup style={{ gridArea: "unit_name" }}>
              <Label>Unit Name*</Label>
              <Input name="unit_name" />
            </InputGroup>
            <InputGroup style={{ gridArea: "seo_title" }}>
              <Label>SEO Name*</Label>
              <HelperLabel>
                Format: [Development Name] [Unit Name] For Sale | [Developer
                Name]
              </HelperLabel>
              <Input name="seo_title" />
            </InputGroup>
            <InputGroup style={{ gridArea: "seo_desc" }}>
              <Label>SEO Description</Label>
              <HelperLabel>
                Description that will appear in search results of your listing
              </HelperLabel>
              <Textarea
                as="textarea"
                name="seo_desc"
                value={values.seo_desc}
                handleChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "development" }}>
              <Label>Development*</Label>
              <Input name="development" />
              {/* <CheckboxGroup>
                <input type="checkbox" />
                <label>Same Location as Development</label>
              </CheckboxGroup> */}
            </InputGroup>
            <InputGroup style={{ gridArea: "lowest_price" }}>
              <Label>Lowest Price (PHP)*</Label>
              <Input name="lowest_price" />
            </InputGroup>
            <InputGroup style={{ gridArea: "bedrooms" }}>
              <Label>Number of Bedrooms*</Label>
              <Input name="bedrooms" />
            </InputGroup>
            <InputGroup style={{ gridArea: "bathrooms_min" }}>
              <Label>Min. Number of Bathrooms*</Label>
              <HelperLabel>
                Fill out only this field if there is an exact number of
                bathrooms
              </HelperLabel>
              <Input name="bathrooms_min" />
            </InputGroup>
            <InputGroup style={{ gridArea: "bathrooms_max" }}>
              <Label>Max. Number of Bathrooms</Label>
              <HelperLabel>
                Fill out this field if there is a range. Leave this blank if
                exact.
              </HelperLabel>
              <Input name="bathrooms_max" />
            </InputGroup>
            <InputGroup style={{ gridArea: "lot_size" }}>
              <Label>Lot Size*</Label>
              <Input name="lot_size" />
            </InputGroup>
            <InputGroup style={{ gridArea: "floor_size_min" }}>
              <Label>Min. Floor Area</Label>
              <HelperLabel>
                Fill out only this field if there is an exact number
              </HelperLabel>
              <Input name="floor_size_min" />
            </InputGroup>
            <InputGroup style={{ gridArea: "floor_size_max" }}>
              <Label>Max. Floor Area</Label>
              <HelperLabel>
                Fill out this field if there is a range. Leave this blank if
                exact.
              </HelperLabel>
              <Input name="floor_size_max" />
            </InputGroup>
            <InputGroup style={{ gridArea: "overview" }}>
              <Label>Property Overview</Label>
              <Textarea
                as="textarea"
                name="overview"
                value={values.overview}
                handleChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image1" }}>
              <Label>Images</Label>
              <Input name="image1" />
            </InputGroup>
            <InputGroup style={{ gridArea: "image2" }}>
              <Input name="image2" />
            </InputGroup>
            <InputGroup style={{ gridArea: "image3" }}>
              <Input name="image3" />
            </InputGroup>
          </FormFrame>
        )
      }
    </Formik>
  );
};

const ListingEdit = React.memo((props) => {
  const match = useRouteMatch();
  const [data, setData] = useState(null);
  const { id } = match.params;
  const isEditing = id != "new";

  useEffect(() => {
    if (isEditing) {
      getListingById(id, setData, () => {});
    }
  }, [id]);

  return (
    <Base
      headerName={isEditing ? "Edit Listing" : "Add a New Listing"}
      HeaderElements={<HeaderElements />}
      Body={<FormComponent data={data} />}
    />
  );
});

export default ListingEdit;
