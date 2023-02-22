const pool = require("../connections/postgre");
const { API_STATUS_CODES } = require("../constants/constants");
const { doctorTableQueries } = require("../utils/doctor_crud_queries");

const { SUCCESS, NOT_FOUND, AUTHORIZATION_FAILED } = API_STATUS_CODES;
const {
  getAlldoctorsQuery,
  getAlldoctorsQueryById,
  postAlldoctorsQuery,
  putAlldoctorsQuery,
  deleteAlldoctorsQuery,
  getAlldoctorsCountQuery,
} = doctorTableQueries;

///////////////////Get///////////////////////////////
const getAlldoctors = async (req, res) => {
  console.log("Request arrived in getAlldoctors controllers");
  try {
    const result = await pool.query(getAlldoctorsQuery);
    res.status(SUCCESS).json(result.rows);
  } catch (error) {
    throw error;
  }
};
///////////////////GetCount///////////////////////////////
const getAlldoctorsCount = async (req, res) => {
  console.log("Request arrived in getAlldoctorsCount controllers");
  try {
    const result = await pool.query(getAlldoctorsCountQuery);
    res.status(SUCCESS).json(result.rows[0].count);
  } catch (error) {
    throw error;
  }
};
////////////////////GetById////////////////////////////
const getAlldoctorsById = async (req, res) => {
  console.log("Request arrived in getAlldoctorsById controllers");
  try {
    const id = req.params.id;
    const singledoctor = await pool.query(getAlldoctorsQueryById, [id]);
    res.json(singledoctor.rows[0]);
  } catch (error) {
    throw error;
  }
};
////////////////////Post////////////////////////////
const postAlldoctors = async (req, res) => {
  console.log("Request arrived in postAlldoctors controllers");
  try {
    const {
      doctor_name,
      email,
      password,
      specialization,
      experience,
      categories,
      Profile_Pic,
      disease_id,
    } = req.body?.createDoctorData;
    await pool.query(postAlldoctorsQuery, [
      doctor_name,
      email,
      password,
      specialization,
      experience,
      categories,
      Profile_Pic,
      disease_id,
    ]);
    res.json({ success: true, message: "Doctor successfully added" });
  } catch (error) {
    throw error;
  }
};
const putAlldoctors = async (req, res) => {
  console.log("Request arrived in putAlldoctorsById controllers");
  try {
    const id = req.params.id;
    const {
      doctor_name,
      email,
      password,
      specialization,
      experience,
      categories,
      Profile_Pic,
    } = req.body.data;
    await pool.query(putAlldoctorsQuery, [
      id,
      doctor_name,
      email,
      password,
      specialization,
      experience,
      categories,
      Profile_Pic,
    ]);
    res.json(`Doctor Details with this id number ${id} successfully updated`);
  } catch (error) {
    throw error;
  }
};

///////////////////////////// Delete ////////////////////////
const deleteAlldoctors = async (req, res) => {
  console.log("Request arrived in deleteAlldoctorsById controllers", req);
  try {
    const id = req.params?.id;
    if (id) {
      const deleteDoctor = await pool.query(deleteAlldoctorsQuery, [id]);
      res.json(`Doctor deleted successfully`);
    } else {
      res.json("Doctor deleted Successfully");
    }
  } catch (error) {
    throw error;
  }
};

//////////////////////////////////////////////////////
module.exports = {
  getAlldoctors,
  getAlldoctorsById,
  getAlldoctorsCount,
  postAlldoctors,
  putAlldoctors,
  deleteAlldoctors,
};
