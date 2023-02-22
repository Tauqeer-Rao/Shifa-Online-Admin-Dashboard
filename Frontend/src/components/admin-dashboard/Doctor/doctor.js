import React from "react";
import { Link } from "react-router-dom";
import {
  useGetAllPostQuery,
  useDeletePostMutation,
} from "../../../redux/feature/doctor-crud/crud";
import "../../../styles/admin-dashboard/doctor.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
const DisplayDoctor = () => {
  const Getdata = useGetAllPostQuery();
  const [deletePost, delData] = useDeletePostMutation();
  const update = (post) => {
    let doc = post;
    <update data={doc} />;
  };
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="smDiv">
          <Sidebar />
          <div className="mainContainer">
            <div className="addlink">
              <Link to="/add">Add Doctor</Link>
            </div>
            <div className="data">
              <table className="styled-table">
                <thread>
                  <tr>
                    <th style={{ textAlign: "center" }}>No.</th>
                    <th style={{ textAlign: "center" }}>Name</th>
                    <th style={{ textAlign: "center" }}>Email</th>
                    <th style={{ textAlign: "center" }}>Password</th>
                    <th style={{ textAlign: "center" }}>Specialization</th>
                    <th style={{ textAlign: "center" }}>Experience</th>
                    <th style={{ textAlign: "center" }}>Category</th>
                    <th style={{ textAlign: "center" }}>Profile Pic</th>
                    <th style={{ textAlign: "center" }}>
                      <td>Action</td>
                    </th>
                  </tr>
                  <tbody>
                    {Getdata.data?.map((post, index) => {
                      return (
                        <>
                          {Getdata.length === 0 ? (
                            <div className="loading">
                              <div className="spinner"></div>
                            </div>
                          ) : (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{post.doctor_name} </td>
                              <td>{post.email} </td>
                              <td>{post.password}</td>
                              <td>{post.specialization}</td>
                              <td>{post.experience} </td>
                              <td>{post.categories}</td>
                              <td>
                                {<img className="pic" src={post.profile_pic} />}
                              </td>
                              <td>
                                <Link
                                  className="custom-link"
                                  key={post.doctor_id}
                                  to={`/doctor/update/${post.doctor_id}`}
                                >
                                  Update
                                </Link>
                              </td>
                              <td>
                                <Link
                                  key={post.doctor_id}
                                  to={`/doctor/delete/${post.doctor_id}`}
                                >
                                  Delete
                                </Link>
                              </td>
                            </tr>
                          )}
                        </>
                      );
                    })}
                  </tbody>
                </thread>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayDoctor;
