import React from "react";
import { Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import { FormRowSelect } from "../components";
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import customFetch from "../utils/customInstances";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);
import {
  DEP_STATUS,
  FEEDBACK_SORT_BY,
  STUDENT_YEAR,
} from "../../../utils/constants";
import PageBtnCintainer from "../components/PageBtnCintainer";
import Wrapper from "../assets/wrapper/AdminUpdatesLayout";

export const loader = async ({ request }) => {
  console.log(request.url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get("/user/all-feedbacks", {
      params,
    });
    console.log(data);
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Admin = () => {
  const { data, searchValues } = useLoaderData();

  const arr = data.AllFeedbacks;
  const found = arr.length;
  const totalFeedbacks = data.totalFeedbacks;
  const numOfPages = data.numOfPages;

  const { year, department, sort } = searchValues;
  const submit = useSubmit();

  return (
    <Wrapper>
      <div className="full-container">
        <div className="layer-on">
          <Form className="form">
            <h5 className="form-title">Search Feedbacks</h5>
            <div className="form-center">
              <FormRowSelect
                labelText="Year"
                name="year"
                list={["all", ...Object.values(STUDENT_YEAR)]}
                defaultValue={year}
                onChange={(e) => {
                  submit(e.currentTarget.form);
                }}
              />
              <FormRowSelect
                labelText="department"
                name="department"
                list={["all", ...Object.values(DEP_STATUS)]}
                defaultValue={department}
                onChange={(e) => {
                  submit(e.currentTarget.form);
                }}
              />
              <FormRowSelect
                labelText="sort"
                name="sort"
                list={["all", ...Object.values(FEEDBACK_SORT_BY)]}
                defaultValue={sort}
                onChange={(e) => {
                  submit(e.currentTarget.form);
                }}
              />
              <Link to="/dashboard-admin" className=" reset delete">
                Reset search value
              </Link>
              {/* Temp */}
              {/* <button className="del">submit</button> */}
            </div>
          </Form>
        </div>
        <div>
          <div className="results">
            <h5>
              TotalFeedbacks : {totalFeedbacks}
              {found.length > 1 && "s"}
            </h5>
            <h5> Feedbacks found :{found} </h5>
          </div>
          <div>
            {arr.map((items) => {
              return (
                <div key={items._id} className="feedback-container">
                  <div className="blocks">
                    <div className="header">
                      {items.year}-{items.department}
                    </div>
                    <div className="header-A">
                      <div className="date">
                        <FaCalendarAlt />
                        {day(items.createdAt).format("MMM Do, YYYY")}
                      </div>
                      <div className="content">
                        <IoArrowRedoSharp className="logo1" /> {items.comment}
                      </div>
                    </div>
                    <div className="name">{items.name}</div>
                  </div>
                </div>
              );
            })}
            {numOfPages > 1 && <PageBtnCintainer />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Admin;
