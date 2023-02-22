const express = require("express");
const {
  getAlldoctors,
  getAlldoctorsById,
  getAlldoctorsCount,
  postAlldoctors,
  putAlldoctors,
  deleteAlldoctors,
} = require("../controllers/doctor_crud_controller");
const router = express.Router();

router.use((req, res, next) => {
  // module for debugging
  console.log("Request arrived in user routers");
  next();
});
//routes
router.get("/display", getAlldoctors);
router.get("/display/:id", getAlldoctorsById);
router.get("/count", getAlldoctorsCount);
router.post("/create", postAlldoctors);
router.put("/update/:id", putAlldoctors);
router.delete("/delete/:id", deleteAlldoctors);

module.exports = router;
