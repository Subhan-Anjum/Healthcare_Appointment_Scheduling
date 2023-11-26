import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><img className="main-logo" src="..\images\logo.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" to="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Doctors
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/appointment">Dermatoligists</Link></li>
                                    <li><Link className="dropdown-item" to="/appointment">Anesthesiologists</Link></li>
                                    <li><Link className="dropdown-item" to="/appointment">Cardiologists</Link></li>
                                    <li><Link className="dropdown-item" to="/appointment">Colon and Rectal Surgeons</Link></li>
                                    <li><Link className="dropdown-item" to="/appointment">Endocrinologists</Link></li>
                                    <li><Link className="dropdown-item" to="/appointment">Gastroenterologists</Link></li>
                                    <li><Link className="dropdown-item" to="/appointment">Neurologists</Link></li>
                                    <li><Link className="dropdown-item" to="/appointment">Ophthalmologists</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn1" type="submit" ><Link className="navbarBtnLink" to="/login" >Log In</Link></button>
                            <button className="btn1" type="submit"><Link className="navbarBtnLink" to="/signUp" >Sign Up</Link></button>
                            <button className="btn2" type="submit" ><Link className="navbarBtnLink" to="/doctor" >Join As Doctor</Link></button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
