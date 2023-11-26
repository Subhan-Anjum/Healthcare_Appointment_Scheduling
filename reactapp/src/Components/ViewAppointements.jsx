import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import '../Styles/ViewDoctor.css';
import DocNavbar from './DoctorNavbar';

export default function ViewDoctors() {
    const { appointementID } = useParams();


    const [Appointments, setAppointements] = useState([]);



    useEffect(() => {
        // Fetch existing data for the specified doctorId
        const fetchData = async () => {
            try {
                
                const response = await axios.get(`http://localhost:3005/api/appointment`);


                const data = response.data;
                setAppointements(data);
                // Set the state with existing data
                // setName(data.name); 
                // setPhone(data.phone);
                // setEmail(data.email);
                // setAddress(data.address);
                // setFee(data.fee);
                // Setspecial(data.specialization);
                // setExperience(data.Experience);
            } catch (error) {
                console.error('Error fetching doctor data', error);
            }
        };

        fetchData(); // Invoke the fetchData function
    }, [doctorId]);


    return (

        <div>
            <DocNavbar />
            
            <div>
                {doctors.length === 0 ? (
                    <p >
                        No doctors  added yet.
                    </p>
                ) : (
                    <div className="postedAdsContainer">
                        {doctors.map((doctor) => (
                            <div class="doctor-profile">
                                <img src="..\images\user.png" alt="" />
                                <h3>{doctor.name}</h3>
                                <p><b>Experience:</b>{doctor.Experience}</p>
                                <p><b>fee</b>{doctor.fee}</p>
                                <p><b>Phone</b>{doctor.phone}</p>
                                <p><b>Email</b>{doctor.email}</p>
                                <button class="book-appointment-btn "><b><Link className="navbarBtnLink" to="/appointment">Book Appointment</Link></b></button>
                            </div>
                        ))}
                    </div>
                )}{" "}
            </div>

            {/* <div class="doctor-profile">
                <img src="..\images\user.png" alt="Dr. Saira Hameed" />
                <h3>Dr. Saira Hameed</h3>
                <p>Dermatologist, Cosmetologist</p>
                <p>Education: M.B.B.S, F.C.P.S (Dermatology), M.C.P.S</p>
                <p>Experience: 14 years</p>
                <p>Languages spoken: English, Urdu</p>
                <button class="book-appointment-btn "><b>Book Appointment</b></button>
            </div> */}
            {/* <div class="doctor-profile">
                <img src="..\images\user.png" alt="Dr. Saira Hameed" />
                <h3>Dr. Saira Hameed</h3>
                <p>Dermatologist, Cosmetologist</p>
                <p>Education: M.B.B.S, F.C.P.S (Dermatology), M.C.P.S</p>
                <p>Experience: 14 years</p>
                <p>Languages spoken: English, Urdu</p>
                <button class="book-appointment-btn "><b>Book Appointment</b></button>
            </div>
            <div class="doctor-profile">
                <img src="..\images\user.png" alt="Dr. Saira Hameed" />
                <h3>Dr. Saira Hameed</h3>
                <p>Dermatologist, Cosmetologist</p>
                <p><b>Education</b>M.B.B.S, F.C.P.S (Dermatology), M.C.P.S</p>
                <p><b>Experience</b> 14 years</p>
                <p>Languages spoken: English, Urdu</p>
                <button class="book-appointment-btn "><b>Book Appointment</b></button>
            </div> */}
        </div>
    )
}
