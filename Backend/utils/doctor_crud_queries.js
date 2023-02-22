const doctorTableQueries = {
  getAlldoctorsQuery: "SELECT * FROM doctor",
  getAlldoctorsCountQuery: "SELECT COUNT(Doctor_name) FROM Doctor",
  getAlldoctorsQueryById: "SELECT * FROM doctor WHERE doctor_id = $1",
  postAlldoctorsQuery:
    "INSERT INTO doctor (Doctor_name, Email, Password, Specialization, Experience, Categories,Profile_Pic,Disease_id) values ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
  putAlldoctorsQuery:
    "UPDATE doctor set Doctor_name = $2, Email = $3, Password = $4, Specialization = $5, Experience = $6, Categories = $7 ,Profile_Pic = $8 WHERE doctor_id = $1",
  deleteAlldoctorsQuery: "DELETE FROM doctor WHERE doctor_id = $1",
};

module.exports = { doctorTableQueries };
