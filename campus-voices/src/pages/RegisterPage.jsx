import React from "react";
import Wrapper from "../assets/wrapper/RegisterAndLoginPage";
import { Form, useNavigation, redirect, Link } from "react-router-dom";
import { FormRow, SubmitBtn, LoginPageLogo } from "../components";
import customFetch from "../utils/customInstances";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);

    toast.success("Registration Successful");

    return redirect("/Login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const RegisterPage = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <LoginPageLogo />
        <h4 className="head">Register</h4>

        <FormRow type="text" name="name" />
        <FormRow type="type" name="department" />
        <FormRow type="number" name="registerNo" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />

        <p>
          Already member?
          <Link to="/Login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default RegisterPage;
