import Logo from "../../Images/logo.png";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Toggle from "./../../Images/nav-toggler.svg";
import { Navbar, Nav } from "react-bootstrap";
import homeicon from "../../Images/home-icon.svg";
import repositoriesicon from "../../Images/reposiitories-icon.svg";
import usericon from "../../Images/user-icon.svg";
import Keyicon from "../../Images/Key.svg";
import organizationicon from "../../Images/organization-icon.svg";
import overviewicon from "../../Images/overview.svg";
import Riskicon from "../../Images/risk.svg";
import Coverageicon from "../../Images/coverage.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
const Header = ({ selectedMenu, onClickItem, secretscanEdit = false }) => {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(!show);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="nav-top">
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ height: "30px", width: "30px" }}
          className="toggle-icon"
        >
          <img
            style={{ marginTop: "10px", marginLeft: "6px" }}
            src={Toggle}
            alt="nav-toggle icon"
          />
        </Button>
        {secretscanEdit ? (
          <Offcanvas show={show}>
            <Offcanvas.Header>
              <Offcanvas.Title className="title">Settings</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navbar bg="dark" variant="dark" expand="lg">
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link
                      href="#overview"
                      className="d-flex align-items-center"
                    >
                      <img src={overviewicon} alt="overview-icon svg"></img>
                      Org Structure
                    </Nav.Link>
                    <Nav.Link
                      href="#risk"
                      className="d-flex align-items-center"
                    >
                      <img src={Riskicon} alt="risk-icon svg"></img>
                      ?????
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Navbar bg="dark" variant="dark" expand="lg">
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <div className="title">
                      <h2>Security</h2>
                    </div>
                    <Nav.Link
                      href="#overview"
                      className="d-flex align-items-center active"
                    >
                      <img src={overviewicon} alt="overview-icon svg"></img>
                      Secret Scanning
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Offcanvas.Body>
          </Offcanvas>
        ) : (
          <Offcanvas show={show}>
            <Offcanvas.Header>
              <Offcanvas.Title>Security</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navbar bg="dark" variant="dark" expand="lg">
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link
                      as={Link}
                      to="/home"
                      className={`d-flex align-items-center ${
                        location.pathname.includes("home") && "active"
                      }`}
                    >
                      <img src={overviewicon} alt="overview-icon svg"></img>
                      Overview
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/custom-rules"
                      href="#risk"
                      className={`d-flex align-items-center ${
                        location.pathname.includes("custom-rules") && "active"
                      }`}
                    >
                      <img src={Riskicon} alt="risk-icon svg"></img>
                      Risk
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/coverage"
                      className={`d-flex align-items-center ${
                        location.pathname.includes("coverage") && "active"
                      }`}
                    >
                      <img src={Coverageicon} alt="coverage-icon svg"></img>
                      Coverage
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <div
                style={{
                  position: "relative",
                  width: "200px",
                  margin: "20px auto",
                  // border: "1px solid #ddd",
                  borderRadius: "5px",
                  padding: "10px",
                  // backgroundColor: "#f9f9f9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={toggleDropdown}
                >
                  <h4 style={{ margin: 0, fontSize: "16px", color: "#333" }}>
                    <img
                      src={Keyicon}
                      style={{ marginRight: "10px" }}
                      alt="home-icon svg"
                    ></img>
                    Secrets Scanning
                  </h4>
                  <span
                    style={{
                      fontSize: "16px",
                      display: "inline-block",
                      transform: isOpen ? "rotate(90deg)" : "rotate(0)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    &gt;
                  </span>
                </div>
                {isOpen && (
                  <ul
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      listStyle: "none",
                      padding: "5px 0",
                      margin: "0",
                      backgroundColor: "#fff",
                      // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      borderRadius: "5px",
                      zIndex: 10,
                    }}
                  >
                    <li
                      style={{
                        padding: "5px 5px",
                        paddingLeft: "20px",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "#333",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        if (onClickItem) {
                          onClickItem("default");
                        }
                      }}
                    >
                      <a
                        href="#/action-1"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "block",
                        }}
                      >
                        Default Pattern
                      </a>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          backgroundColor: "#82ca9d",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        3
                      </span>
                    </li>
                    <li
                      style={{
                        padding: "5px 5px",
                        paddingLeft: "20px",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "#333",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        if (onClickItem) {
                          onClickItem("custom");
                        }
                      }}
                    >
                      <a
                        href="#/action-2"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "block",
                        }}
                      >
                        Custom Pattern
                      </a>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          backgroundColor: "#82ca9d",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        3
                      </span>
                    </li>
                  </ul>
                )}
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        )}

        <div className="logo">
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="search-bar">
          <button type="submit">
            <IoSearch />
          </button>
          <input type="search" placeholder="| Type to Seach"></input>
        </div>
        <div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "#D9D9D9",
            borderRadius: "50%",
            marginLeft: "20px",
          }}
        ></div>
      </div>
      <div className="nav-bottom">
        <Navbar bg="dark" variant="dark" expand="lg">
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to={"/home"}
                className="d-flex align-items-center"
              >
                <img src={homeicon} alt="home-icon svg"></img>
                Home
              </Nav.Link>
              <Nav.Link
                href="#repositories"
                className="d-flex align-items-center"
              >
                <img src={repositoriesicon} alt="home-icon svg"></img>
                Repositories<span>1.5k</span>
              </Nav.Link>
              <Nav.Link href="#users" className="d-flex align-items-center">
                <img src={usericon} alt="home-icon svg"></img>
                Users
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/secret-scan"}
                className="d-flex align-items-center"
              >
                <img src={organizationicon} alt="home-icon svg"></img>
                Organization
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="banner">
        <Offcanvas>
          <Offcanvas.Body>
            <div className="dropdown">
              <DropdownButton
                id="dropdown-basic-button"
                title="Dropdown button"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              </DropdownButton>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Header;
