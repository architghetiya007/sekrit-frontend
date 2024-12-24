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

const Customrules = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);
  const [data, setData] = useState(null); // To store API response
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

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
                <div className="dropdown-container">
                  <div className="dropdown-title">
                    <h4>Alerts</h4>
                  </div>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                  </DropdownButton>
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
