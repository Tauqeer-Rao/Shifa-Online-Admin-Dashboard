import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/admin-dashboard/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideLinks">
        <p>
          <Link className="linkS" to="/home">
            Home
          </Link>
        </p>
        <p>
          <Link className="linkS" to="/doctor">
            Doctor
          </Link>
        </p>
        <p>
          <Link className="linkS" to="/payment">
            Payment
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
