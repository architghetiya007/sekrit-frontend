import React, { useEffect } from "react";
import "./Customrules.css"; // Import the styles
import Logo from "../Images/logo.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Toggle from "./../Images/nav-toggler.svg";
import { Navbar, Nav } from "react-bootstrap";
import overviewicon from "../Images/overview.svg";
import Riskicon from "../Images/risk.svg";
import Coverageicon from "../Images/coverage.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { IoSearch } from "react-icons/io5";
import Openicon from "../Images/open-icon.svg";
import Closeicon from "../Images/close-icon.svg";
import Editicon from "../Images/edit-icon.svg";
import { Link } from "react-router-dom";
import { riskData } from "../services/userService";
import Keyicon from "../Images/Key.svg";

const Customrules = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);
  const [data, setData] = useState(null); // To store API response
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const fetchData = async () => {
    try {
      const response = await riskData();
      setData(response);
      setLoading(false);
    } catch (err) {
      setError("Failed to load coverage data");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
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
                <Offcanvas.Title>Settings</Offcanvas.Title>
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
                    as={Link}
                    to="/home"
                    className="d-flex align-items-center">
                    <img src={overviewicon} alt="overview-icon svg"></img>
                    Overview
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/custom-rules"
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
          </div>
          <div className="banner">
            <div className="banner-top-details">
              <div className="banner-title">Secret scanning alerts</div>
              <button type="button">Goto Rules</button>
            </div>
            <div className="banner-mid-details">
              <div className="search-bar">
                <button type="button">
                  <IoSearch />
                </button>
                <input type="text"></input>
              </div>
              <div className="button">
                <button type="button" className="btn-repo">
                  Repo
                </button>
                <button type="text" className="btn-default">
                  Default<span>81</span>
                </button>
                <button type="text" className="btn-custom">
                  Custom<span>21</span>
                </button>
              </div>
            </div>
            <div className="banner-contain">
              <div className="table-head">
                <div className="table-open-details">
                  <p>
                    <img src={Openicon}></img>
                    {data.open_count} Open
                  </p>
                </div>
                <div className="table-close-details">
                  <p>
                    <img src={Closeicon}></img>
                    {data.closed_count} Closed
                  </p>
                </div>
                <div className="filter">
                  <p>Filters</p>
                </div>
              </div>
              {data.open_alerts.map((item, index) => (
                <div className="table-body" key={index}>
                  <div className="table-body-left">
                    <div className="table-top">
                      <div className="icon">
                        <img src={Openicon}></img>
                      </div>
                      <div className="table-top-title">
                        <p>{item?.alert_name}</p>
                      </div>
                      <div className="table-active">
                        <p>{item?.state}</p>
                      </div>
                      <div className="table-reponame">
                        <p>
                          <span>{item?.source}</span> - {item?.source}
                        </p>
                      </div>
                    </div>
                    <div className="table-bottom">
                      <div className="repo-link">
                        <p>{item?.date}</p>
                      </div>
                      <div className="repo-link">
                        <p>| {item?.path}</p>
                      </div>
                      <div className="edit-button"></div>
                    </div>
                  </div>
                  <div className="table-body-right">
                    <button type="button" className="edit-button">
                      <img src={Editicon}></img>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customrules;
