import React, { useState } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import {
  HeroFrame,
  HeroContent,
  SignupForm,
  SignupInput,
  SignupButtonsDiv,
  SignupButton,
  LoginButton,
} from "./styles";
import heroBg from "../../assets/home/hero.jpeg";
import person from "../../assets/signup/person.svg";
import email from "../../assets/signup/email.svg";
import lock from "../../assets/signup/lock.svg";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import { login } from "../../services/auth";

const Signup = (props) => {
  const [message, setMessage] = useState("");
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
      <Navbar dark />
      <HeroFrame heroBg={heroBg}>
        <HeroContent>
          <div id="empty-div"></div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              const { email, password } = values;
              handleLogin(email, password);
            }}
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
                  <h2>Save your dream listings, Inquire with just a click</h2>
                  <p>
                    Sign up to add to your wishlist and save your contact
                    information to inquire for multiple properties easily.
                  </p>
                  <SignupInput
                    icon={person}
                    scale={0.9}
                    placeholder="Full Name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <SignupInput
                    icon={email}
                    scale={0.9}
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
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
                  <label className="terms-checkbox">
                    <input type="checkbox" />I agree to the Terms & Conditions
                    and Privacy Policy
                  </label>
                  <SignupButtonsDiv>
                    <SignupButton>SIGN UP</SignupButton>
                    <LoginButton type="submit">LOG IN</LoginButton>
                  </SignupButtonsDiv>
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
