import React from "react";
import "./Secretscanningrules.css"; // Import the styles
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
import overviewicon from "../Images/overview.svg";
import Riskicon from "../Images/risk.svg"
import Coverageicon from "../Images/coverage.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoSearch } from "react-icons/io5";
import Openicon from '../Images/open-icon.svg';
import Closeicon from '../Images/close-icon.svg';
import Editicon from '../Images/edit-icon.svg';
import Edit from '../Images/edit.svg';
import deleteicon from '../Images/delete.svg';

const Secretscan = () => {
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
              <Offcanvas.Title className="title">Settings</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navbar bg="dark" variant="dark" expand="lg">
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#overview" className="d-flex align-items-center"> 
                      <img src={overviewicon} alt="overview-icon svg"></img>
                      Org Structure</Nav.Link>
                    <Nav.Link href="#risk" className="d-flex align-items-center">
                      <img src={Riskicon} alt="risk-icon svg"></img>
                      ?????</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
              </Navbar>  
              <Navbar bg="dark" variant="dark" expand="lg">
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <div className="title"><h2>Security</h2></div>
                    <Nav.Link href="#overview" className="d-flex align-items-center active"> 
                      <img src={overviewicon} alt="overview-icon svg"></img>
                      Secret Scanning</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
              </Navbar> 
            </Offcanvas.Body>
          </Offcanvas>
          <div className="logo">
            <img src={Logo} alt="logo"></img>
          </div>  
          <div className="search-bar">
            <button type="submit" ><IoSearch/></button>
            <input type="search" placeholder="| Type to Seach"></input>
          </div>
        </div>
        <div className="nav-bottom">
          <Navbar bg="dark" variant="dark" expand="lg">
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="d-flex align-items-center active"> 
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
            <div className="banner-title">
                <h3>Secret Scanning Rules</h3>
            </div>
            <div className="secret-scan-table"> 
                <div className="secret-scan-head">
                    <div className="head-title">
                        <p>8 Patterns</p>
                    </div>
                    <button type="button">Filter</button>
                </div>
                <div className="secret-scan-body">
                    <div className="secret-scan-details">
                        <input type="checkbox"></input>
                        <h5>Secret-regex-name</h5>
                        <p>Unpublished</p>
                    </div>
                    <div className="secret-crud-details">
                        <button type="button">
                            <img src={Edit}></img>
                        </button>
                        <button>
                          <img src={deleteicon}></img>
                        </button>
                    </div>
                </div>
                <div className="secret-scan-body">
                    <div className="secret-scan-details">
                        <input type="checkbox"></input>
                        <h5>Secret-regex-name2</h5>
                        <p>Unpublished</p>
                    </div>
                    <div className="secret-crud-details">
                        <button type="button">
                            <img src={Edit}></img>
                        </button>
                        <button>
                          <img src={deleteicon}></img>
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

export default Secretscan;
