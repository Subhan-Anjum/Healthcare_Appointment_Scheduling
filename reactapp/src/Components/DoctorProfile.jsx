import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import '../Styles/Doctor.css';
import axios from "axios";

export default function Doctor() {
  const { doctorId } = useParams();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [fee, setFee] = useState();
  const [specialization, Setspecial] = useState('');
  const [Experience, setExperience] = useState('');
  const history = useHistory();


  useEffect(() => {
    // Fetch existing data for the specified doctorId
    const fetchData = async () => {
      try {
        // const response = await fetch(`http://localhost:3005/api/doctor/${doctorId}`);
        const response = await axios.get(
            `http://localhost:3005/api/doctor/${doctorId}`
          );

        

        // if (response.ok) {
          const data = response.data;
          // Set the state with existing data
          setName(data.name);
          setPhone(data.phone);
          setEmail(data.email);
          setAddress(data.address);
          setFee(data.fee);
          Setspecial(data.specialization);
          setExperience(data.Experience);
        // } else {
        //   console.error('Error fetching doctor data');
        // }
      } catch (error) {
        console.error('Error fetching doctor data', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, [doctorId]);

  const Updatedoctor = async (e) => {
    e.preventDefault();

    try {
      const numericFee = parseInt(fee, 10);
      const numericExperience = parseInt(Experience, 10);

      const response = await fetch(`http://localhost:3005/api/doctor/${doctorId}`, {
        method: 'PUT',
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
        window.alert('Updated successfully');
        // Redirect or handle success as needed
        // history.push('/success');
      } else {
        console.error('Error updating doctor');
      }
    } catch (error) {
      console.error('Error updating doctor', error);
    }
  };

  return (
    <div>
      <div className="container">
        <header className="header">
          <h1 className="h1">Profile Management</h1>
          <p className="p">You can Update Your profile by updating the Experience, Fee, and phone</p>
        </header>

        <form className="form">
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number e.g 0321XXXXXXX"
          />
          <input type="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="City" />
          <select
            className="select"
            name="specialization"
            value={specialization}
            onChange={(e) => Setspecial(e.target.value)}
          >
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
            {/* ... (your existing options) */}
          </select>
          <input
            type="number"
            name="fee"
            placeholder="Your Appointment Fee"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
          <input
            type="number"
            name="Experience"
            value={Experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Experience"
          />
          <button className="btn1" id="btn2" type="submit" onClick={Updatedoctor}>
            <Link className="navbarBtnLink" to="/dashboard">
              Update
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
