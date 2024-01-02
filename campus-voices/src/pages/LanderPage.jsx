import React from "react";
import Wrapper from "../assets/wrapper/DashboardPageLayout";
import { Outlet } from "react-router-dom";
const LanderPage = () => {
  return (
    <Wrapper>
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default LanderPage;
