import React from 'react'
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <>
    <footer>
        <div className="container"> 
        <ul className="row pt-50">
            <li className="col-sm-4">
                <h5>About us</h5>
                <hr/>
                <p>United Machinery &amp; Parts (UMP Infra Services India Pvt. Ltd.) is a startup firm based out of Delhi NCR. The firm was setup in December 2017 and started Commercial operation in January 2018.The Company is providing consultancy services to Large &amp; Medium sized Construction Companies.</p>
                
                <ul className="social_icons">
                    <li className="facebook"> <Link to="https://www.facebook.com/manutalwar308" target="_blank"><i className="fa fa-facebook"></i> </Link></li>
                    <li className="linkedin"> <Link to="https://www.linkedin.com/in/manu-talwar-8583b315/" target="_blank"><i className="fa fa-linkedin"></i> </Link></li>
                </ul>
            </li>
            <li className="col-sm-4"> 
            <h5>Important Links</h5>
            <hr/>
            <ul className="important-links">
                <li>
                <div> <Link to="/">Home</Link> </div>
                </li>
                <li>
                <div> <Link to="/about">About Us</Link> </div>
                </li>
                <li>
                <div> <Link to="/team">Our Team</Link> </div>
                </li>
                <li>
                <div> <Link to="/contact-us">Contact Us</Link>  </div>
                </li>
            </ul>          
            </li>
            <li className="col-sm-4"> 
                <h5>Contact</h5>
                <hr/>
                <div className="loc-info">
                    <p><i className="fa fa-map-marker"></i>UMP Infra Services India Pvt Ltd <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1550 Agarwal Metro Height 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Netahi Subhash Place Pitampura <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New Delhi - 110034</p>
                    <p><i className="fa fa-phone"></i> +91-9810550205</p>
                    <p><i className="fa fa-envelope-o"></i> info@unitedmachinery.in</p>
                </div>
            </li>
        </ul>
        </div>
    </footer>
    <div className="rights">
        <div className="container">
        <p className="font-montserrat">© 2019. UMP Infra Services India Pvt. Ltd. Development by Webpurchase</p>
        </div>
    </div>
    </>
  )
}
