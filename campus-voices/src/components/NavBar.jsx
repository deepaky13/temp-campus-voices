import { Container, Nav, Navbar, NavbarCollapse } from "react-bootstrap";
import { IoHome } from "react-icons/io5";
import { BsPersonVcardFill, BsFillCollectionFill } from "react-icons/bs";
import LogoutContainer from "./LogoutContainer";
import { useDashboardContext } from "../pages/Dashboard";
import { FaUserCircle, FaCaretRight } from "react-icons/fa";
import Wrapper from "../assets/wrapper/Navbar";
function NavScrollExample() {
  const { user, logoutUser } = useDashboardContext();
  const User = user.name;
  const data = User.length;
  const NewName = User.slice(0, 14);
  return (
    <Wrapper>
      <Navbar expand="xl" className="bg-body-tertiary bg ">
        <Container fluid className="navbar-main">
          <Navbar.Brand href="/" className="head-font head-color">
            <span style={{ color: "var(--secondary-101)" }}> Campus</span>{" "}
            Voices
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="id" id="navbarScroll">
            <Nav
              className="margin-center my-0 my-lg-12  links"
              style={{ maxHeight: "190px" }}
              navbarScroll
            >
              <Nav.Link
                href="/dashboard-student"
                className="medium-font white-font padding-center"
              >
                <IoHome className="icon" />
                Home
              </Nav.Link>
              <div className="border-right"></div>
              <Nav.Link
                href="/dashboard-student/stuff"
                className="medium-font white-font padding-center"
              >
                <BsFillCollectionFill className="icon" />
                Stuffs
              </Nav.Link>
              <div className="border-right"></div>

              <Nav.Link
                href="/dashboard-student/about"
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
              <p className="name">{user.name}</p>
            </Nav>
            <LogoutContainer style={{ width: "10px" }} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
}

export default NavScrollExample;
