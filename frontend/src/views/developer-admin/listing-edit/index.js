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
      <OrangeButton>+ Add New Listing</OrangeButton>
    </React.Fragment>
  );
});

const formGridTemplates = `
  grid-template-areas:
    "name name . ."
    "development development . ."
    "bedrooms bathrooms lot_size floor_area"
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
        <FormFrame formGridTemplates={formGridTemplates}>
          <InputGroup style={{ gridArea: "name" }}>
            <Label>Name</Label>
            <Input name="name" />
          </InputGroup>
          <InputGroup style={{ gridArea: "development" }}>
            <Label>Development</Label>
            <Input name="development" />
            <CheckboxGroup>
              <input type="checkbox" />
              <label>Same Location as Development</label>
            </CheckboxGroup>
          </InputGroup>
          <InputGroup style={{ gridArea: "bedrooms" }}>
            <Label>Number of Bedrooms</Label>
            <Input name="bedrooms" />
          </InputGroup>
          <InputGroup style={{ gridArea: "bathrooms" }}>
            <Label>Number of Bathrooms</Label>
            <Input name="bathrooms" />
          </InputGroup>
          <InputGroup style={{ gridArea: "lot_size" }}>
            <Label>Lot Size</Label>
            <Input name="lot_size" />
          </InputGroup>
          <InputGroup style={{ gridArea: "floor_area" }}>
            <Label>Floor Area</Label>
            <Input name="floor_area" />
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
