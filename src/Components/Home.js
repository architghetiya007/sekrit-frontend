import React, { useEffect } from "react";
import "./Home.css"; // Import the styles
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
import { Table } from "react-bootstrap";
import overviewicon from "../Images/overview.svg";
import Riskicon from "../Images/risk.svg";
import Coverageicon from "../Images/coverage.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { tableData } from "../services/userService";
const Home = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(!show);
  const [data, setData] = useState(null); // To store API response
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const fetchTableData = async () => {
    try {
      const response = await tableData();
      setData(response);
      setLoading(false);
    } catch (err) {
      setError("Failed to load coverage data");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTableData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const dataGraph = [
    { date: "Oct 18", low: 2000, medium: 4000, high: 6000, critical: 8000 },
    { date: "Oct 22", low: 2200, medium: 4200, high: 6200, critical: 8200 },
    { date: "Oct 26", low: 2400, medium: 4400, high: 6400, critical: 8400 },
    { date: "Oct 30", low: 2600, medium: 4600, high: 6600, critical: 8600 },
    { date: "Nov 3", low: 2800, medium: 4800, high: 6800, critical: 8800 },
    { date: "Nov 7", low: 3000, medium: 5000, high: 7000, critical: 9000 },
    { date: "Nov 12", low: 3200, medium: 5200, high: 7200, critical: 9200 },
    { date: "Nov 17", low: 3400, medium: 5400, high: 7400, critical: 9400 },
  ];

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
          </div>
          <div className="nav-bottom">
            <Navbar bg="dark" variant="dark" expand="lg">
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home" className="d-flex align-items-center">
                    <img src={homeicon} alt="home-icon svg"></img>
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="#repositories"
                    className="d-flex align-items-center">
                    <img src={repositoriesicon} alt="home-icon svg"></img>
                    Repositories<span>1.5k</span>
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
            <Offcanvas>
              <Offcanvas.Body>
                <div className="dropdown">
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
                    <Nav.Link
                      href="#detected"
                      className="d-flex align-items-center">
                      Detected
                    </Nav.Link>
                    <Nav.Link
                      href="#prevented"
                      className="d-flex align-items-center">
                      Prevented
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div className="graph">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={dataGraph}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="linear"
                    dataKey="low"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <Area
                    type="monotone"
                    dataKey="medium"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                  <Area
                    type="monotone"
                    dataKey="high"
                    stackId="1"
                    stroke="#ff7300"
                    fill="#ff7300"
                  />
                  <Area
                    type="monotone"
                    dataKey="critical"
                    stackId="1"
                    stroke="#d32f2f"
                    fill="#d32f2f"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="analysis">
              <div className="section-title">
                <h2>Impact analysis</h2>
              </div>
              <div className="analysis-details">
                <p>
                  Top 10 repositories and vulnerabilities that pose the biggest
                  impact on your application security.
                </p>
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
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.repository_name}</td>
                      <td>{item.open_alerts}</td>
                      <td>{item.critical}</td>
                      <td>{item.high}</td>
                      <td>{item.medium}</td>
                      <td>{item.low}</td>
                    </tr>
                  ))}
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
