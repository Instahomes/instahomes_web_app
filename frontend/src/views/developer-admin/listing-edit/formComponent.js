import React, { useState } from "react";
import {
  FormFrame,
  InputGroup,
  HelperLabel,
  Label,
  Input,
  ImagePicker,
  CheckboxGroup,
  Textarea,
  FormSelect,
} from "../../../components/developer-admin/form";
import Loading from "../../../components/loading";
import ConfirmationModal from "../../../components/developer-admin/modal";
import {
  FormWarningMessage,
  FormErrorMessage,
} from "../../../components/elements";
import { Formik } from "formik";
import {
  createListing,
  updateListing,
} from "../../../services/developer-admin/listings";
import {
  purchaseTypeChoices,
  completionChoices,
} from "../../../misc/constants";
import * as Yup from "yup";

const FormSchema = Yup.object({
  unit_name: Yup.string().required("Unit name is required"),
  seo_title: Yup.string().required("SEO name is required"),
  seo_desc: Yup.string(),
  development: Yup.number().required("Development is required"),
  lowest_price: Yup.number("Please input a valid number")
    .min(0)
    .required("Development is required"),
  bedrooms: Yup.number("Please input a valid number")
    .min(0)
    .required("Number of bedrooms is required"),
  bathrooms_min: Yup.number("Please input a valid number")
    .min(0)
    .required("Min. number of bathrooms is required"),
  bathrooms_max: Yup.number("Please input a valid number")
    .moreThan(Yup.ref("bathrooms_min"))
    .nullable(),
  floor_size_min: Yup.number("Please input a valid number")
    .min(0)
    .required("Min. floor size is required"),
  floor_size_max: Yup.number("Please input a valid number")
    .moreThan(Yup.ref("floor_size_min"))
    .nullable(),
  property_details: Yup.string().required(
    "An overview of the property is required"
  ),
  photo_main: Yup.mixed(),
  // photo_main: Yup.mixed().required("Main photo is required"),
  image_1: Yup.mixed(),
  image_2: Yup.mixed(),
  image_3: Yup.mixed(),
  image_4: Yup.mixed(),
  image_5: Yup.mixed(),
  image_6: Yup.mixed(),
  floor_plan: Yup.mixed(),
});

