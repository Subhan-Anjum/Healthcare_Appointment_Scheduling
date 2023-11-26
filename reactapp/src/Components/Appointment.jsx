import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from './navbar';
import '../Styles/Appointment.css';


export default function appointment() {


    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [status, setStatus] = useState('');

    // setStatus(specialist)

    const history2 = useHistory();

    const handleAppointement = async () => {

        try {
            const response = await fetch('http://localhost:3005/api/appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone, email, address, date, time, status }),
            });

            if (response.ok) {
                // Appointement successful, handle accordingly (e.g., redirect) 
                console.log('Appointment successful');
                alert("your appointment was saved")
            } else {
                // Handle Appointement failure
                console.error('Appointement failed');
                // const data = response.json();
                // window.alert(data.error)
            }
        } catch (error) {
            console.error('Error during Appointment:', error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div class="formbold-main-wrapper">
                <div class="formbold-form-wrapper">
                    <form >
                        <div class="formbold-mb-5">
                            <label for="name" class="formbold-form-label"> Full Name </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name"
                                class="formbold-form-input"
                            />
                        </div>

                        <div class="formbold-mb-5">
                            <label for="phone" class="formbold-form-label"> Phone Number </label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your phone number"
                                class="formbold-form-input"
                            />
                        </div>
                        <div class="formbold-mb-5">
                            <label for="email" class="formbold-form-label"> Email Address </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                class="formbold-form-input" />
                        </div>
                        <div class="formbold-mb-5">
                            <label for="email" class="formbold-form-label">  Address </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter your Address"
                                class="formbold-form-input" />
                        </div>
                        <div class="flex flex-wrap formbold--mx-3">
                            <div class="w-full sm:w-half formbold-px-3">
                                <div class="formbold-mb-5 w-full">
                                    <label for="date" class="formbold-form-label"> Date </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        class="formbold-form-input"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap formbold--mx-3">
                            <div class="w-full sm:w-half formbold-px-3">
                                <div class="formbold-mb-5 w-full">
                                    <label for="status" class="formbold-form-label"> Specialist Doctor </label>
                                    <input
                                        type="text"
                                        name="status"
                                        id="status"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        class="formbold-form-input"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-half formbold-px-3">
                            <div class="formbold-mb-5">
                                <label for="time" class="formbold-form-label"> Time </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    class="formbold-form-input"
                                />
                            </div>
                        </div>


                        <div>
                            <Link to="/">
                                <button class="formbold-btn" onClick={handleAppointement}>Book Appointment</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}
