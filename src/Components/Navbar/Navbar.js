import React from 'react'
import logo from '../../images/logo.png'
import {Link} from "react-router-dom"

const Navbar = (props) => {
  return (
    <>
    <div className="top-bar">
        <div className="container">
        <ul className="left-bar-side">
            <li>
            <p><i className="fa fa-phone me-2"></i> Call Us Now : +91-9811191402 </p>
            <span>|</span> </li>
            <li>
            <p><i className="fa fa-envelope-o"></i> info@unitedmachinery.in </p>
            <span>|</span> </li>        
        </ul>
        <ul className="right-bar-side social_icons">
            <li className="facebook"> <a href="#"><i className="fa fa-facebook"></i> </a></li>
            <li className="linkedin"> <a href="#"><i className="fa fa-linkedin"></i> </a></li>        
        </ul>
        </div>
    </div>
    
    <div id="undefined-sticky-wrapper" className="sticky-wrapper" style={{height: "90px"}}>
        <header className="sticky">
            <div className="container"> 
            <div className="logo"> <Link to="/"><img src={logo} alt=""/></Link> </div>
            <nav> 
                <ul className="ownmenu"><li className="showhide" style={{display: "none"}}><span className="title"></span><span className="icon fa fa-bars"></span></li>
                <li className="active" ><Link to="/">Home</Link>
                </li>
                <li><Link to="/about">About United Machinery </Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/contact-us">Contact us</Link></li>
                </ul></nav>
            </div>
        </header>
    </div> 
     
    </>
  )
}

export default Navbar
