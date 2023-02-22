import React, { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useLoginPatientMutation } from "../../redux/feature/Admin-login/loginApi";
import "../../styles/login/login.css";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = useLoginPatientMutation();
  let name, value;
  const handleInputs = (e) => {
    console.log(data);
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    loginUser(data);
    console.log("data", data);
  };
  return (
    <div className="main-wrapper">
      <h1 className="text-center">Sign In</h1>
      <form className="form-input" method="post">
        <div className="form-group was-validated">
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
          />
          <br />
          <div className="radioo">
            <div>
              <input type="radio" value="admin" name="user" /> Admin
            </div>
            <div>
              <input type="radio" value="doctor" name="user" /> Doctor
            </div>
          </div>
          <div className="invalid-feedback">All fields are required</div>
          <input
            className="btn btn-success w-100"
            type="submit"
            value="Login"
            onClick={() => {
              console.log("password", data.password);
              postData();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
