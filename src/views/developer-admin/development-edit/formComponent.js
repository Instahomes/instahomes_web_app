import React, { useState } from "react";
import {
  FormFrame,
  InputGroup,
  HelperLabel,
  Label,
  Input,
  ImagePicker,
  Textarea,
} from "../../../components/developer-admin/form";
import Loading from "../../../components/loading";
import ConfirmationModal from "../../../components/developer-admin/modal";
import {
  FormWarningMessage,
  FormErrorMessage,
} from "../../../components/elements";
import { Formik } from "formik";
import {
  createDevelopment,
  updateDevelopment,
} from "../../../services/developer-admin/developments";
import { getProfile } from "../../../services/developer-admin/auth";
import * as Yup from "yup";

const FormSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  seo_title: Yup.string().required("SEO name is required"),
  seo_desc: Yup.string().required("SEO description is required"),
  short_desc: Yup.string(),
  development_type: Yup.string(),
  location: Yup.string().required("Location is required"),
  description_by_car: Yup.string(),
  description_by_commute: Yup.string(),
  area_facts: Yup.string(),
  overview: Yup.string().required("Overview is required"),
  photo_main: Yup.mixed().required("Main photo is required"),
  map_image: Yup.mixed(),
  amenity_1: Yup.string(),
  amenity_1_desc: Yup.string(),
  amenity_1_image: Yup.mixed(),
  amenity_2: Yup.string(),
  amenity_2_desc: Yup.string(),
  amenity_2_image: Yup.mixed(),
  amenity_3: Yup.string(),
  amenity_3_desc: Yup.string(),
  amenity_3_image: Yup.mixed(),
  amenity_4: Yup.string(),
  amenity_4_desc: Yup.string(),
  amenity_4_image: Yup.mixed(),
});

