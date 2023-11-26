import React, { useState } from 'react';
import Footer from './footer';
import '../Styles/Doctor.css';
import { Link, useHistory } from 'react-router-dom';
//Name,Active,fee,DID,Contctinfo,Email,address

export default function Doctor() {


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [fee, setFee] = useState(0);
  const [specialization, Setspecial] = useState('');
  const [Experience, setExperience] = useState(0);

  const [doctorId, setDoctorId] = useState(0);
  const history = useHistory();


  const HandleDoctor = async (e) => {

    e.preventDefault();
    try {

      // Convert fee and Experience to numbers
      const numericFee = parseInt(fee, 10);
      const numericExperience = parseInt(Experience, 10);

      const response = await fetch('http://localhost:3005/api/doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          address,
          fee: numericFee,
          specialization,
          Experience: numericExperience,
        }),
      });


      if (response.ok) {
        // Redirect or handle success as needed
        window.alert("Added successfully")
        const data = await response.json();
        const id = data._id;
        history.push(`/dashboard/${id}`);
      } else {
        // Handle error
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  }


  return (
    <div>

      <div className="container">
        <header class="header">
          <h1 class="h1">Join as a Doctor</h1>
          <p class="p">Please drop your name and number below so we can add you as a doctor to this website</p>
        </header>

        <form class="form">
          <input type="text" name="name"
            value={name}
            onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input type="text" name="phone" value={phone}
            onChange={(e) => setPhone(e.target.value)} placeholder="Phone number e.g 0321XXXXXXX" />
          <input type="email" name="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="text" name="address" value={address}
            onChange={(e) => setAddress(e.target.value)} placeholder="City" />
          <select class="select"
            name="specialization" value={specialization}
            onChange={(e) => Setspecial(e.target.value)}>
            <option value="">Select specialization</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Dentistry">Dentistry</option>
            <option value="General Medicine">General Medicine</option>
            <option value="Gynecology">Gynecology</option>
            <option value="Ophthalmology">Ophthalmology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Psychology">Psychology</option>

          </select>
          <input type="number" name="fee" placeholder="Your Appointment Fee"
            onChange={(e) => setFee(e.target.value)} />
          <input type="number" name="Experience"
            onChange={(e) => setExperience(e.target.value)} placeholder="Experience" />

          <button class="btn1" id="btn2" type="submit" onClick={HandleDoctor}><Link class="navbarBtnLink" >Join</Link></button>

        </form>
      </div>

    </div>
  );
}
