import React from "react";
import img from "../assets/images/404.svg";
import Wrapper from "../assets/wrapper/ErrorPageLayout";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="errorLogo img">
        <img src={img} alt="Not-Found" />
        <h3>Oops! Page not found</h3>
        <p>We cant't seem to find the page you are looking for...</p>
        <Link to="/dashboard-student">back Home</Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
