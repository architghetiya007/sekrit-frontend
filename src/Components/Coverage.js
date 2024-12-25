import React, { useEffect } from "react";
import "./Coverage.css"; // Import the styles
import Logo from "../Images/logo.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Toggle from "./../Images/nav-toggler.svg";
import { Navbar, Nav } from "react-bootstrap";
import homeicon from "../Images/home-icon.svg";
import repositoriesicon from "../Images/reposiitories-icon.svg";
import usericon from "../Images/user-icon.svg";
import organizationicon from "../Images/organization-icon.svg";
import overviewicon from "../Images/overview.svg";
import Riskicon from "../Images/risk.svg";
import Coverageicon from "../Images/coverage.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
import { IoSearch } from "react-icons/io5";
import Scanicon from "../Images/scan.svg";
import { coverage } from "../services/userService";
import { Link } from "react-router-dom";
import Keyicon from "../Images/Key.svg";

const Coverage = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);
  const [data, setData] = useState(null); // To store API response
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const fetchCoverage = async () => {
    try {
      const response = await coverage();
      setData(response);
      setLoading(false);
    } catch (err) {
      setError("Failed to load coverage data");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCoverage();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="main">
        <div className="home-container">
          <div className="nav-top">
            <Button
              variant="primary"
              onClick={handleShow}
              className="toggle-icon">
              <img src={Toggle} alt="nav-toggle icon" />
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
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
                        className="d-flex align-items-center">
                        <img src={overviewicon} alt="overview-icon svg"></img>
                        Overview
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        to="/custom-rules"
                        href="#risk"
                        className="d-flex align-items-center">
                        <img src={Riskicon} alt="risk-icon svg"></img>
                        Risk
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        to="/coverage"
                        className="d-flex align-items-center">
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
                  }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={toggleDropdown}>
                    <h4 style={{ margin: 0, fontSize: "16px", color: "#333" }}>
                      <img
                        src={Keyicon}
                        style={{ marginRight: "10px" }}
                        alt="home-icon svg"></img>
                      Secrets Scanning
                    </h4>
                    <span
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        transform: isOpen ? "rotate(90deg)" : "rotate(0)",
                        transition: "transform 0.3s ease",
                      }}>
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
                      }}>
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
                        }}>
                        <a
                          href="#/action-1"
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            display: "block",
                          }}>
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
                          }}>
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
                        }}>
                        <a
                          href="#/action-2"
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            display: "block",
                          }}>
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
                          }}>
                          3
                        </span>
                      </li>
                    </ul>
                  )}
                </div>
              </Offcanvas.Body>
            </Offcanvas>
            <div className="logo">
              <img src={Logo} alt="logo"></img>
            </div>
            <div className="search-bar">
              <button type="submit">
                <IoSearch />
              </button>
              <input type="search" placeholder="| Type to Seach"></input>
            </div>
          </div>
          <div className="nav-bottom">
            <Navbar bg="dark" variant="dark" expand="lg">
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    href="#home"
                    className="d-flex align-items-center active">
                    <img src={homeicon} alt="home-icon svg"></img>
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="#repositories"
                    className="d-flex align-items-center">
                    <img src={repositoriesicon} alt="home-icon svg"></img>
                    Repositories
                  </Nav.Link>
                  <Nav.Link href="#users" className="d-flex align-items-center">
                    <img src={usericon} alt="home-icon svg"></img>
                    Users
                  </Nav.Link>
                  <Nav.Link
                    href="#organization"
                    className="d-flex align-items-center">
                    <img src={organizationicon} alt="home-icon svg"></img>
                    Organization
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="banner ">
            <div className="main-title">
              <h4>Security Coverage</h4>
            </div>
            <div className="details">
              <p>Security tool adoption across your organization.</p>
            </div>
            <div className="box-container">
              <div className="border-box">
                <div className="box-title">
                  <h4>Repositories</h4>
                </div>
                <div className="box-details">
                  <p>
                    <span>{data?.repositories?.percent_enabled}%</span> of
                    repositories have <strong>sekrit</strong> enabled
                  </p>
                </div>
                <div className="progressbar">
                  <ProgressBar variant="success" now={40} />
                </div>
                <div className="progress-details">
                  <p>
                    <span>{data?.repositories?.enabled}</span> enabled
                  </p>
                  <p>
                    <span>{data?.repositories?.not_enabled}</span> not enabled
                  </p>
                </div>
              </div>
              <div className="border-box">
                <div className="box-title">
                  <h4>
                    Secret Scanning<img src={Scanicon} alt="icon"></img>
                  </h4>
                </div>
                <div className="box-details">
                  <p>
                    <span>{data?.secret_scannin?.percent_protected}%</span> of
                    your commits are protected
                  </p>
                </div>
                <div className="progressbar">
                  <ProgressBar variant="success" now={40} />
                </div>
                <div className="progress-details">
                  <p>
                    <span>{data?.secret_scannin?.active_users}</span> active
                    users
                  </p>
                  <p>
                    <span>{data?.secret_scannin?.inactive_users}</span> inactive
                    users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coverage;
