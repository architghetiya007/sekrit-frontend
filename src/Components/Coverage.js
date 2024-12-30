import React, { useEffect } from "react";
import "./Coverage.css"; // Import the styles
import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Scanicon from "../Images/scan.svg";
import { coverage } from "../services/userService";
import Header from "../Common/Header/Header";

const Coverage = () => {
  const [data, setData] = useState(null); // To store API response
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

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
          <Header />
         
        </div>
      </div>
      <div className="main-banner">
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
    </>
  );
};

export default Coverage;
