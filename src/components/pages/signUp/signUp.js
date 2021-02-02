import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import "./signUp.css";

const SignUp = () => {

  const validationSchema = yup.object().shape({
    username: yup.string().typeError("Invalid data type").required("Username cannot be empty"),
    password: yup.string().typeError("Invalid data type").required("Password cannot be empty"),
    email: yup.string().email("Invalid data type").required("Email cannot be empty"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords do not match").required("Password cannot be empty"),
  });

  return (
    <div className="signUpContent">
      <h2>Create Account</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className="signUpForms">

            <label>Username</label>
            <input
              className={"loginInput"}
              type={"text"}
              name={"username"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              placeholder="Enter username"
            />
            {touched.username && errors.username && (
              <p className="error">{errors.username}</p>
            )}

            <label>Email</label>
            <input
              className={"loginInput"}
              type={"email"}
              name={"email"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter email"
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}

            <label>Password</label>
            <input
              className={"loginInput"}
              type={"password"}
              name={"password"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Enter Password"
            />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}

            <label>Confirm the password</label>
            <input
              className={"loginInput"}
              type={"password"}
              name={"confirmPassword"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              placeholder="Enter confirm password"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
            
            <div className="buttonSignUp">

              <button
                className="buttonLogin"
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type={"submit"}
              >
                Submit
              </button>

            </div>
          </div>
        )}
      </Formik>

      <p className="signIn">Do you have an account? <span>Sign in</span></p>
    </div>
  );
};

export default SignUp;
