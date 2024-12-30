import React, { useEffect } from "react";
import "./Home.css"; // Import the styles
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { FaArrowUpLong } from "react-icons/fa6";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { tableData } from "../services/userService";
import Header from "../Common/Header/Header";
const graphData = [
  { date: "Oct 18", low: 2000, medium: 4000, high: 6000, critical: 8000 },
  { date: "Oct 22", low: 2200, medium: 4200, high: 6200, critical: 8200 },
  { date: "Oct 26", low: 2400, medium: 4400, high: 6400, critical: 8400 },
  { date: "Oct 30", low: 2600, medium: 4600, high: 6600, critical: 8600 },
  { date: "Nov 3", low: 2800, medium: 4800, high: 6800, critical: 8800 },
  { date: "Nov 7", low: 3000, medium: 5000, high: 7000, critical: 9000 },
  { date: "Nov 12", low: 3200, medium: 5200, high: 7200, critical: 9200 },
  { date: "Nov 17", low: 3400, medium: 5400, high: 7400, critical: 9400 },
];
const Home = () => {
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

  return (
    <div className="main-body">
      <div className="main">
        <div className="home-container">
          <Header />
          
        </div>
      </div>
      <div className="main-banner">
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
                      className="d-flex align-items-center"
                    >
                      Detected
                    </Nav.Link>
                    <Nav.Link
                      href="#prevented"
                      className="d-flex align-items-center"
                    >
                      Prevented
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div className="graph">
              <div className="graph-title">
                <p>Open alerts over time</p>
              </div>
              <div className="graph-details">
                <p className="graph-count">18,956</p>
                <p className="graph-percentage">
                  <FaArrowUpLong />
                  2.8%
                </p>
                <p className="graph-date">as of Nov 17,2024</p>
              </div>
              <ResponsiveContainer
                width="100%"
                height={300}
                style={{ marginTop: "50px" }}
              >
                <AreaChart data={graphData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  {/* <Legend /> */}
                  <Area
                    type="monotone"
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
  );
};

export default Home;
