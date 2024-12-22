import React from "react";
import "./Home.css"; // Import the styles
import Logo from "../Images/logo.png";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Toggle from "./../Images/nav-toggler.svg";
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';
import homeicon from "../Images/home-icon.svg";
import repositoriesicon from "../Images/reposiitories-icon.svg";
import usericon from "../Images/user-icon.svg";
import organizationicon from "../Images/organization-icon.svg";
import { Table } from "react-bootstrap";
import overviewicon from "../Images/overview.svg";
import Riskicon from "../Images/risk.svg"
import Coverageicon from "../Images/coverage.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Home = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(false);
    
  return (
    <>
    <div className="main">
      <div className="home-container">
        <div className="nav-top">
          <Button variant="primary" onClick={handleShow} className="toggle-icon">
            <img src={Toggle} alt="nav-toggle icon"/>
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
                    <Nav.Link href="#overview" className="d-flex align-items-center"> 
                      <img src={overviewicon} alt="overview-icon svg"></img>
                      Overview</Nav.Link>
                    <Nav.Link href="#risk" className="d-flex align-items-center">
                      <img src={Riskicon} alt="risk-icon svg"></img>
                      Risk</Nav.Link>
                    <Nav.Link href="#coverage" className="d-flex align-items-center">
                      <img src={Coverageicon} alt="coverage-icon svg"></img>
                      Coverage</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
              </Navbar>
              <div className="dropdown-container">
                <div className="dropdown-title">
                  <h4>Alerts</h4>
                </div>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                </DropdownButton>
              </div>  
            </Offcanvas.Body>
          </Offcanvas>
          <div className="logo">
            <img src={Logo} alt="logo"></img>
          </div>  
        </div>
        <div className="nav-bottom">
          <Navbar bg="dark" variant="dark" expand="lg">
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="d-flex align-items-center"> 
                  <img src={homeicon} alt="home-icon svg"></img>
                  Home</Nav.Link>
                <Nav.Link href="#repositories" className="d-flex align-items-center">
                  <img src={repositoriesicon} alt="home-icon svg"></img>
                  Repositories</Nav.Link>
                <Nav.Link href="#users" className="d-flex align-items-center">
                  <img src={usericon} alt="home-icon svg"></img>
                  Users</Nav.Link>
                <Nav.Link href="#organization" className="d-flex align-items-center">
                  <img src={organizationicon} alt="home-icon svg"></img>
                  Organization</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          
          </Navbar>
        </div>
        <div className="banner">
            <div className="main-title">
              <p>Overview</p>
            </div>
            <div className="details">
              <p>Trends and insights across your organization.</p>
            </div>
            <div className="banner-nav">
              <Navbar bg="dark" variant="dark" expand="lg">
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#detected" className="d-flex align-items-center">Detected</Nav.Link>
                      <Nav.Link href="#prevented" className="d-flex align-items-center">Prevented</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
              </Navbar>
            </div>
            <div className="graph">
              Graph is here
            </div>
            <div className="analysis">
                <div className="section-title">
                  <h2>Impact analysis</h2>
                </div>
                <div className="analysis-details">
                  <p>Top 10 repositories and vulnerabilities that pose the biggest impact on your application security.</p>
                </div>
                <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Repositories</th>
                          <th>Open alerts</th>
                          <th>Critical</th>
                          <th>High</th>
                          <th>Medium</th>
                          <th>Low</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>temp1</td>
                          <td>511</td>
                          <td>48</td>
                          <td>237</td>
                          <td>153</td>
                          <td>53</td> 
                        </tr>
                        <tr>
                          <td>temp2</td>
                          <td>425</td>
                          <td>6</td>
                          <td>116</td>
                          <td>201</td>
                          <td>102</td>
                        </tr>
                        <tr>
                          <td>temp3</td>
                          <td>425</td>
                          <td>6</td>
                          <td>116</td>
                          <td>201</td>
                          <td>102</td>
                        </tr>
                        <tr>
                          <td>temp3</td>
                          <td>420</td>
                          <td>7</td>
                          <td>112</td>
                          <td>199</td>
                          <td>102</td>
                        </tr>
                      </tbody>
                </Table>
            </div>
        </div>    
      </div>
    </div>
    </>
  );
};

export default Home;