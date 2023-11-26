const Doctor = require("../models/Doctor");

// Create a new Doctor
async function CreateDoctor(req, res) {
  console.log("here")
  try {
    const Doctors = await Doctor.create(req.body);
    res.status(201).json(Doctors); 
  } catch (err) {
    console.log("Error ", )
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

async function GetDoctorById(req, res) {
  const doctorId = req.params.id; // Assuming the route parameter is named 'id'
 console.log(doctorId);
  try {
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    res.json(doctor);
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
    GetDoctorById,
};
