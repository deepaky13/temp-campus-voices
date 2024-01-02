import Wrapper from "../assets/wrapper/DashboardPageLayout";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import customFetch from "../utils/customInstances";
import NavScrollExample from "../components/NavBar";
import headLogo from "../assets/images/Logo3.png";
import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { Footer } from "../components";
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/user/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();

const Dashboard = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();

  const [showLogout, setShowLogout] = useState(false);

  const toggoleSidebar = () => {
    setShowLogout(!showLogout);
  };

  const logoutUser = async () => {
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
    <DashboardContext.Provider value={{ user, logoutUser, setShowLogout }}>
      <Wrapper>
        <img src={headLogo} className="head-logo" />
        <NavScrollExample className="navbar" />
        <div>
          <Outlet context={{ user }} />
        </div>
        <Footer />
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;
