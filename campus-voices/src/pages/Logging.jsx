import React from "react";
import Wrapper from "../assets/wrapper/RegisterAndLoginPage";
import { Link, redirect, Form, useActionData } from "react-router-dom";
import { FormRow, SubmitBtn, LoginPageLogo } from "../components";
import customFetch from "../utils/customInstances";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const userEmail = data.email;
  const errors = { msg: "" };
  if (data.password.length < 3) {
    errors.msg = " Password is too Short ";
    return errors;
  }
  try {
    // to getting role from the user
    const userDetails = await customFetch.get(
      `/users/dashboard-admin/${userEmail}`
    );
    const userRole = userDetails.data?.user?.role;

    await customFetch.post("/auth/login", data);
    toast.success("Login Successful");
    return redirect(
      userRole == "admin" ? "/dashboard-admin" : "/dashboard-student"
    );
  } catch (error) {
    // errors.msg = error?.response?.data?.msg;
    toast.error(error?.response?.data?.msg);
    return errors;
  }
};

const Logging = () => {
  const errors = useActionData();
  return (
    <Wrapper>
      <Form method="post" className="form">
        <LoginPageLogo />
        <h4 className="head">Login</h4>
        {/* {errors?.msg && <p style={{ color: "red" }}>{errors.msg}</p>} */}
        <FormRow type="email" className="input" name="email" />
        <FormRow type="Number" name="registerNo" />
        <FormRow type="password" name="password" />
        <SubmitBtn />

        <p>
          Not Registered yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Logging;
