import React, { useState, useEffect } from "react";
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
import { FormErrorMessage } from "../../../components/elements";
import Loading from "../../../components/loading";
import { Formik } from "formik";
import { login } from "../../../services/developer-admin/auth";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

const Login = React.memo(() => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (values) => {
    const { contact_number, password } = values;
    setLoading(true);
    await login(
      contact_number,
      password,
      () => {
        setMessage("");
        setLoading(false);
        history.push("/partner/listings");
      },
      (err) => {
        setMessage(err);
        setLoading(false);
      }
    );
  };

  return (
    <Frame>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin Login | Instahomes</title>
        <meta name="description" content="Admin Login | Instahomes"></meta>
      </Helmet>
      <Logo src={instahomesLogo} onClick={() => history.push("/")} />
      <UnderlinedSpan
        href="https://m.me/instahomes.com.ph"
        style={{ position: "absolute", bottom: "2em" }}
      >
        Contact Support
      </UnderlinedSpan>
      <UnderlinedSpan
        href="https://instahomes.com.ph/"
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
          onSubmit={handleSubmit}
        >
          {({ handleChange, setFieldValue }) =>
            loading ? (
              <Loading
                message={"Logging in, please wait a moment..."}
                height="100%"
                color="#3F526A"
              />
            ) : (
              <FormDiv>
                <span id="dev-portal">Exclusive Developer Portal</span>
                <h1 className="btn-rubik">Sign in as a Developer</h1>
                <p>
                  Please use the login keys provided by the Instahomes team.
                </p>
                {message && (
                  <FormErrorMessage as="span">{message}</FormErrorMessage>
                )}
                <FormInput
                  name="contact_number"
                  placeholder="Contact number"
                  onChange={(e) => {
                    if (e.target.value.startsWith("09")) {
                      setFieldValue(
                        "contact_number",
                        "+639" + e.target.value.substring(2)
                      );
                    } else {
                      handleChange(e);
                    }
                  }}
                />
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  style={{ marginBottom: "1em" }}
                />
                <UnderlinedSpan href="mailto:instahomes.ph@gmail.com?subject=Password Reset for Developers">
                  Forgot Password?
                </UnderlinedSpan>
                <OrangeButton style={{ marginTop: "2em" }}>Login</OrangeButton>
              </FormDiv>
            )
          }
        </Formik>
      </FormContainer>
      <HouseImage />
    </Frame>
  );
});

export default Login;
