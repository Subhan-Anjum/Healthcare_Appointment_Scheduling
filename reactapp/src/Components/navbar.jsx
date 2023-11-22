import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img class="main-logo" src="..\images\logo.png" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="contactus.html">Contact Us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Doctors
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Dermatoligists</a></li>
                                    <li><a class="dropdown-item" href="#">Anesthesiologists</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Cardiologists</a></li>
                                    <li><a class="dropdown-item" href="#">Colon and Rectal Surgeons</a></li>
                                    <li><a class="dropdown-item" href="#">Endocrinologists</a></li>
                                    <li><a class="dropdown-item" href="#">Gastroenterologists</a></li>
                                    <li><a class="dropdown-item" href="#">Neurologists</a></li>
                                    <li><a class="dropdown-item" href="#">Ophthalmologists</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <button class="btn1" type="submit">Log In</button>
                            <button class="btn1" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
