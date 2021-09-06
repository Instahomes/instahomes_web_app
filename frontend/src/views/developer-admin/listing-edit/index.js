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
import { Formik } from "formik";

const HeaderElements = withTheme(() => {
  return (
    <React.Fragment>
      <OutlineButton style={{ marginLeft: "auto", marginRight: "1em" }}>
        Save for Later
      </OutlineButton>
      <OrangeButton>Save & Make Visible</OrangeButton>
    </React.Fragment>
  );
});

const formGridTemplates = `
  grid-template-areas:
    "name name seo_name seo_name"
    "seo_desc seo_desc . ."
    "development development . ."
    "lowest_price bedrooms bathrooms_min bathrooms_max"
    "lot_size floor_size_min floor_size_max ."
    "overview overview . ."
    "image1 image2 image3 .";
`;

const FormComponent = () => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: "",
        development: "",
        bedrooms: "",
        bathrooms: "",
        lot_size: "",
        floor_area: "",
        overview: "",
      }}
      // onSubmit={handleSubmit}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <FormFrame formGridTemplates={formGridTemplates}>
          <InputGroup style={{ gridArea: "name" }}>
            <Label>Unit Name*</Label>
            <Input name="name" />
          </InputGroup>
          <InputGroup style={{ gridArea: "seo_name" }}>
            <Label>SEO Name*</Label>
            <HelperLabel>
              Format: [Development Name] [Unit Name] For Sale | [Developer Name]
            </HelperLabel>
            <Input name="seo_title" />
          </InputGroup>
          <InputGroup style={{ gridArea: "seo_desc" }}>
            <Label>SEO Description</Label>
            <HelperLabel>
              Description that will appear in search results of your listing
            </HelperLabel>
            <Textarea as="textarea" name="seo_desc" />
          </InputGroup>
          <InputGroup style={{ gridArea: "development" }}>
            <Label>Development*</Label>
            <Input name="development" />
            <CheckboxGroup>
              <input type="checkbox" />
              <label>Same Location as Development</label>
            </CheckboxGroup>
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
              Fill out only this field if there is an exact number of bathrooms
            </HelperLabel>
            <Input name="bathrooms" />
          </InputGroup>
          <InputGroup style={{ gridArea: "bathrooms_max" }}>
            <Label>Max. Number of Bathrooms</Label>
            <HelperLabel>
              Fill out this field if there is a range. Leave this blank if
              exact.
            </HelperLabel>
            <Input name="bathrooms" />
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
            <Textarea as="textarea" name="overview" />
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
      )}
    </Formik>
  );
};

const ListingEdit = React.memo((props) => {
  return (
    <Base
      headerName="Add a New Listing"
      HeaderElements={<HeaderElements />}
      Body={<FormComponent />}
    />
  );
});

export default ListingEdit;
