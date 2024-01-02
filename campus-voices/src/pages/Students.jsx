import React from "react";
import Wrapper from "../assets/wrapper/DashboardPageLayout";
import sideView from "../assets/images/College Images/images06.png";
import { About, Footer } from "../components";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const DashboardStudents = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="layer1">
          <div className="compose">
            <h3
              style={{ fontWeight: "600", fontSize: "35px" }}
              className="topic"
            >
              <span style={{ color: "var(--secondary-101)" }}>Campus </span>
              Voices
              <br></br>
              <p className="text" style={{ fontSize: "20px" }}>
                MIT Chatter Box
              </p>
            </h3>

            <p className="para">
              It's a platform provided for students where they can easily share
              their Opinions ,suggestions and concern regarding different of
              aspect of their academics journey. This might include feedback
              about courses,instructors,facilities and overall campus
              experiences.
            </p>
            <Link to="/dashboard-student/feeds" className="btn btn-compose">
              <IoArrowRedoCircleSharp className="icons" />
              compose
            </Link>
          </div>
          <div>
            <img src={sideView} alt="" className="sideView" />
          </div>
        </div>
        <div className="adjust">
          <About />
        </div>
      </div>
    </Wrapper>
  );
};

export default DashboardStudents;
