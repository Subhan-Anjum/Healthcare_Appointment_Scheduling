const express = require("express");
const router = express.Router();
const DoctorController = require("../controllers/DoctorController");


// Create a user
router.post("/doctor", DoctorController.CreateDoctor);

// Get all users
router.get("/doctor", DoctorController.GetDoctors);

// update a user by ID
router.put("/doctor/:id", DoctorController.UpdateDoctors);

// delete a user by ID
router.delete("/doctor/:id", DoctorController.DeleteDoctors);
router.get("/doctor/:id", DoctorController.GetDoctorById);




module.exports = router;
