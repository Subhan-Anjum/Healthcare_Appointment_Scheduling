const mongoose = require("mongoose");
//Name,Active,fee,DID,Contctinfo,Email,address
// AppointmentController
// AppointmentRoutes.js
// appoitment.js
const DoctorSchema = new mongoose.Schema(
  {
    name: {type:String,required:true},
    phone : {type:String,required:true},
    email: {type:String,required:true},
    address: {type:String,required:true},
    fee: {type:Number,required:true},
    specialization: {type:String,required:true},
    Experience: {type:Number,required:true}, 

     
    IsActive :{type:Boolean, default:true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Doctor", DoctorSchema);
