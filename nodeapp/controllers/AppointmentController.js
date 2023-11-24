const Appointment = require("../models/Appointment");

// Create a new Appoinments
async function CreateAppointment(req, res) {
  try {
    console.log(req.body)
    const Appointments = await Appointment.create(req.body);
    console.log(Appointments)
    res.status(201).json(Appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all Appoinments
async function getAllAppointements(req, res) {
  try {
    const Appointments = await Appointment.find();
    res.json(Appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// update a Appoinments by ID
async function updateAppointements(req, res) {
  try {
    const { id } = req.params;
    const UpdateAppointments = await Appointment.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(UpdateAppointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// delete a Appoinments by ID
async function DeleteAppointement(req, res) {
  try {
    const { id } = req.params;
    await Appointment.findByIdAndRemove(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  CreateAppointment,
  getAllAppointements,
  updateAppointements,
  DeleteAppointement,
};
