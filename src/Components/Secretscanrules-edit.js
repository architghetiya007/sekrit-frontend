import React from "react";
import "./Secretscanrules-edit.css"; // Import the styles
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
import { IoSearch } from "react-icons/io5";
import Form from "react-bootstrap/Form";
import Keyicon from "../Images/Key.svg";
import { Link } from "react-router-dom";
import Coverageicon from "../Images/coverage.svg";
import Header from "../Common/Header/Header";

const Secretscanedit = () => {
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleClose = () => setShow(!show);

  return (
    <>
      <div className="main">
        <div className="home-container">
          <Header secretscanEdit={true} />
          <div className="banner">
            <div className="banner-title">
              <h4>Secret Scanning Rules / Edit</h4>
            </div>
            <Form>
              <Form.Group
                className="mb-3 name"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Pattern Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3 expression"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Secret regular expression *</Form.Label>
                <Form.Control type="text" placeholder="example_[A-Za-z]{40}" />
              </Form.Group>
              <Form.Group
                className="mb-3 matches"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Test String- 0 matches</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Provide a sample test string to make sure your configuration matches the patterns you except."
                />
              </Form.Group>
              <Button variant="primary grey-btn">Save</Button>
              <Button variant="primary green-btn">Publish</Button>
              <div className="bottom">
                <div className="discard-detail">
                  <p>Discard this pattern</p>
                </div>
                <Button type="btn">Discard</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secretscanedit;
