import React from "react";
import Footer from "../components/Footer";
import customFetch from "../utils/customInstances.js";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { StudentFormContent } from "../components/index.js";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data);

  try {
    await customFetch.post("/dashboard-student/feeds", data);
    toast.success("Feedback sent successfully");
    return redirect("/dashboard-student");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const StudentForm = () => {
  return (
    <>
      <StudentFormContent />
    </>
  );
};

export default StudentForm;
