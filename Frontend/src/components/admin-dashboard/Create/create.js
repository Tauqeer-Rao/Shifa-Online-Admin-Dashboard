import React from "react";
import { useState, useEffect } from "react";
import "../../../styles/admin-dashboard/create.css";
// import { useCreateDoctorMutation } from "../../../redux/feature/doctor-crud/post";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router";
import { useCreateDoctorMutation } from "../../../redux/feature/doctor-crud/crud";
const AddDoctor = () => {
  const [data, setData] = useState({
    doctor_name: "",
    email: "",
    password: "",
    specialization: "",
    experience: "",
    categories: "",
  });

  const navigateAdd = useNavigate();
  const [postDoctor] = useCreateDoctorMutation();
  const count = 0;
  let name, value;
  const handleInputs = (e) => {
    console.log(data);
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    postDoctor(data);
    navigateAdd("/doctor");
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="smDiv">
        <Sidebar />
        <div className="mainContainer">
          <div className="login">
            <h1 className="text-center">Add Doctor</h1>
            <form method="post" action="/doctor.js">
              <div className="form-group was-validated">
                <br />
                <input
                  name="doctor_name"
                  value={data.doctor_name}
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
                  value={data.email}
                  onChange={handleInputs}
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  required
                />
                <br />

                <input
                  name="password"
                  value={data.password}
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
                  value={data.specialization}
                  onChange={handleInputs}
                  className="form-control"
                  type="tel"
                  placeholder="Specialization"
                  required
                  pattern="(^[a-zA-Z]{3,15}$)"
                />
                <br />

                <input
                  name="experience"
                  value={data.experience}
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
                  value={data.categories}
                  onChange={handleInputs}
                  className="form-control"
                  type="text"
                  placeholder="Categories "
                  required
                  pattern="(^[a-zA-Z]{3,15}$)"
                />
                <br />
                <input
                  name="Profile_Pic"
                  value={data.Profile_Pic}
                  onChange={handleInputs}
                  className="form-control"
                  type="text"
                  placeholder="profile pic "
                  required
                />
                <br />

                <div className="invalid-feedback">All fields are required</div>
                <input
                  className="btn btn-success w-100"
                  type="submit"
                  value="Add"
                  onClick={postData}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
