import React, { useEffect } from "react";
import "./Customrules.css"; // Import the styles
import { useState } from "react";
import { IoCheckmark, IoSearch } from "react-icons/io5";
import Openicon from "../Images/open-icon.svg";
import Closeicon from "../Images/close-icon.svg";
import Editicon from "../Images/edit-icon.svg";
import { riskData } from "../services/userService";
import Header from "../Common/Header/Header";

const Customrules = () => {
  const [data, setData] = useState(null); // To store API response
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedMenu, setSelectedMenu] = useState("default");

  const fetchData = async () => {
    try {
      const response = await riskData();
      setData(response);
      setLoading(false);
    } catch (err) {
      setError("Failed to load coverage data");
      setLoading(false);
    }
  };
  const onClickItem = (val) => {
    setSelectedMenu(val);
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
          <Header selectedMenu={selectedMenu} onClickItem={onClickItem} />
          <div className="banner">
            <div className="banner-top-details">
              <div className="banner-title">Secret scanning alerts</div>
              <button type="button">Goto Rules</button>
            </div>
            <div className="banner-mid-details">
              <div className="search-bar">
                <button type="button">
                  <IoSearch />
                </button>
                <input type="text"></input>
              </div>
              <div className="button" style={{ display: "flex" }}>
                <button
                  type="button"
                  className="btn-default"
                  style={{ borderRadius: "8px" }}
                >
                  Repo
                </button>
                <button
                  type="text"
                  className="btn-default"
                  style={{
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    {selectedMenu === "default" && (
                      <IoCheckmark style={{ fontSize: "18px" }} />
                    )}
                    Default<span>81</span>
                  </div>
                </button>
                <button
                  type="text"
                  className="btn-custom"
                  style={{
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    {selectedMenu !== "default" && (
                      <IoCheckmark style={{ fontSize: "18px" }} />
                    )}
                    Custom<span>21</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="banner-contain">
              <div className="table-head">
                <div className="table-open-details">
                  <p>
                    <img src={Openicon}></img>
                    {data.open_count} Open
                  </p>
                </div>
                <div className="table-close-details">
                  <p>
                    <img src={Closeicon}></img>
                    {data.closed_count} Closed
                  </p>
                </div>
                <div className="filter">
                  <p>Filters</p>
                </div>
              </div>
              {data.open_alerts.map((item, index) => (
                <div className="table-body" key={index}>
                  <div className="table-body-left">
                    <div className="table-top">
                      <div className="icon">
                        <img src={Openicon}></img>
                      </div>
                      <div className="table-top-title">
                        <p>{item?.alert_name}</p>
                      </div>
                      <div className="table-active">
                        <p>{item?.state}</p>
                      </div>
                      <div className="table-reponame">
                        <p>
                          <span>{item?.source}</span> - {item?.source}
                        </p>
                      </div>
                    </div>
                    <div className="table-bottom">
                      <div className="repo-link">
                        <p>{item?.date}</p>
                      </div>
                      <div className="repo-link">
                        <p>| {item?.path}</p>
                      </div>
                      <div className="edit-button"></div>
                    </div>
                  </div>
                  <div className="table-body-right">
                    <button type="button" className="edit-button">
                      <img src={Editicon}></img>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customrules;
