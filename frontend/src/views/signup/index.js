import React, { useState } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import {
  HeroFrame,
  HeroContent,
  SignupForm,
  SignupWrapper,
  SignupInput,
  SignupButtonsDiv,
  SignupButton,
} from "./styles";
import heroBg from "../../assets/home/hero.jpeg";
import person from "../../assets/signup/person.svg";
import email from "../../assets/signup/email.svg";
import lock from "../../assets/signup/lock.svg";
import phone from "../../assets/signup/phone.svg";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import { login } from "../../services/auth";
import { Helmet } from "react-helmet";
import * as Yup from "yup";

const Signup = ({ isLogin }) => {
  const [message, setMessage] = useState("");
  const [isEmailShown, setEmailShown] = useState(false);
  const history = useHistory();

  const handleLogin = (email, password) => {
    login(
      email,
      password,
      () => history.push("/"),
      () => setMessage("Wrong credentials!")
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
              passwordRetype: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              const { email, password } = values;
              handleLogin(email, password);
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Full name is required"),
              contactNumber: Yup.string().required(
                "Contact number is required"
              ),
              email: Yup.string().email(),
              password: Yup.string().required("Password is required"),
              retypePassword: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Passwords must match"
              ),
            })}
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
                  {message && <span>{message}</span>}
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
                    <span onClick={() => setEmailShown(!isEmailShown)}>
                      {isEmailShown ? "- remove" : "+ add"} email address
                    </span>
                  </SignupWrapper>
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
                  <SignupInput
                    icon={lock}
                    scale={0.9}
                    type="password"
                    placeholder="Retype Password"
                    name="passwordRetype"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordRetype}
                  />
                  {!isLogin && (
                    <label className="terms-checkbox small-span">
                      <input type="checkbox" />I agree to the Terms & Conditions
                      and Privacy Policy
                    </label>
                  )}
                  <SignupButtonsDiv>
                    <SignupButton>
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
