const Doctor = require("../models/Doctor");

// Create a new Doctor
async function CreateDoctor(req, res) {
  try {
    console.log(req.body)
    const Doctors = await Doctor.create(req.body);
    console.log(Doctors)
    res.status(201).json(Doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all Doctor
async function GetDoctors(req, res) {
  try {
    const Doctors = await Doctor.find();
    res.json(Doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// update a Doctor by ID
async function UpdateDoctors(req, res) {
  try {
    const { id } = req.params;
    const updateDoctors = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateDoctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// delete a Doctor by ID
async function DeleteDoctors(req, res) {
  try {
    const { id } = req.params;
    await Doctor.findByIdAndRemove(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
    CreateDoctor,
    GetDoctors,
    UpdateDoctors,
    DeleteDoctors,
};
