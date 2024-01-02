import React from "react";
import customFetch from "../utils/customInstances";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrapper/StatsLayout";

export const loader = async () => {
  try {
    const response = await customFetch.get("/feeds/stats");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

const Stats = () => {
  const {
    totalUsers,
    totalFeedbacks,
    feedbackCountByYear,
    feedbackCountByDepartment,
  } = useLoaderData();

  //* Getting year wise counts

  const yearCounts = {};
  if (feedbackCountByYear) {
    feedbackCountByYear.forEach((year) => {
      yearCounts[year._id] = year.count;
    });
  }

  // to get the depart count individually
  const departmentCounts = {};
  if (feedbackCountByDepartment) {
    feedbackCountByDepartment.forEach((depart) => {
      departmentCounts[depart._id] = depart.count;
    });
  }

  // Individual variables for each year count
  const countForYearI = yearCounts["1st Year"] || 0;
  const countForYearII = yearCounts["2nd Year"] || 0;
  const countForYearIII = yearCounts["3rd Year"] || 0;
  const countForYearIV = yearCounts["4th Year"] || 0;

  // Individual variables for each department count
  const countForCSE = departmentCounts["CSE"] || 0;
  const countForIT = departmentCounts["IT"] || 0;
  const countForAIML = departmentCounts["AIML"] || 0;
  const countForECE = departmentCounts["ECE"] || 0;
  const countForEEE = departmentCounts["EEE"] || 0;
  const countForMEC = departmentCounts["MEC"] || 0;
  const countForBME = departmentCounts["BME"] || 0;
  const countForAI = departmentCounts["AI"] || 0;

  return (
    <Wrapper>
      <div className="stats-heading">
        <h2>Current Stats</h2>
      </div>
      {/* grid box  */}
      <div className="stats-container-box">
        <div className="box-one stats-container">
          <p className="p">Total Users :</p>
          <p className="count"> {totalUsers ? totalUsers : 0}</p>
        </div>
        <div className="box-two stats-container">
          <p className="p">Total Feedbacks :</p>
          <p className="count">{totalFeedbacks ? totalFeedbacks : 0}</p>
        </div>
        <div className="box-three year stats-container">
          <p>First Year: {countForYearI}</p>
        </div>
        <div className="box-four  year  stats-container">
          <p>Second Year: {countForYearII}</p>
        </div>
        <div className="box-five year  stats-container">
          <p>Third Year: {countForYearIII}</p>
        </div>
        <div className="box-six  year stats-container">
          <p>Four Year: {countForYearIV}</p>
        </div>
        <div className="box-seven depart stats-container">
          <p>CSE: {countForCSE}</p>
        </div>
        <div className="box-eight depart stats-container">
          <p>IT: {countForIT}</p>
        </div>
        <div className="box-nine  depart stats-container">
          <p>ECE: {countForECE}</p>
        </div>
        <div className="box-ten depart stats-container">
          <p>EEE: {countForEEE}</p>
        </div>
        <div className="box-eleven depart stats-container">
          <p>BME: {countForBME}</p>
        </div>
        <div className="box-zero  depart stats-container">
          <p>MEC: {countForMEC}</p>
        </div>
        <div className="box-depart  depart stats-container">
          <p>AIML: {countForAIML}</p>
        </div>
        <div className="box-depart depart stats-container">
          <p>AI: {countForAI}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Stats;
