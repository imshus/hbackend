import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", addNewAdmin);
router.post("/doctor/addnew", addNewDoctor);
router.get("/doctors", getAllDoctors);
router.get("/patient/me",  getUserDetails);
router.get("/admin/me",  getUserDetails);
router.get("/patient/logout", logoutPatient);
router.get("/admin/logout",logoutAdmin);

export default router;
