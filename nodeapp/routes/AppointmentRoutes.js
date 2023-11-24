const express = require("express");
const router = express.Router();
const AppointmentController = require("../controllers/AppointmentController");


// Create a user
router.post("/appointment", AppointmentController.CreateAppointment);

// Get all users
router.get("/appointment", AppointmentController.getAllAppointements);

// update a user by ID
router.put("/appointment/:id", AppointmentController.updateAppointements);

// delete a user by ID
router.delete("/appointment/:id", AppointmentController.DeleteAppointement);




module.exports = router;
