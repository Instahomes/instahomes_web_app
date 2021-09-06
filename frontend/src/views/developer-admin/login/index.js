import React, { useState, useEffect, useMemo } from "react";
import {
  Frame,
  Logo,
  FormContainer,
  FormDiv,
  HouseImage,
  FormInput,
  UnderlinedSpan,
} from "./styles";
import instahomesLogo from "../../../assets/navbar/logo.svg";
import { OrangeButton } from "../../../components/developer-admin/base/styles";
import { Formik } from "formik";

const Login = React.memo((props) => {
  return (
    <Frame>
      <Logo src={instahomesLogo} />
      <UnderlinedSpan style={{ position: "absolute", bottom: "2em" }}>
        Contact Support
      </UnderlinedSpan>
      <UnderlinedSpan
        style={{ position: "absolute", bottom: "2em", left: "12em" }}
      >
        Visit Website
      </UnderlinedSpan>
      <FormContainer>
        <Formik
          initialValues={{
            contact_number: "",
            password: "",
          }}
          // onSubmit={handleSubmit}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <FormDiv>
              <span id="dev-portal">Exclusive Developer Portal</span>
              <h1 className="btn-rubik">Sign in as a Developer</h1>
              <p>Please use the login keys provided by the Instahomes team.</p>
              <FormInput name="contact_number" placeholder="Email address" />
              <FormInput
                name="password"
                type="password"
                placeholder="Password"
                style={{ marginBottom: "1em" }}
              />
              <UnderlinedSpan>Forgot Password?</UnderlinedSpan>
              <OrangeButton style={{ marginTop: "2em" }}>Login</OrangeButton>
            </FormDiv>
          )}
        </Formik>
      </FormContainer>
      <HouseImage />
    </Frame>
  );
});

export default Login;
