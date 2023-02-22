import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "../../../styles/admin-dashboard/Mainpage.css";

export default function MainPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="smDiv">
        <Sidebar />
      </div>
    </div>
  );
}
