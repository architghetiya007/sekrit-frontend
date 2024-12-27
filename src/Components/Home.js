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
import { tableData, dataOfgraph } from "../services/userService";
import Header from "../Common/Header/Header";

const Home = () => {
  const [data, setData] = useState(null); // To store API response
  const [graphData, setgraphData] = useState(null); // To store API response
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchData = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const [fetchTableData, graphData] = await Promise.all([
        tableData(),
        dataOfgraph(),
      ]);

      setData(fetchTableData); // Set the data from the first API
      setgraphData(graphData); // Set the data from the second API
    } catch (err) {
      setError("Failed to load data"); // Handle errors
    } finally {
      setLoading(false); // Set loading to false after both APIs complete
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
          <Header />
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
              <div className="graph-title">
                <p>Open alerts over time</p>
              </div>
              <div className="graph-details">
                <p className="graph-count">{graphData?.total_alerts}</p>
                <p className="graph-percentage">
                  <FaArrowUpLong />
                  {/* <BiDownArrowAlt /> */}
                  {graphData?.compared_to_last_month?.movement_value}
                </p>
                <p className="graph-date">as of Nov 17,2024</p>
              </div>
              {graphData?.alerts_over_time_count?.length > 0 && (
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  style={{ marginTop: "50px" }}>
                  <AreaChart data={graphData?.alerts_over_time_count ?? []}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Area
                      type="monotone"
                      dataKey="value_low"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                    <Area
                      type="monotone"
                      dataKey="value_medium"
                      stackId="1"
                      stroke="#ffc658"
                      fill="#ffc658"
                    />
                    <Area
                      type="monotone"
                      dataKey="value_high"
                      stackId="1"
                      stroke="#ff7300"
                      fill="#ff7300"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
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
