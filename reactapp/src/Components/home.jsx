import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import {Link,useHistory} from 'react-router-dom';
import Appointment from './Appointment'

export default function Home() {
    return (
        <div>
            <Navbar />
            {/* home page */}
            <section class="home_banner">
                <h1 class="headings">
                    Find and the book the <span class="text">best doctors</span>
                    near you
                </h1>
                <div class="search">
                    <text class="text_main">Search for
                        doctors, hospitals, specialities, services, diseases</text>
                    <div class="btn_Search"> Search</div>

                </div>
                <div class="text_box">
                    1000+ doctors

                </div>
            </section>
            <div class="Row">
                <div class="inside_Row1">
                    <div class="Partition-1">
                        <figure class="fig">
                            <img src="https://oladoc.com/dist/images/oladoc-care-img-online-2.svg" alt="images" />
                        </figure>
                        <div class=" head">
                            <p class="heading mt-2">Oladoc Care</p>
                            <p>
                                Video Consultation with top <br /> spectialist in <strong>Rs. 1000</strong>
                            </p>
                            <button class="btn1"><Link to="/appointment">Book Appointment</Link>  
                            </button>
                        </div>
                    </div>
                </div>

                <div class="Partition-2">
                    <figure class="fig">
                        <img src="https://oladoc.com/dist/images/oladoc-care-img-online-4.svg" alt="images" />
                    </figure>
                    <div class=" head">
                        <p class="heading mt-2">Doctors Online Now</p>
                        <p>
                            Instant Video Consultation <br /> with top Doctors
                        </p>
                        <button class="btn2"> Start Consulting &gt; </button>
                    </div>
                </div>

            </div>
            <section>
                <h1 class="text-center mt-5 textHead"><b>Find doctors by health concern</b> </h1>
                <div class="CenterEle">
                    <div class="container-fluid">
                        <div class="RoWImages">
                            <div class="col-md-3">
                                <div class="image-item">
                                    <img class="cont-img" src="..\images\1.jpg" alt="Image 1" />
                                    <p class="CenterImages">Skin spectialists</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="image-item">
                                    <img class="cont-img" src="..\images\2.jpg" alt="Image 1" />
                                    <p class="CenterImages">Dentists</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="image-item">
                                    <img class="cont-img" src="..\images\3.jpg" alt="Image 1" />
                                    <p class="CenterImages">Heart spectialists</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="image-item">
                                    <img class="cont-img" src="..\images\4.jpg" alt="Image 1" />
                                    <p class="CenterImages">Dermatoligists</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="looking-for-more">
                <div class="container lfm">
                    <h2 class="text-center lfm-head">Looking for more ?</h2>
                    <div class="row">
                        <div class="text-center col-md-4">
                            <i class="ico fa-solid fa-flask-vial"></i>
                            <h5 class="lfm-text text-center">Book Medical test</h5>
                        </div>
                        <div class="text-center col-md-4">
                            <i class="ico fa-solid fa-newspaper"></i>
                            <h5 class="lfm-text text-center">Read Health Articles</h5>
                        </div>
                        <div class="text-center col-md-4">
                            <i class="ico fa-regular fa-circle-question"></i>
                            <h5 class="lfm-text text-center">Ask a Question</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h1 class="text-center mt-5 textHead"><b>Some Patients Reviews</b></h1>
                <div class="container-1">
                    <div class="card__container">
                        <article class="card__article">
                            <img src="images/pat1.jpg" alt="image" class="card__img" />

                            <div class="card__data">
                                <span class="card__description">A trusted online resource  providing top-tier services with a focus on excellence</span>
                                <div>⭐⭐⭐⭐⭐</div>
                                <a href="#" class="card__button">Mariyam</a>
                            </div>
                        </article>

                        <article class="card__article">
                            <img src="images/pat2.jpg" alt="image" class="card__img" />

                            <div class="card__data">
                                <span class="card__description">An outstanding online platform delivering top-notch solutions , delivering exceptional service quality</span>
                                <div>⭐⭐⭐⭐⭐</div>
                                <a href="#" class="card__button">Jessica</a>
                            </div>

                        </article>

                        <article class="card__article">
                            <img src="images/pat3.jpg" alt="image" class="card__img" />
                            <div class="card__data">
                                <span class="card__description">A premier destination for high-quality services and unmatched expertise.     Provide quality Services</span>
                                <div>⭐⭐⭐⭐⭐</div>
                                <a href="#" class="card__button">Hassan</a>
                            </div>
                        </article>
                    </div>

                </div>

            </section>
            <section>
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
            </section>
            <  Footer />
        </div>

    )
}
