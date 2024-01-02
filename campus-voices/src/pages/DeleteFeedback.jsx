import customFetch from "../utils/customInstances";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/dashboard-student/feeds/${params.id}`);
    await toast.success("Feedback deleted successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/dashboard-student/Stuffs");
};
