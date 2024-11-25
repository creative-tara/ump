import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import ProductSection from './InnerSection/ProductSection'
import ContactSection from './InnerSection/ContactSection'
import { Carousel } from "react-responsive-carousel";
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <>
    <Navbar/>
    <div id="banner"> 
        <div className="finder">
        <div className="container">
            <div className="find-sec">
            <ul className="row">
                <li className="col-sm-4">
                <label>Choose Category</label>
                <select id="category_id"> </select>
                </li>
                <li className="col-sm-4">
                <label>Choose Brand</label>
                <select id="sub_cateid"></select>
                </li>
                <li className="col-sm-4">
                <label>Choose State</label>
                <select id="state_id"></select>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    <ProductSection/> 
    <section id="testimonials">
        <div className="container">
            <div className="tittle">
                <h3>some words from our customer</h3>
            </div>
            <Carousel show={5} slide={2} swiping={true}>
                <div className="card testi testi-card">  
                    <div class="card-body">
                    <p class="card-text">It was a great ease working with United Machinery. They are one of the best teams, we are updated on developments in a very timely and methodically manner. They have a professional approach and dedicated and committed team of people.</p>
                        <h5 class="card-title test-card-title"><b>Ananth Iyer (Director)</b></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary fs-11" >India Machine Mart</h6>                      
                    </div>
                </div>
                <div className="card testi testi-card">  
                    <div class="card-body">
                    <p class="card-text">Working with United Machinery is a pleasure. They are very professional, responsive and helpful to the clients. They work tirelessly every step to ensure best deals....</p>
                        <h5 class="card-title test-card-title"><b>Dhruv Gupta (Director)</b></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary fs-11" >Continental Piling & Excavation Pvt Ltd.</h6>                      
                    </div>
                </div>
                <div className="card testi testi-card">  
                    <div class="card-body">
                    <p class="card-text"> We highly recommend United Machinery. We are in the industry for past many years, But the standards followed by UMP is at par or even better than any bigger competition in the market. Superb team of people. Truly dedicated and committed to work.</p>
                        <h5 class="card-title test-card-title"><b>Raghav Reddy  (Owner)</b></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary fs-11" >Infra Engineers India Pvt Ltd. </h6>                      
                    </div>
                </div>
            </Carousel>
        </div>
        </section>   
    <ContactSection/>
    <Footer/>
    </>
  )
}
