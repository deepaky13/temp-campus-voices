import React from "react";
import { IoMdLogOut } from "react-icons/io";
import Wrapper from "../assets/wrapper/LogoutContainerLayout";
import { useDashboardContext } from "../pages/Dashboard";

const LogoutContainer = () => {
  const { logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <div className="DropDown">
        <button
          type="button"
          className="dropdown-btn extra"
          onClick={logoutUser}
        >
          <IoMdLogOut className="img" /> logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
