import React from 'react'
import Navbar from './Navbar/Navbar'
import SubNavbar from './InnerSection/SubNavbar'
import Footer from './Footer'

export default function Contact(props) {
  return (
    <>
    <Navbar/>
    <SubNavbar title={props.title}/>
    <section className="contact"> 
        <div className="contact-info">
        <div className="container"> 
            <ul className="row con-det">
                <li className="col-md-4"> <i className="fa fa-map-marker"></i>
                <p>UMP Infra Services India Pvt Ltd <br/>1550 Agarwal Metro Height <br/>Netahi Subhash Place Pitampura, New Delhi- 110034</p>
                </li>
                <li className="col-md-4"> <i className="fa fa-phone"></i>
                <p>Tel  :  +91-9810550205</p>
                </li>
            <li className="col-md-4"> <i className="fa fa-envelope-o"></i>
                <p>Mail : info@unitedmachinery.in</p>
            </li>
            </ul>
            
        </div>
        </div>
        <div className="contact-form">
        <div className="container"> 
            <div className="tittle"> 
            <h3>feel free to communicate with us</h3>          
            </div>
            <div id="contact_message" className="success-msg"> <i className="fa fa-paper-plane-o"></i>Thank You. Your Message has been Submitted</div>
            <form role="form" id="contact_form" method="post" >
            <ul className="row">
                <li className="col-sm-6">
                <label className="font-montserrat">your name *
                    <input type="text" className="form-control" name="name" id="name" placeholder=""/>
                </label>
                </li>
                <li className="col-sm-6">
                <label className="font-montserrat">your e-mail *
                    <input type="text" className="form-control" name="email" id="email" placeholder=""/>
                </label>
                </li>
                <li className="col-sm-6">
                <label className="font-montserrat">Phone *
                    <input type="text" className="form-control" name="company" id="company" placeholder=""/>
                </label>
                </li>
                <li className="col-sm-6">
                <label className="font-montserrat">Subject
                    <input type="text" className="form-control" name="website" id="website" placeholder=""/>
                </label>
                </li>
                <li className="col-sm-12">
                <label className="font-montserrat">message
                    <textarea className="form-control" name="message" id="message" rows="5" placeholder=""></textarea>
                </label>
                </li>
                <li className="col-sm-12">
                <button type="submit" value="submit" className="btn font-montserrat" id="btn_submit">Send message</button>
                </li>
            </ul>
            </form>
        </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}
