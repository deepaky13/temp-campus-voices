import React from "react";
import Wrapper from "../assets/wrapper/HomePageLayout";
import { Link } from "react-router-dom";
import { HomepageLogo } from "../components";

const HomePage = () => {
  return (
    <Wrapper>
      <div className="container-grid">
        <HomepageLogo />
        <h1>Students feedback survey</h1>
        <h3>
          we would love to know what would you think about our college through
          Campus Voices
        </h3>
        <Link to="/Login" className="button">
          Let's Start
        </Link>
      </div>
    </Wrapper>
  );
};

export default HomePage;
