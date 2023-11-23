import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from './navbar'
import '../Styles/Appointment.css';


export default function appointment() {
    return (
        <div>
            <Navbar />
            <div class="formbold-main-wrapper">
                <div class="formbold-form-wrapper">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div class="formbold-mb-5">
                            <label for="name" class="formbold-form-label"> Full Name </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                class="formbold-form-input"
                            />
                        </div>
                        <div class="formbold-mb-5">
                            <label for="phone" class="formbold-form-label"> Phone Number </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
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
                                placeholder="Enter your email"
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
                                        class="formbold-form-input"
                                    />
                                </div>
                            </div>

                            <div>
                                <button class="formbold-btn">Book Appointment</button>
                            </div>
                    </form>
                </div>
            </div>

        </div>

    )
}