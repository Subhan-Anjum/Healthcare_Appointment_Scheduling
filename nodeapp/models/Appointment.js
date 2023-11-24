const mongoose = require("mongoose");
// full name ,phone number Email Address Date time 
// AppointmentController
// AppointmentRoutes.js
// appoitment.js
const AppointmentSchema = new mongoose.Schema(
  {
    name: {type:String,required:true},
    phone : {type:Number,required:true},
    email: {type:String,required:true},
    address: {type:String,required:true},
    date: {type:String,required:true},
    time: {type:String,required:true},
    status: {type:String,required:true},
    // AppointmentID: {type:String,required:true},

    IsActive :{type:Boolean, default:true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Appointment", AppointmentSchema);
