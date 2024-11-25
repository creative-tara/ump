import React from 'react'
import Navbar from './Navbar/Navbar'
import SubNavbar from './InnerSection/SubNavbar'
import Footer from './Footer'

export default function Team(props) {
  return (
    <>
    <Navbar/>
    <SubNavbar title={props.title}/>
    <section className="properti-detsil">
        <div className="container">
            <div className="row"> 
                <div className="col-sm-12">
                    <div className="single-post">
                        <div className="admin-info">
                            <ul>               
                                <li className="col-xs-12">
                                <h3>Mr. Manu Talwar</h3>
                                <h5 className="text-uppercase no-margin">(Founder &amp; CEO)</h5>
                                <br/>
                                <p>A Mechanical Engineer with MBA in Sales &amp; Marketing has over 15 years of experience in Construction Equipment Business. He has worked with companies like Quippo, Standard Chartered and Tractors India limited (Caterpillar) and was last associated with Shriram Automall India Limited.</p>
                            
                                <h4>Areas of Expertise:</h4>
                                <p>1. Key Account Management, P&amp;L Responsibility, Team Management &amp; Territory management in Heavy Equipment Sales.</p>
                                <p>2. Used Equipment Sales through Auction and Negotiated Sale.</p>
                                <p>3. Possesses Deep Understanding of Used Equipment Market &amp; Equipment Rentals.</p>
                                <p>4. Innovations: Established &amp; Ramped up Shriram Automall India Limited Used Construction Equipment (UCE) vertical. He was honored with ‘’Excellence in Sale Award’’ for 3 consecutive years 2014, 2015 &amp; 2016 and was awarded ‘Best Business Contributor’’ in 2015. Awarded “TIL Star Performer” in year 2008-2009. Received Certificate on “Sales and Distribution Management” from Caterpillar University.</p>
                                
                                </li>
                            </ul>
                        </div>
                        <div className="admin-info">
                        <ul>               
                            <li className="col-xs-12">
                            <h3>Mr. Vikram Singh</h3>
                            <h5 className="text-uppercase no-margin">(Co-Founder)</h5>
                            <br/>
                            <p>Sale Management, Customer Relationship Management &amp; Equipment Finance.</p>
                            <p>B.Sc. Graduate (Information Technology) with MBA in Marketing &amp; Finance has over 8 years of experience in Construction Equipment Business. He has worked with companies like JCB, Macon’s Construction Equipment, Shriram Automall India Limited &amp; his last assignment was Regional Head (Asset Finance) with Yes Bank.</p>

                            <p>Used Equipment sales through Auction and Negotiated Sale.</p>
                            <p>Possesses Deep Understanding of Used Equipment Market &amp; Equipment  Finance.</p>   
                            </li>
                        </ul>
                        </div>
                        <div className="admin-info">
                            <ul>
                                <li className="col-xs-12">
                                    <h3>Mr. Pankaj Kumar</h3>
                                    <h5 className="text-uppercase no-margin">(Co-Founder)</h5>
                                    <br/>
                                    <p>Sale Management, Customer Relationship Management &amp; Territory management.</p>
                                    <p>A Commerce Graduate with a Diploma in Mechanical Engineer has over 11 years of experience in Construction Equipment Business. He has worked with companies like Ashok Leyland, BEML, SA Automation and was last associated with Shriram Automall India Limited.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}
