import { Component } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaTags, FaUserCircle, FaFileDownload } from "react-icons/fa";
import { GrScheduleNew } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { PiUsersBold } from "react-icons/pi";
import GraphPage from "../GraphPage";

import "./index.css";



  render() {
    return (
      <div className="bg-container">
        <div className="navigation">
          <h1 className="nav-heading">Board.</h1>
          <div className="nav">
            <MdSpaceDashboard className="icons" />
            <p className="nav-item">Dashboard</p>
          </div>
          <div className="nav">
            <FaTags className="icons" />
            <p className="nav-item">Transactions</p>
          </div>
          <div className="nav">
            <GrScheduleNew className="icons" />
            <p className="nav-item">Schedules</p>
          </div>
          <div className="nav">
            <FaUserCircle className="icons" />
            <p className="nav-item">Users</p>
          </div>
          <div className="nav">
            <CiSettings className="icons" />
            <p className="nav-item">Settings</p>
          </div>
        </div>
        <div className="home-container">
          <h1 className="dashboard-heading">Dashboard</h1>
          <div className="cards-container">
            <div className="card-1">
              <FaFileDownload className="show" />
              <p>Total Revenues</p>
              <h1 className="amount">$2,129,430</h1>
            </div>
            <div className="card-2">
              <FaTags className="show" />
              <p>Total Transactions</p>
              <h1 className="amount">1,520</h1>
            </div>
            <div className="card-3">
              <AiFillLike className="show" />
              <p>Total Likes</p>
              <h1 className="amount">9,721</h1>
            </div>
            <div className="card-4">
              <PiUsersBold className="show" />
              <p>Total Users</p>
              <h1 className="amount">892</h1>
            </div>
          </div>
          <div>
            <GraphPage />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
