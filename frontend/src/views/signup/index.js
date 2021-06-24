import React, { useState } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Loading from "../../components/loading";
import {
  HeroFrame,
  HeroContent,
  SignupForm,
  SignupWrapper,
  SignupInput,
  SignupButtonsDiv,
  SignupButton,
  ModifiedErrorMessage,
  ModifiedWarningMessage,
} from "./styles";
import heroBg from "../../assets/home/hero.jpeg";
import person from "../../assets/signup/person.svg";
import email from "../../assets/signup/email.svg";
import lock from "../../assets/signup/lock.svg";
import phone from "../../assets/signup/phone.svg";
import { Formik, Form } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import { login } from "../../services/auth";
import { createUser } from "../../services/users";
import { Helmet } from "react-helmet";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  contactNumber: Yup.string()
    .required("Contact number is required")
    .matches(/^\+639\d{9}$/, "Please follow the correct format: +639171234567"),
  email: Yup.string().email(),
  password: Yup.string().required("Password is required"),
  retypePassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  agreeToTOC: Yup.bool().oneOf(
    [true],
    "You must agree to the Terms & Conditions and Privacy Policy"
  ),
});

const LoginSchema = Yup.object({
  contactNumber: Yup.string()
    .required("Contact number is required")
    .matches(/^\+639\d{9}$/, "Please follow the correct format: +639171234567"),
  email: Yup.string().email(),
  password: Yup.string().required("Password is required"),
});

const Signup = ({ isLogin }) => {
  const history = useHistory();
  const location = useLocation();

  const [message, setMessage] = useState(
    (location.state && location.state.message) || ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [isEmailShown, setEmailShown] = useState(false);

  const FormErrorsComponent = () =>
    formErrors.map((formError) => (
      <ModifiedErrorMessage as="div">{formError}</ModifiedErrorMessage>
    ));

  const errorCallback = (err, setSubmitting) => {
    setIsLoading(false);
    setSubmitting(false);
    if (err.response && err.response.data) {
      setFormErrors(
        [].concat(
          ...Object.entries(err.response.data).map(
            ([key, value]) => `${key}: ${value}`
          )
        )
      );
    } else {
      setMessage(
        "Something went wrong. Please input your correct credentials."
      );
    }
  };

  const handleLogin = (contactNumber, password, setSubmitting) => {
    setIsLoading(true);
    login(
      contactNumber,
      password,
      () => {
        setIsLoading(false);
        setSubmitting(false);
        history.push("/");
      },
      (err) => errorCallback(err, setSubmitting)
    );
  };

  const handleSignup = (values, setSubmitting) => {
    setIsLoading(true);
    const { contactNumber, email, password } = values;
    createUser(
      contactNumber,
      email,
      password,
      () => {
        setIsLoading(false);
        setSubmitting(false);
        history.push("/login", {
          message: "Account has been created! You may now log in.",
        });
      },
      (err) => errorCallback(err, setSubmitting)
    );
  };

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{isLogin ? "Login" : "Signup"} | Instahomes</title>
        <meta name="description" content=""></meta>
      </Helmet>
      <Navbar dark isHome />
      <HeroFrame heroBg={heroBg}>
        <HeroContent>
          <div id="empty-div"></div>
          <Formik
            initialValues={{
              name: "",
              contactNumber: "",
              email: "",
              password: "",
              retypePassword: "",
              agreeToTOC: false,
            }}
            onSubmit={(values, { setSubmitting }) => {
              const { contactNumber, password } = values;
              isLogin
                ? handleLogin(contactNumber, password, setSubmitting)
                : handleSignup(values, setSubmitting);
            }}
            validationSchema={isLogin ? LoginSchema : SignupSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form>
                <SignupForm>
                  {isLoading ? (
                    <Loading
                      message={
                        isLogin
                          ? "Logging in, please wait a moment..."
                          : "Signing up, please wait a moment..."
                      }
                    />
                  ) : (
                    <React.Fragment>
                      <h2>
                        {isLogin
                          ? "Log into your account"
                          : "Save your dream listings, Inquire with just a click"}
                      </h2>
                      {!isLogin && (
                        <p>
                          Sign up to add to your wishlist and save your contact
                          information to inquire for multiple properties easily.
                        </p>
                      )}
                      <FormErrorsComponent />
                      {message && (
                        <ModifiedWarningMessage as="div">
                          {message}
                        </ModifiedWarningMessage>
                      )}
                      <ModifiedErrorMessage component="div" name="name" />
                      {!isLogin && (
                        <SignupInput
                          icon={person}
                          scale={0.9}
                          placeholder="Full Name"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                      )}
                      <ModifiedErrorMessage
                        component="div"
                        name="contactNumber"
                      />
                      <SignupWrapper>
                        <SignupInput
                          icon={phone}
                          scale={0.9}
                          placeholder="Contact Number"
                          name="contactNumber"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.contactNumber}
                        />
                        {!isLogin && (
                          <span onClick={() => setEmailShown(!isEmailShown)}>
                            {isEmailShown ? "- remove" : "+ add"} email address
                          </span>
                        )}
                      </SignupWrapper>
                      <ModifiedErrorMessage component="div" name="email" />
                      {isEmailShown && (
                        <SignupInput
                          icon={email}
                          scale={0.9}
                          placeholder="Email Address"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      )}
                      <ModifiedErrorMessage component="div" name="password" />
                      <SignupInput
                        icon={lock}
                        scale={0.9}
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {!isLogin && (
                        <SignupInput
                          icon={lock}
                          scale={0.9}
                          type="password"
                          placeholder="Retype Password"
                          name="retypePassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.retypePassword}
                        />
                      )}
                      <ModifiedErrorMessage component="div" name="agreeToTOC" />
                      {!isLogin && (
                        <label className="terms-checkbox small-span">
                          <input
                            type="checkbox"
                            name="agreeToTOC"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={values.agreeToTOC}
                          />
                          I agree to the Terms & Conditions and Privacy Policy
                        </label>
                      )}
                      <SignupButtonsDiv>
                        <SignupButton
                          type="submit"
                          disabled={
                            isSubmitting || (!isLogin && !values.agreeToTOC)
                          }
                        >
                          {isLogin ? "LOG IN" : "SIGN UP"}
                        </SignupButton>
                      </SignupButtonsDiv>
                      {isLogin ? (
                        <span
                          className="small-span"
                          onClick={() => history.push("/signup")}
                        >
                          Don't have an account? <strong>Sign up!</strong>
                        </span>
                      ) : (
                        <span
                          className="small-span"
                          onClick={() => history.push("/login")}
                        >
                          Have an account? <strong>Log in!</strong>
                        </span>
                      )}
                    </React.Fragment>
                  )}
                </SignupForm>
              </Form>
            )}
          </Formik>
        </HeroContent>
      </HeroFrame>
    </Layout>
  );
};

export default Signup;
