import React, { useEffect, useState } from "react";
import "./Secretscanningrules.css"; // Import the styles
import Edit from "../Images/edit.svg";
import deleteicon from "../Images/delete.svg";
import Header from "../Common/Header/Header";
import { IoCheckmark } from "react-icons/io5";
const Secretscan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="main">
        <div className="home-container">
          <Header secretscanEdit={true} />
          
        </div>
      </div>
      <div className="main-banner">
      <div className="banner">
            <div className="banner-title">
              <h3>Secret Scanning Rules</h3>
            </div>
            <div className="secret-scan-table">
              <div className="secret-scan-head">
                <div className="head-title">
                  <p>8 Patterns</p>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "200px",
                    borderRadius: "5px",
                    padding: "10px",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={toggleDropdown}>
                    <h4 style={{ margin: 0, fontSize: "16px", color: "#333" }}>
                      Filter
                    </h4>
                    <span
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        transform: isOpen ? "rotate(90deg)" : "rotate(0)",
                        transition: "transform 0.3s ease",
                        paddingLeft: "10px",
                      }}>
                      &gt;
                    </span>
                  </div>
                  {isOpen && (
                    <ul
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: -90,
                        right: 90,
                        listStyle: "none",
                        padding: "5px 0",
                        margin: "0",
                        backgroundColor: "#fff",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "5px",
                        zIndex: 10,
                      }}>
                      <li
                        style={{
                          padding: "5px 10px",
                        }}>
                        Filter By
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
                          href="#/action-1"
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            display: "block",
                          }}>
                          Published{" "}
                          <IoCheckmark
                            style={{ marginLeft: "10px", fontSize: "20px" }}
                          />
                        </a>
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
                          Not Published{" "}
                          <IoCheckmark
                            style={{ marginLeft: "10px", fontSize: "20px" }}
                          />
                        </a>
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
                          Newest{" "}
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="secret-scan-body">
                <div className="secret-scan-details">
                  <input type="checkbox"></input>
                  <h5>Secret-regex-name</h5>
                  <p>Unpublished</p>
                </div>
                <div className="secret-crud-details">
                  <button type="button">
                    <img src={Edit} alt="icon"></img>
                  </button>
                  <button>
                    <img src={deleteicon} alt="icon"></img>
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
                    <img src={Edit} alt="icon"></img>
                  </button>
                  <button>
                    <img src={deleteicon} alt="icon"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Secretscan;
