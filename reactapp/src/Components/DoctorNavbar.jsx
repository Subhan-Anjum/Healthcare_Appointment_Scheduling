import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DocNavbar() {
    const { doctorId } = useParams();

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
                    </div>
                    <form class="d-flex" role="search">
                            <button class="btn1" type="submit" ><Link class="navbarBtnLink" to="/" >Appointments</Link></button>
                            <button class="btn1" type="submit"><Link class="navbarBtnLink" to="/signUp" >Records</Link></button>
                            <button class="btn2" type="submit" ><Link class="navbarBtnLink" to={`/Profile/${doctorId}`} >ManageProfile</Link></button>
                        </form>
                    </nav>
                    </div>
                    )}