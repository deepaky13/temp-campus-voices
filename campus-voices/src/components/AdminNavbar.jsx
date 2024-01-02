import { Container, Nav, Navbar } from "react-bootstrap";
import AdminLogout from "./AdminLogout";
import { useAdminDashboardContext } from "../pages/AdminDashboard";
import { BsPersonVcardFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Wrapper from "../assets/wrapper/Navbar";

function AdminNavbar() {
  const { user, logout } = useAdminDashboardContext();
  return (
    <Wrapper>
      <Navbar expand="xl" className="bg-body-tertiary ">
        <Container fluid className="navbar-main">
          <Navbar.Brand href="/" className="head-font head-color">
            <span style={{ color: "var(--secondary-101)" }}> Campus</span>{" "}
            Voices
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="id" id="navbarScroll">
            <Nav
              className="margin-center my-0 my-lg-12  links"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link
                href="/dashboard-admin"
                className="medium-font white-font padding-center"
              >
                <MdTipsAndUpdates className="icon" />
                Updates
              </Nav.Link>
              <div className="border-right"></div>
              <Nav.Link
                href="/dashboard-admin/stats"
                className="medium-font white-font padding-center"
              >
                <IoStatsChartSharp className="icon" /> Stats
              </Nav.Link>
              <div className="border-right"></div>

              <Nav.Link
                href="/dashboard-admin/about"
                className="medium-font white-font padding-center "
                id="/about"
                style={{ color: "white" }}
              >
                <BsPersonVcardFill className="icon" />
                About
              </Nav.Link>
            </Nav>

            <Nav className="good" style={{ color: "white" }}>
              <FaUserCircle className="user-icon" />
              <p className="name">Admin</p>
            </Nav>
            <AdminLogout />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
}

export default AdminNavbar;
