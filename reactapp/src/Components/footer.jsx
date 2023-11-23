import React from 'react'
import { Link } from 'react-router-dom'


export default function footer() {
    return (
        <section class="footer">
            <div class="container tex-center">
                <div class="row">
                    <div class="col-md-3">
                        <h1><b>Useful Links</b></h1>
                        <p>Privacy policy</p>
                        <p>Terms of Use</p>
                        <p>Return Policy</p>
                        <p>Discount Coupons</p>
                    </div>
                    <div class="col-md-3">
                        <h1><b>Company</b></h1>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Career</p>
                        <p>Affiliate</p>
                    </div>
                    <div class="col-md-3">
                        <h1><b>Follow Us On</b></h1>
                        <p><i class="fa fa-facebook-official"></i>Facebook</p>
                        <p><i class="fa fa-youtube-play"></i>Youtube</p>
                        <p><i class="fa fa-linkedin"></i>Linkedin</p>
                        <p><i class="fa fa-instagram"></i>Instagram</p>
                    </div>
                    <div class="col-md-3 footer-image">
                        <h1>Download App</h1>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1-cNsugIvAddW87q9M7SgrSLB0zMyDPPsAkNnh-TmAG-OxKaf" />
                    </div>
                </div>
                <hr />
                <p class="copyright">Made By <b>Rithvik Alapati, Gargeyee Dacharla, Manideep</b></p>
            </div>
        </section>


    )
}