const FormComponent = ({ data, openModal, setOpenModal, isEditing }) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { developer } = getProfile();
  const { id: developerId } = developer;
  const {
    id,
    name,
    seo_title,
    seo_desc,
    short_desc,
    overview,
    development_type,
    location,
    description_by_car,
    description_by_commute,
    area_facts,
    photo_main,
    amenity_1,
    amenity_1_desc,
    amenity_1_image,
    amenity_2,
    amenity_2_desc,
    amenity_2_image,
    amenity_3,
    amenity_3_desc,
    amenity_3_image,
    amenity_4,
    amenity_4_desc,
    amenity_4_image,
    map_image,
  } = data || {};

  const formGridTemplates = `
    grid-template-areas:
      ${(success || error) && `"message message message message"`}
      "name name seo_title seo_title"
      "seo_desc seo_desc short_desc short_desc"
      "location location development_type development_type"
      "description_by_car description_by_car description_by_commute description_by_commute"
      "overview overview area_facts area_facts"
      "photo_main photo_main map_image map_image"
      "amenity_1 amenity_2 amenity_3 amenity_4"
      "amenity_1_desc amenity_2_desc amenity_3_desc amenity_4_desc"
      "amenity_1_image amenity_2_image amenity_3_image amenity_4_image";
  `;

  const successCallback = (text, resetForm = null) => {
    setLoading(false);
    setError("");
    setSuccess(`Successfully ${text} the development!`);
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
    else
      tempData = tempData.filter(
        (key) => values[key] != null || key == "developer"
      );
    tempData.forEach((key) => {
      formData.append(key, values[key]);
    });

    isEditing
      ? updateDevelopment(
          id,
          formData,
          (data) => successCallback("edited"),
          errorCallback
        )
      : createDevelopment(
          formData,
          (data) => successCallback("created", resetForm),
          errorCallback
        );
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: name || "",
        developer: developerId,
        seo_title: seo_title || "",
        seo_desc: seo_desc || "",
        short_desc: short_desc || "",
        overview: overview || "",
        development_type: development_type || "",
        location: location || "",
        description_by_car: description_by_car || "",
        description_by_commute: description_by_commute || "",
        area_facts: area_facts || "",
        photo_main: photo_main || null,
        amenity_1: amenity_1 || "",
        amenity_1_desc: amenity_1_desc || "",
        amenity_1_image: amenity_1_image || null,
        amenity_2: amenity_2 || "",
        amenity_2_desc: amenity_2_desc || "",
        amenity_2_image: amenity_2_image || null,
        amenity_3: amenity_3 || "",
        amenity_3_desc: amenity_3_desc || "",
        amenity_3_image: amenity_3_image || null,
        amenity_4: amenity_4 || "",
        amenity_4_desc: amenity_4_desc || "",
        amenity_4_image: amenity_4_image || null,
        map_image: map_image || null,
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      {({ values, handleChange, setFieldValue, submitForm }) =>
        loading ? (
          <Loading color="#3F526A" />
        ) : (
          <FormFrame
            id="edit-development-form"
            formGridTemplates={formGridTemplates}
          >
            <ConfirmationModal
              key={"edit-development-modal"}
              open={openModal}
              setOpen={setOpenModal}
              title={isEditing ? `Edit ${name}` : "Create Development"}
              content={`Are you sure you want to ${
                isEditing ? "edit" : "create"
              } the development?`}
              confirmText={isEditing ? "Confirm" : "Create"}
              formName="edit-development-form"
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
            <InputGroup style={{ gridArea: "name" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="name"
              />
              <Label>Name*</Label>
              <Input name="name" />
            </InputGroup>
            <InputGroup style={{ gridArea: "seo_title" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="seo_title"
              />
              <Label>SEO Name*</Label>
              <HelperLabel>
                Format: [Development Name] Units For Sale | [Developer Name]
              </HelperLabel>
              <Input name="seo_title" />
            </InputGroup>
            <InputGroup style={{ gridArea: "seo_desc" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="seo_desc"
              />
              <Label>SEO Description*</Label>
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
            <InputGroup style={{ gridArea: "short_desc" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="short_desc"
              />
              <Label>Short Description</Label>
              <HelperLabel>Short description of your development</HelperLabel>
              <Textarea
                as="textarea"
                name="short_desc"
                value={values.short_desc}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "location" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="location"
              />
              <Label>Location*</Label>
              <Input name="location" />
            </InputGroup>
            <InputGroup style={{ gridArea: "development_type" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="development_type"
              />
              <Label>Development Type</Label>
              <Input name="development_type" />
            </InputGroup>
            <InputGroup style={{ gridArea: "description_by_car" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="description_by_car"
              />
              <Label>Description by Car</Label>
              <HelperLabel>Directions to your development by car</HelperLabel>
              <Textarea
                as="textarea"
                name="description_by_car"
                value={values.description_by_car}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "description_by_commute" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="description_by_commute"
              />
              <Label>Description by Commute</Label>
              <HelperLabel>
                Directions to your development by commute
              </HelperLabel>
              <Textarea
                as="textarea"
                name="description_by_commute"
                value={values.description_by_commute}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "overview" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="overview"
              />
              <Label>Development Overview*</Label>
              <Textarea
                as="textarea"
                name="overview"
                value={values.overview}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "area_facts" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="area_facts"
              />
              <Label>Area Facts</Label>
              <Textarea
                as="textarea"
                name="area_facts"
                value={values.area_facts}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_1" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_1"
              />
              <Label>Amenity 1</Label>
              <HelperLabel>Title</HelperLabel>
              <Input name="amenity_1" />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_2" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_2"
              />
              <Label>Amenity 2</Label>
              <HelperLabel>Title</HelperLabel>
              <Input name="amenity_2" />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_3" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_3"
              />
              <Label>Amenity 3</Label>
              <HelperLabel>Title</HelperLabel>
              <Input name="amenity_3" />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_4" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_4"
              />
              <Label>Amenity 4</Label>
              <HelperLabel>Title</HelperLabel>
              <Input name="amenity_4" />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_1_desc" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_1_desc"
              />
              <HelperLabel>Description</HelperLabel>
              <Textarea
                as="textarea"
                name="amenity_1_desc"
                value={values.amenity_1_desc}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_2_desc" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_2"
              />
              <HelperLabel>Description</HelperLabel>
              <Textarea
                as="textarea"
                name="amenity_2"
                value={values.amenity_2_desc}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_3_desc" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_3_desc"
              />
              <HelperLabel>Description</HelperLabel>
              <Textarea
                as="textarea"
                name="amenity_3_desc"
                value={values.amenity_3_desc}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_4_desc" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_4_desc"
              />
              <HelperLabel>Description</HelperLabel>
              <Textarea
                as="textarea"
                name="amenity_4_desc"
                value={values.amenity_4_desc}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_1_image" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_1_image"
              />
              <HelperLabel>Image</HelperLabel>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={amenity_1_image}
                newImage={values.amenity_1_image}
                fieldName="amenity_1_image"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_2_image" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_2_image"
              />
              <HelperLabel>Image</HelperLabel>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={amenity_2_image}
                newImage={values.amenity_2_image}
                fieldName="amenity_2_image"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_3_image" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_3_image"
              />
              <HelperLabel>Image</HelperLabel>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={amenity_3_image}
                newImage={values.amenity_3_image}
                fieldName="amenity_3_image"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "amenity_4_image" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="amenity_4_image"
              />
              <HelperLabel>Image</HelperLabel>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={amenity_4_image}
                newImage={values.amenity_4_image}
                fieldName="amenity_4_image"
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
            <InputGroup style={{ gridArea: "map_image" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="map_image"
              />
              <Label>Map Image</Label>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={map_image}
                newImage={values.map_image}
                fieldName="map_image"
              />
            </InputGroup>
          </FormFrame>
        )
      }
    </Formik>
  );
};

export default FormComponent;
