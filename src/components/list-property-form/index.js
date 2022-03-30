import React, { useState } from "react";
import styled from "styled-components";
import {
  LightInput,
  LightTextarea,
  OrangeButton,
  FormErrorMessage,
  FormWarningMessage,
} from "../../components/elements";
import { Formik, Form } from "formik";

export const ListingForm = styled(Form)`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: initial;
  }
`;

export const ListingButton = styled.div`
  button {
    font-size: 1em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    button {
      width: 100%;
    }
  }
`;

export const ListingFormDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  box-shadow: 0px 4px 16px 0px rgb(0, 0, 0, 0.1);
  padding: 1.6875em;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const ListProperty = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (values, { setSubmitting }) => {
    const { details, ...valuesCopy } = values;
    valuesCopy.details = `${details}\n${new Date()}`;
    setSubmitting(true);
    const data = JSON.stringify({ data: valuesCopy });
    fetch("https://api.apispreadsheets.com/data/7854/", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    })
      .then((res) => {
        if (res.ok) {
          return "Success";
        } else {
          setSuccessMessage("");
          setErrorMessage("Something went wrong. Please try again!");
          setSubmitting(false);
          throw new Error("Something went wrong");
        }
      })
      .then((json) => {
        setSuccessMessage(
          "Successfully submitted! Please wait for a few days while we check your details."
        );
        setErrorMessage("");
        setSubmitting(false);
      })
      .catch((err) => {
        // console.log(err);
        setSuccessMessage("");
        setErrorMessage("Something went wrong. Please try again!");
        setSubmitting(false);
      });
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: "",
        email: "",
        phone: "",
        details: "",
      }}
      onSubmit={handleSubmit}
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
        <ListingForm>
          <ListingFormDiv>
            {successMessage && (
              <FormWarningMessage as="div" style={{ marginBottom: "1em" }}>
                {successMessage}
              </FormWarningMessage>
            )}
            {errorMessage && (
              <FormErrorMessage as="div" style={{ marginBottom: "1em" }}>
                {errorMessage}
              </FormErrorMessage>
            )}
            <LightInput
              marginBottom="1em"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Full name or Company name"
            />
            <LightInput
              marginBottom="1em"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Email address"
            />
            <LightInput
              marginBottom="1em"
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Cellphone number"
            />
            <LightTextarea
              marginBottom="1em"
              name="details"
              id="details"
              value={values.details}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Any details about your properties (locations, types of property, prices, etc.)"
            ></LightTextarea>
            <ListingButton>
              <OrangeButton type="submit" disabled={isSubmitting}>
                LIST YOUR PROPERTY <i id="signup-free">it's free</i>
              </OrangeButton>
            </ListingButton>
          </ListingFormDiv>
        </ListingForm>
      )}
    </Formik>
  );
};

export default ListProperty;
