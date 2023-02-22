import React from "react";
// import { useDeletePostMutation } from "../../../redux/feature/doctor-crud/delete";
import { useNavigate, useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "../../../styles/admin-dashboard/delete.css";
import { useDeletePostMutation } from "../../../redux/feature/doctor-crud/crud";
const Delete = () => {
  const navigateNo = useNavigate();
  const navigateYes = useNavigate();
  const [deleteData] = useDeletePostMutation();
  const { id } = useParams();
  const YesNavigateToDoctor = () => {
    deleteData(id);
    navigateYes("/doctor");
  };
  const noNavigateToDoctor = () => {
    navigateNo("/doctor");
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="smDiv">
        <Sidebar />
        <div className="mainContainer">
          <div className="body">
            <div className="delete">
              <h2 className="head2">Are you want to delete?</h2>
              <div className="body1">
                <button
                  className="del"
                  onClick={() => {
                    YesNavigateToDoctor();
                  }}
                >
                  Yes
                </button>
                <button
                  className="del"
                  onClick={() => {
                    noNavigateToDoctor();
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
