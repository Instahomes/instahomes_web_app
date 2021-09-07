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
import { updateListing } from "../../../services/developer-admin/listings";
import {
  purchaseTypeChoices,
  completionChoices,
} from "../../../misc/constants";

const FormComponent = ({ data, developments, openModal, setOpenModal }) => {
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
    overview,
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
      "overview overview . ."
      "photo_main image1 image2 image3"
      "floor_plan image4 image5 image6";
  `;

  const handleSubmit = async (values) => {
    setLoading(true);
    const formData = new FormData();
    Object.keys(values)
      .filter((key) => values[key] != data[key])
      .forEach((key) => {
        formData.append(key, values[key]);
      });

    updateListing(
      id,
      formData,
      () => {
        setLoading(false);
        setError("");
        setSuccess("Successfully updated the listing!");
      },
      (err) => {
        console.log(err);
        setLoading(false);
        setSuccess("");
        setError("Something went wrong, please try again!");
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
        sale_status: sale_status || "",
        completion_status: completion_status || "",
        floor_size_min: floor_size_min || "",
        floor_size_max: floor_size_max || null,
        overview: overview || "",
        photo_main: photo_main || null,
        image_1: image_1 || null,
        image_2: image_2 || null,
        image_3: image_3 || null,
        image_4: image_4 || null,
        image_5: image_5 || null,
        image_6: image_6 || null,
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, setFieldValue }) =>
        loading ? (
          <Loading color="#3F526A" />
        ) : (
          <FormFrame id="edit-listing" formGridTemplates={formGridTemplates}>
            <ConfirmationModal
              open={openModal}
              setOpen={setOpenModal}
              title={`Edit ${unit_name}`}
              content="Are you sure you want to edit the listing?"
              confirmText="Confirm"
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
              <Label>Sale Status*</Label>
              <FormSelect
                fieldName="sale_status"
                options={purchaseTypeChoices}
                formik={{ values, setFieldValue, handleBlur }}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "completion_status" }}>
              <Label>Completion Status*</Label>
              <FormSelect
                fieldName="completion_status"
                options={completionChoices}
                formik={{ values, setFieldValue, handleBlur }}
              />
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
            <InputGroup style={{ gridArea: "photo_main" }}>
              <Label>Main Photo</Label>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={photo_main}
                fieldName="photo_main"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "floor_plan" }}>
              <Label>Floor Plan</Label>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={floor_plan}
                fieldName="floor_plan"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image1" }}>
              <Label>Images</Label>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_1}
                fieldName="image_1"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image2" }}>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_2}
                fieldName="image_2"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image3" }}>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_3}
                fieldName="image_3"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image4" }}>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_4}
                fieldName="image_4"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image5" }}>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_5}
                fieldName="image_5"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "image6" }}>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={image_6}
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
