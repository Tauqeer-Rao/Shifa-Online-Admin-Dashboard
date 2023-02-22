import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../components/admin-dashboard/Home/home";
import Doctor from "../../components/admin-dashboard/Doctor/doctor";
import Update from "../../components/admin-dashboard/Update/update";
import Create from "../../components/admin-dashboard/Create/create";
import Delete from "../../components/admin-dashboard/Delete/delete";
import Login from "../../components/Login/login";
import Payment from "../../components/payment-method/payment";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<Create />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/doctor/update/:id" element={<Update />} />
      <Route path="/doctor/delete/:id" element={<Delete />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
