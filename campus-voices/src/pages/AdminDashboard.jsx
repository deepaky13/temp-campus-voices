import React from "react";
import { AdminNavbar, Footer } from "../components";
import headLogo from "../assets/images/Logo3.png";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import customFetch from "../utils/customInstances";
import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/user/current-user");
    return { data };
  } catch (error) {
    return redirect("/");
  }
};
const AdminDashboardContext = createContext();

const AdminDashboard = () => {
  const user = useLoaderData();

  const navigate = useNavigate();

  const logout = async () => {
    try {
      navigate("/");
      await customFetch.post("/auth/logout");
      toast.success("logout Successfull");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };
  return (
    <AdminDashboardContext.Provider value={{ user, logout }}>
      <div>
        <img src={headLogo} className="head-logo" />
        <AdminNavbar />
        <div>
          <Outlet context={{ user }} />
        </div>

        <Footer />
      </div>
    </AdminDashboardContext.Provider>
  );
};

export const useAdminDashboardContext = () => useContext(AdminDashboardContext);
export default AdminDashboard;
