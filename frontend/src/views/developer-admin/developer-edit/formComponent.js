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
import { updateDeveloper } from "../../../services/developer-admin/developers";
import * as Yup from "yup";

const FormSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  seo_title: Yup.string().required("SEO name is required"),
  seo_desc: Yup.string().required("SEO description is required"),
  short_desc: Yup.string(),
  overview: Yup.string().required("Overview is required"),
  values_description: Yup.string(),
  office_locations: Yup.string(),
  unique_locations: Yup.number(),
  featured_image: Yup.mixed().required("Featured image is required"),
  map_image: Yup.mixed(),
  affiliate_name_1: Yup.string(),
  affiliate_logo_1: Yup.mixed(),
  affiliate_name_2: Yup.string(),
  affiliate_logo_2: Yup.mixed(),
  affiliate_name_3: Yup.string(),
  affiliate_logo_3: Yup.mixed(),
  affiliate_name_4: Yup.string(),
  affiliate_logo_4: Yup.mixed(),
});

const FormComponent = ({ data, openModal, setOpenModal }) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    id,
    name,
    seo_title,
    seo_desc,
    short_desc,
    overview,
    values_description,
    featured_image,
    map_image,
    office_locations,
    unique_locations,
    affiliate_logo_1,
    affiliate_name_1,
    affiliate_logo_2,
    affiliate_name_2,
    affiliate_logo_3,
    affiliate_name_3,
    affiliate_logo_4,
    affiliate_name_4,
  } = data || {};

  const formGridTemplates = `
    grid-template-areas:
      ${(success || error) && `"message message message message"`}
      "name name seo_title seo_title"
      "seo_desc seo_desc short_desc short_desc"
      "overview overview values_description values_description"
      "office_locations office_locations unique_locations ."
      "featured_image featured_image map_image map_image"
      "affiliate_logo_1 affiliate_logo_2 affiliate_logo_3 affiliate_logo_4"
      "affiliate_name_1 affiliate_name_2 affiliate_name_3 affiliate_name_4"
  `;

  const successCallback = () => {
    setLoading(false);
    setError("");
    setSuccess(`Successfully edited your developer profile!`);
  };

  const errorCallback = (err) => {
    setLoading(false);
    setSuccess("");
    setError("Something went wrong, please try again!");
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    const formData = new FormData();
    Object.keys(values)
      .filter((key) => values[key] != data[key])
      .forEach((key) => {
        formData.append(key, values[key]);
      });

    updateDeveloper(id, formData, successCallback, errorCallback);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: name || "",
        seo_title: seo_title || "",
        seo_desc: seo_desc || "",
        short_desc: short_desc || "",
        overview: overview || "",
        values_description: values_description || "",
        featured_image: featured_image || null,
        map_image: map_image || null,
        office_locations: office_locations || "",
        unique_locations: unique_locations || "",
        affiliate_logo_1: affiliate_logo_1 || null,
        affiliate_name_1: affiliate_name_1 || "",
        affiliate_logo_2: affiliate_logo_2 || null,
        affiliate_name_2: affiliate_name_2 || "",
        affiliate_logo_3: affiliate_logo_3 || null,
        affiliate_name_3: affiliate_name_3 || "",
        affiliate_logo_4: affiliate_logo_4 || null,
        affiliate_name_4: affiliate_name_4 || "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      {({ values, handleChange, setFieldValue, submitForm }) =>
        loading ? (
          <Loading color="#3F526A" />
        ) : (
          <FormFrame
            id="edit-developer-form"
            formGridTemplates={formGridTemplates}
          >
            <ConfirmationModal
              open={openModal}
              setOpen={setOpenModal}
              title={"Edit Developer Profile"}
              content={`Are you sure you want to edit your details?`}
              confirmText={"Confirm"}
              formName="edit-developer-form"
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
                Format: [Developer Name] Projects For Sale | Instahomes
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
            <InputGroup style={{ gridArea: "overview" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="overview"
              />
              <Label>Developer Overview*</Label>
              <Textarea
                as="textarea"
                name="overview"
                value={values.overview}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "values_description" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="values_description"
              />
              <Label>Values Description</Label>
              <Textarea
                as="textarea"
                name="values_description"
                value={values.values_description}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "office_locations" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="office_locations"
              />
              <Label>Office Locations</Label>
              <Textarea
                as="textarea"
                name="office_locations"
                value={values.office_locations}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "unique_locations" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="unique_locations"
              />
              <Label>No. of Unique Locations</Label>
              <HelperLabel>Title</HelperLabel>
              <Input name="unique_locations" />
            </InputGroup>
            <InputGroup style={{ gridArea: "affiliate_name_1" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="affiliate_name_1"
              />
              <Label>Affiliate 1</Label>
              <HelperLabel>Name</HelperLabel>
              <Input name="affiliate_name_1" />
            </InputGroup>
            <InputGroup style={{ gridArea: "affiliate_name_2" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="affiliate_name_2"
              />
              <Label>Affiliate 2</Label>
              <HelperLabel>Name</HelperLabel>
              <Input name="affiliate_name_2" />
            </InputGroup>
            <InputGroup style={{ gridArea: "affiliate_name_3" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="affiliate_name_3"
              />
              <Label>Affiliate 3</Label>
              <HelperLabel>Name</HelperLabel>
              <Input name="affiliate_name_3" />
            </InputGroup>
            <InputGroup style={{ gridArea: "affiliate_name_4" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="affiliate_name_4"
              />
              <Label>Affiliate 4</Label>
              <HelperLabel>Name</HelperLabel>
              <Input name="affiliate_name_4" />
            </InputGroup>
            <InputGroup style={{ gridArea: "affiliate_logo_1" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="affiliate_logo_1"
              />
              <HelperLabel>Logo</HelperLabel>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={affiliate_logo_1}
                newImage={values.affiliate_logo_1}
                fieldName="affiliate_logo_1"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "affiliate_logo_2" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="affiliate_logo_2"
              />
              <HelperLabel>Logo</HelperLabel>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={affiliate_logo_2}
                newImage={values.affiliate_logo_2}
                fieldName="affiliate_logo_2"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "affiliate_logo_3" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="affiliate_logo_3"
              />
              <HelperLabel>Logo</HelperLabel>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={affiliate_logo_3}
                newImage={values.affiliate_logo_3}
                fieldName="affiliate_logo_3"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "affiliate_logo_4" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="affiliate_logo_4"
              />
              <HelperLabel>Logo</HelperLabel>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={affiliate_logo_4}
                newImage={values.affiliate_logo_4}
                fieldName="affiliate_logo_4"
              />
            </InputGroup>
            <InputGroup style={{ gridArea: "featured_image" }}>
              <FormErrorMessage
                component="div"
                style={{ marginBottom: "1em" }}
                name="featured_image"
              />
              <Label>Featured Image*</Label>
              <ImagePicker
                setFieldValue={setFieldValue}
                image={featured_image}
                newImage={values.featured_image}
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
