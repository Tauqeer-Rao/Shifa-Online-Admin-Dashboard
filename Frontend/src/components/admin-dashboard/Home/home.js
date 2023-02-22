import React from "react";
import DataVisualize from "../data-viusalize/DataVisaulize";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "../../../styles/admin-dashboard/home.css";
export default function MainPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="smDiv">
        <Sidebar />
        <div className="mainContainer">
          <div className="datavisualize">
            <DataVisualize />
          </div>
        </div>
      </div>
    </div>
  );
}
