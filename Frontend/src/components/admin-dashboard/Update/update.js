import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  useGetAllPostByIdQuery,
  useUpdateDoctorMutation,
} from "../../../redux/feature/doctor-crud/crud";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "../../../styles/admin-dashboard/update.css";

const UpdateDoctor = (props) => {
  const navigateUpdate = useNavigate();
  const { id } = useParams();
  const resGetByID = useGetAllPostByIdQuery(id);

  const [response] = useUpdateDoctorMutation();
  const [data, setData] = useState(resGetByID.data);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const putData = async (e) => {
    setData(data);
    console.log("data in putdata update:", data);
    e.preventDefault();
    response({ id, data });
    navigateUpdate("/doctor");
  };
  console.log("data:", data);
  if (setData === "loading") {
    return <div>Loading data...</div>;
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="smDiv">
        <Sidebar />
        <div className="mainContainer">
          <div className="login">
            <h1 className="text-center">Update Doctor</h1>
            <form method="post" action="/doctor.js">
              <div className="form-group was-validated">
                <br />
                <input
                  name="doctor_name"
                  value={data?.doctor_name}
                  onChange={handleInputs}
                  className="form-control"
                  type="text"
                  placeholder="Doctor Name"
                  required
                  pattern="(^[a-zA-Z]{3,15}$)"
                />
                <br />
                <input
                  name="email"
                  value={data?.email}
                  onChange={handleInputs}
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  required
                />
                <br />

                <input
                  name="password"
                  value={data?.password}
                  onChange={handleInputs}
                  className="form-control"
                  type="password"
                  id="pwd"
                  placeholder="Password"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,14}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                <br />

                <input
                  name="specialization"
                  value={data?.specialization}
                  onChange={handleInputs}
                  className="form-control"
                  type="tel"
                  placeholder="Specialization"
                  required
                />
                <br />

                <input
                  name="experience"
                  value={data?.experience}
                  onChange={handleInputs}
                  className="form-control"
                  type=""
                  placeholder="Experience"
                  required
                  pattern="(^[0-9]$)"
                />
                <br />
                <input
                  name="categories"
                  value={data?.categories}
                  onChange={handleInputs}
                  className="form-control"
                  type="text"
                  placeholder="Categories "
                  required
                />
                <br />
                <input
                  name="Profile_Pic"
                  value={data?.profile_pic}
                  onChange={handleInputs}
                  className="form-control"
                  type="text"
                  placeholder="Profile Pic"
                  required
                />
                <br />

                <div className="invalid-feedback">All fields are required</div>
                <input
                  className="btn btn-success w-100"
                  type="submit"
                  value="Update"
                  onClick={putData}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDoctor;
