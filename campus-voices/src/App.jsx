import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  LanderPage,
  Dashboard,
  HomePage,
  Logging,
  Register,
  ErrorPage,
  Students,
  AllStuffPage,
  StudentForm,
  About,
  AdminDashboard,
  AdminPage,
  StatsPage,
} from "./pages";

import { action as registerAction } from "./pages/RegisterPage";
import { action as loginAction } from "./pages/Logging";
import { loader as dashboardLoader } from "./pages/Dashboard";
import { action as StudentFormAction } from "./pages/StudentForm";
import { loader as AllStuffLoader } from "./pages/AllStuffPage";
import { loader as AdminDashboardLoader } from "./pages/AdminDashboard";
import { loader as AdminLoader } from "./pages/Admin";
import { action as DeleteFeedbackAction } from "./pages/DeleteFeedback";
import { loader as StatLoader } from "./pages/Stats";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LanderPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/Login",
        element: <Logging />,
        action: loginAction,
      },
      {
        path: "/Register",
        element: <Register />,
        action: registerAction,
      },

      {
        path: "Error",
        element: <ErrorPage />,
      },
      {
        path: "dashboard-student",
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <Students />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "feeds",
            element: <StudentForm />,
            action: StudentFormAction,
          },
          {
            path: "stuff",
            element: <AllStuffPage />,
            loader: AllStuffLoader,
          },
          {
            path: "stuff/:id",
            action: DeleteFeedbackAction,
          },
        ],
      },
      {
        path: "dashboard-admin",
        element: <AdminDashboard />,
        loader: AdminDashboardLoader,
        children: [
          {
            index: true,
            element: <AdminPage />,
            loader: AdminLoader,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "stats",
            element: <StatsPage />,
            loader: StatLoader,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
