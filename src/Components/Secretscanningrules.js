import React from "react";
import "./Secretscanningrules.css"; // Import the styles
import Edit from "../Images/edit.svg";
import deleteicon from "../Images/delete.svg";
import Dropdown from "react-bootstrap/Dropdown";
import Header from "../Common/Header/Header";

const Secretscan = () => {
  return (
    <>
      <div className="main">
        <div className="home-container">
          <Header secretscanEdit={true} />
          <div className="banner">
            <div className="banner-title">
              <h3>Secret Scanning Rules</h3>
            </div>
            <div className="secret-scan-table">
              <div className="secret-scan-head">
                <div className="head-title">
                  <p>8 Patterns</p>
                </div>
                {/* <button type="button">Filter</button> */}
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
      </div>
    </>
  );
};

export default Secretscan;
