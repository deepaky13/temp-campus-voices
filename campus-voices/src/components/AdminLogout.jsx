import React from "react";
import { IoMdLogOut } from "react-icons/io";
import Wrapper from "../assets/wrapper/LogoutContainerLayout";
import { useAdminDashboardContext } from "../pages/AdminDashboard";

const AdminLogout = () => {
  const { logout } = useAdminDashboardContext();
  return (
    <Wrapper>
      <div className="DropDown">
        <button type="button" className="dropdown-btn extra" onClick={logout}>
          <IoMdLogOut className="img" />
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default AdminLogout;
