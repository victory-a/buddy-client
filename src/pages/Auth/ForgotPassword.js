import React, { Fragment, useLayoutEffect } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import TextInput from "components/TextInput";
import Button from "components/Button";
import { Spinner } from "components/loaders.js";
import { forgotPasswordSchema } from "utils/validationSchema";
import {
  Title,
  TitleContainer,
  Description,
  FormWrapper,
  FormFooter
} from "layout/AuthLayout/styles";

const initialValues = {
  email: "",
  password: ""
};

const ForgotPassword = () => {
  useLayoutEffect(() => {
    document.title = "Buddy | Forgot Password";
  }, []);

  function handleSubmit() {}

  return (
    <Fragment>
      <TitleContainer>
        <Title>Forgot Password?</Title>
        <Description>Please enter your registered email for recovery link</Description>
      </TitleContainer>

      <Formik
        initialValues={initialValues}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <TextInput
              name="email"
              type="email"
              placeholder="ekeziedavid@gmail.com"
              title="Email Address"
            />

            <Button type="submit" disabled={isSubmitting || !isValid}>
              {isSubmitting ? <Spinner /> : "Continue"}
            </Button>
          </FormWrapper>
        )}
      </Formik>
      <FormFooter>
        <p>
          Have an account? <Link to="/">Sign In.</Link>
        </p>
      </FormFooter>
    </Fragment>
  );
};

export default ForgotPassword;