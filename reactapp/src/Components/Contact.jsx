import React, { useState } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Link, useHistory } from 'react-router-dom';
import Appointment from './Appointment'


export default function Home() {
    return(
        <div>
             <div id="contact-us">
                    <div class="left">
                        <div class="label">Contact Information</div>
                        <div class="message">
                            <img src="..\images\message.png" class="-us-img" />
                            <p>Contact@wonderTour.com</p>contact
                        </div>
                        <div class="phone">
                            <img src="..\images\phone.png" class="contact-us-img" />
                            <p>+1 (543) 762-4567</p>
                        </div>
                        <div class="location">
                            <img src="..\images\location.png" class="contact-us-img" />
                            <p>123 Main Street, New York, USA</p>
                        </div>
                        <div class="bottom-left">
                            <p class="heading">Connect with us at</p>
                            <div class="icons">
                                <img src="..\images\github.png" class="contact-us-img" />
                                <img src="..\images\instagram.png" class="contact-us-img" />
                                <img src="..\images\facebook.png" class="contact-us-img" />
                            </div>
                        </div>
                    </div>

                    <div class="right">
                        <div class="text">Get in Touch</div>
                        <input type="text" id="name" placeholder="Full name" />
                        <input type="email" id="email" placeholder="Email address" />
                        <textarea name="" id="message" placeholder="Type message here"></textarea>
                        <button>Submit</button>
                    </div>
                </div>
        </div>
    )
}