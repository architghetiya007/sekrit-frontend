import React from "react";
import "./Customrules.css"; // Import the styles
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
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { IoSearch } from "react-icons/io5";
import Openicon from "../Images/open-icon.svg";
import Closeicon from "../Images/close-icon.svg";
import Editicon from "../Images/edit-icon.svg";

const Customrules = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);

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
                        href="#overview"
                        className="d-flex align-items-center">
                        <img src={overviewicon} alt="overview-icon svg"></img>
                        Overview
                      </Nav.Link>
                      <Nav.Link
                        href="#risk"
                        className="d-flex align-items-center">
                        <img src={Riskicon} alt="risk-icon svg"></img>
                        Risk
                      </Nav.Link>
                      <Nav.Link
                        href="#coverage"
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
          <div className="banner">
            <div className="banner-toop-details"></div>
            <div className="banner-contain">
              <div className="table-head">
                <div className="table-open-details">
                  <p>
                    <img src={Openicon} alt="icon"></img>21 Open
                  </p>
                </div>
                <div className="table-close-details">
                  <p>
                    <img src={Closeicon} alt="icon"></img>20 Closed
                  </p>
                </div>
                <div className="filter">
                  <p>Filters</p>
                </div>
              </div>
              <div className="table-body">
                <div className="table-body-left">
                  <div className="table-top">
                    <div className="icon">
                      <img src={Openicon} alt="icon"></img>
                    </div>
                    <div className="table-top-title">
                      <p>Atlassian API Token</p>
                    </div>
                    <div className="table-active">
                      <p>Active</p>
                    </div>
                    <div className="table-reponame">
                      <p>
                        <span>GITHUB</span> - reponame
                      </p>
                    </div>
                  </div>
                  <div className="table-bottom">
                    <div className="repo-link">
                      <p>2month old</p>
                    </div>
                    <div className="repo-link">
                      <p>
                        | Detected secret in reponame/path/to/file/views.py:23
                      </p>
                    </div>
                    <div className="edit-button"></div>
                  </div>
                </div>
                <div className="table-body-right">
                  <button type="button" className="edit-button">
                    <img src={Editicon} alt="icon"></img>
                  </button>
                </div>
              </div>
              <div className="table-body">
                <div className="table-body-left">
                  <div className="table-top">
                    <div className="icon">
                      <img src={Openicon} alt="icon"></img>
                    </div>
                    <div className="table-top-title">
                      <p>Atlassian API Token</p>
                    </div>
                    <div className="table-active">
                      <p>Active</p>
                    </div>
                    <div className="table-reponame">
                      <p>
                        <span>GITHUB</span> - reponame
                      </p>
                    </div>
                  </div>
                  <div className="table-bottom">
                    <div className="repo-link">
                      <p>2month old</p>
                    </div>
                    <div className="repo-link">
                      <p>
                        | Detected secret in reponame/path/to/file/views.py:23
                      </p>
                    </div>
                    <div className="edit-button"></div>
                  </div>
                </div>
                <div className="table-body-right">
                  <button type="button" className="edit-button">
                    <img src={Editicon} alt="icon"></img>
                  </button>
                </div>
              </div>
              <div className="table-body">
                <div className="table-body-left">
                  <div className="table-top">
                    <div className="icon">
                      <img src={Openicon} alt="icon"></img>
                    </div>
                    <div className="table-top-title">
                      <p>Atlassian API Token</p>
                    </div>
                    <div className="table-active">
                      <p>Active</p>
                    </div>
                    <div className="table-reponame">
                      <p>
                        <span>GITHUB</span> - reponame
                      </p>
                    </div>
                  </div>
                  <div className="table-bottom">
                    <div className="repo-link">
                      <p>2month old</p>
                    </div>
                    <div className="repo-link">
                      <p>
                        | Detected secret in reponame/path/to/file/views.py:23
                      </p>
                    </div>
                    <div className="edit-button"></div>
                  </div>
                </div>
                <div className="table-body-right">
                  <button type="button" className="edit-button">
                    <img src={Editicon} alt="icon"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customrules;