const FormComponent = ({
  data,
  developments,
  openModal,
  setOpenModal,
  isEditing,
}) => {
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
    sale_status,
    completion_status,
    floor_size_min,
    floor_size_max,
    property_details,
    floor_plan,
    photo_main,
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
  } = data || {};

  const formGridTemplates = `
    grid-template-areas:
      ${(success || error) && `"message message message message"`}
      "unit_name unit_name seo_title seo_title"
      "seo_desc seo_desc . ."
      "development development sale_status completion_status"
      "lowest_price bedrooms bathrooms_min bathrooms_max"
      "lot_size floor_size_min floor_size_max ."
      "property_details property_details . ."
      "photo_main image1 image2 image3"
      "floor_plan image4 image5 image6";
  `;

  const successCallback = (text, resetForm = null) => {
    setLoading(false);
    setError("");
    setSuccess(`Successfully ${text} the listing!`);
    if (resetForm) {
      resetForm();
    }
  };

  const errorCallback = (err) => {
    setLoading(false);
    setSuccess("");
    setError("Something went wrong, please try again!");
  };

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    const formData = new FormData();
    let tempData = Object.keys(values);
    if (isEditing)
      tempData = tempData.filter((key) => values[key] != data[key]);
    else tempData = tempData.filter((key) => !!values[key]);
    tempData.forEach((key) => {
      formData.append(key, values[key]);
    });

    isEditing
      ? updateListing(
          id,
          formData,
          (data) => successCallback("edited"),
          errorCallback
        )
      : createListing(
          formData,
          (data) => successCallback("created", resetForm),
          errorCallback
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
        sale_status: sale_status || "",
        completion_status: completion_status || "",
        floor_plan: floor_plan || null,
        floor_size_min: floor_size_min || "",
        floor_size_max: floor_size_max || null,
        property_details: property_details || "",
        photo_main: photo_main || null,
        image_1: image_1 || null,
        image_2: image_2 || null,
        image_3: image_3 || null,
        image_4: image_4 || null,
        image_5: image_5 || null,
        image_6: image_6 || null,
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      {({ values, handleChange, handleBlur, setFieldValue }) =>
        loading ? (
          <Loading color="#3F526A" />
        ) : (
          <FormFrame id="edit-listing" formGridTemplates={formGridTemplates}>
            <ConfirmationModal
              open={openModal}
              setOpen={setOpenModal}
              title={isEditing ? `Edit ${unit_name}` : "Create Listing"}
              content={`Are you sure you want to ${
                isEditing ? "edit" : "create"
              } the listing?`}
              confirmText={isEditing ? "Confirm" : "Create"}
              formName="edit-listing"
            />
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
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="unit_name"
              />
              <Label>Unit Name*</Label>
              <Input name="unit_name" />
            </InputGroup>
            <InputGroup style={{ gridArea: "seo_title" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="seo_title"
              />
              <Label>SEO Name*</Label>
              <HelperLabel>
                Format: [Development Name] [Unit Name] For Sale | [Developer
                Name]
              </HelperLabel>
              <Input name="seo_title" />
            </InputGroup>
            <InputGroup style={{ gridArea: "seo_desc" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="seo_desc"
              />
              <Label>SEO Description</Label>
              <HelperLabel>
                Description that will appear in search results of your listing
              </HelperLabel>
              <Textarea
                as="textarea"
                name="seo_desc"
                value={values.seo_desc}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "development" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="development"
              />
              <Label>Development*</Label>
              <FormSelect
                fieldName="development"
                options={developments}
                formik={{ values, setFieldValue, handleBlur }}
              />
              {/* <CheckboxGroup>
                <input type="checkbox" />
                <label>Same Location as Development</label>
              </CheckboxGroup> */}
            </InputGroup>
            <InputGroup style={{ gridArea: "sale_status" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="sale_status"
              />
              <Label>Sale Status*</Label>
              <FormSelect
                fieldName="sale_status"
                options={purchaseTypeChoices}
                formik={{ values, setFieldValue, handleBlur }}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "completion_status" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="completion_status"
              />
              <Label>Completion Status*</Label>
              <FormSelect
                fieldName="completion_status"
                options={completionChoices}
                formik={{ values, setFieldValue, handleBlur }}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "lowest_price" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="lowest_price"
              />
              <Label>Lowest Price (PHP)*</Label>
              <Input name="lowest_price" />
            </InputGroup>
            <InputGroup style={{ gridArea: "bedrooms" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="bedrooms"
              />
              <Label>Number of Bedrooms*</Label>
              <Input name="bedrooms" />
            </InputGroup>
            <InputGroup style={{ gridArea: "bathrooms_min" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="bathrooms_min"
              />
              <Label>Min. Number of Bathrooms*</Label>
              <HelperLabel>
                Fill out only this field if there is an exact number of
                bathrooms
              </HelperLabel>
              <Input name="bathrooms_min" />
            </InputGroup>
            <InputGroup style={{ gridArea: "bathrooms_max" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="bathrooms_max"
              />
              <Label>Max. Number of Bathrooms</Label>
              <HelperLabel>
                Fill out this field if there is a range. Leave this blank if
                exact.
              </HelperLabel>
              <Input name="bathrooms_max" />
            </InputGroup>
            <InputGroup style={{ gridArea: "lot_size" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="lot_size"
              />
              <Label>Lot Size*</Label>
              <Input name="lot_size" />
            </InputGroup>
            <InputGroup style={{ gridArea: "floor_size_min" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="floor_size_min"
              />
              <Label>Min. Floor Area*</Label>
              <HelperLabel>
                Fill out only this field if there is an exact number
              </HelperLabel>
              <Input name="floor_size_min" />
            </InputGroup>
            <InputGroup style={{ gridArea: "floor_size_max" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="floor_size_max"
              />
              <Label>Max. Floor Area</Label>
              <HelperLabel>
                Fill out this field if there is a range. Leave this blank if
                exact.
              </HelperLabel>
              <Input name="floor_size_max" />
            </InputGroup>
            <InputGroup style={{ gridArea: "property_details" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="property_details"
              />
              <Label>Property Overview*</Label>
              <Textarea
                as="textarea"
                name="property_details"
                value={values.property_details}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "photo_main" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="photo_main"
              />
              <Label>Main Photo*</Label>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={photo_main}
                newImage={values.photo_main}
                fieldName="photo_main"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "floor_plan" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="floor_plan"
              />
              <Label>Floor Plan</Label>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={floor_plan}
                newImage={values.floor_plan}
                fieldName="floor_plan"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image1" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="image1"
              />
              <Label>Images</Label>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_1}
                newImage={values.image_1}
                fieldName="image_1"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image2" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="image2"
              />
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_2}
                newImage={values.image_2}
                fieldName="image_2"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image3" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="image3"
              />
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_3}
                newImage={values.image_3}
                fieldName="image_3"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image4" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="image4"
              />
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_4}
                newImage={values.image_4}
                fieldName="image_4"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image5" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="image5"
              />
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_5}
                newImage={values.image_5}
                fieldName="image_5"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image6" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="image6"
              />
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_6}
                newImage={values.image_6}
                fieldName="image_6"
              />
            </InputGroup>
          </FormFrame>
        )
      }
    </Formik>
  );
};

export default FormComponent;
