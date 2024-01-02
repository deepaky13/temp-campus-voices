import React, { createContext, useContext } from "react";
import Wrapper from "../assets/wrapper/FeedbacksContainer";
import customFetch from "../utils/customInstances";
import { useLoaderData } from "react-router-dom";
import StuffContainer from "../components/StuffContainer";
import Footer from "../components/Footer";
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/dashboard-student/feeds");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const AllStuffContext = createContext();
const AllStuffPage = () => {
  const { data } = useLoaderData();
  return (
    <AllStuffContext.Provider value={{ data }}>
      <Wrapper>
        <div className="page">
          <p className="head-box">All Your Records</p>
          <StuffContainer className="main-box" />
        </div>
      </Wrapper>
    </AllStuffContext.Provider>
  );
};
export const useAllStuffContext = () => useContext(AllStuffContext);
export default AllStuffPage;
