import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import SubNavbar from './InnerSection/SubNavbar'
import {Link} from "react-router-dom"
import HeadTop from '../images/head-top.png'

const imageData = [ 
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://unitedmachinery.in/ump-portal-new/uploads/gallery/2085-WhatsApp Image 2024-02-27 at 11.58.33 AM.jpeg"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://unitedmachinery.in/ump-portal-new/uploads/gallery/5565-WhatsApp Image 2024-02-27 at 11.58.32 AM (2).jpeg"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://unitedmachinery.in/ump-portal-new/uploads/gallery/9524-WhatsApp Image 2024-02-27 at 11.58.32 AM (1).jpeg"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://unitedmachinery.in/ump-portal-new/uploads/gallery/9736-WhatsApp Image 2024-02-27 at 11.58.32 AM.jpeg"
  }
];

const renderSlides = imageData.map((image) => ( 
  <li className="clone" aria-hidden="true" style={{float: "left",display: "block",width: "1145px"}} key={image.alt}>
    <img className="img-responsive" src={image.url} alt={image.alt} draggable="false" style={{width:'1145px',height:'500px'}}/>
    {/* <p className="legend">{image.label}</p> */}
  </li>  
));


export default function ProductDetail(props) {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {   
    setCurrentIndex(index);   
  }
  function handleImageClick(k)
  {   
    console.log(k);
  }
  

  return (
    
    <>
    <Navbar/>
    <SubNavbar title={props.title}/>
    <section className="properti-detsil">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="thumb-slider mb-5">
              
              <Carousel
                showArrows={true}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container">
                {renderSlides}
              </Carousel>
            </div>
            <h5>For Sale : 2018 Sany 155 - 10883 Hrs - Chennai - Tamil Nadu</h5>
            <section>
              <span className="btn sale-tag price font-montserrat" id="price">Price : INR 92,00,000 + Applicable GST </span>
              <span className="btn sale-tag font-montserrat" id="dsfdf" data-toggle="modal" data-target="#myModal">Click for Enquiry</span>
            </section>
            <section className="info-property more">
              <h5 className="tittle-head">Machine Details</h5>
              <div className="inner">
                <div className="row">
                  <div className="col-sm-12">
                    <table>
                      <tbody>
                        <tr>
                          <th>Category</th>
                          <td> : Piling Rigs</td>
                        </tr>
                        <tr>
                          <th>Brand</th>
                          <td> : Sany 155</td>
                        </tr>
                        <tr>
                          <th>Year</th>
                          <td> : 2018</td>
                        </tr>
                        <tr>
                          <th>Hour</th>
                          <td> : 10883</td>
                        </tr>
                        <tr>
                          <th>City</th>
                          <td> : Chennai ( Tamil Nadu )</td>
                        </tr>
                        <tr>
                          <th>Loan Status</th>
                          <td> : Closed</td>
                        </tr>
                        <tr>
                          <th>RC State</th>
                          <td> : Not Applicable</td>
                        </tr>
                        <tr>
                          <th>Insurance</th>
                          <td> : Valid</td>
                        </tr>
                        <tr>
                          <th>Service Charges</th>
                          <td> : Fees is 2.5% + GST</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="info-property agents-info">
              <h5 className="tittle-head"> Contact our Sale Manager</h5>
              <div className="inner">
                <div className="row">
                  <div className="col-sm-12">
                    <h5>Manu Talwar </h5>
                    <ul className="agent-info row">
                      <li className="col-sm-12">
                        <p>
                          <i className="fa fa-phone"></i> 9810550205
                        </p>
                      </li>
                      <li className="col-sm-12">
                        <p>
                          <i className="fa fa-envelope-o"></i> manu.talwar@unitedmachinery.in
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    <section className="properties white-bg">
      <div className="container">
        <div className="tittle">
          <img src={HeadTop} alt="" />
          <h3>More Products</h3>
        </div>
        <ul className="row">
          <li className="col-sm-4">
            <section>
              <Link to="/machine-detail"></Link>
              <div className="img">
                <Link to="/machine-detail">
                  <img className="img-responsive" src="https://unitedmachinery.in/ump-portal-new/uploads/main_image/9664ce58e336fd72ef2fcd24627a4914.png" alt=""/>
                </Link>
                <div className="">
                  <Link to="/machine-detail"></Link>
                  <Link to="/machine-detail" className="btn font-montserrat">more details</Link>
                </div>
              </div>
              <div className="detail-sec">
                <Link to="/machine-detail" className="font-montserrat"> 2018 XCMG 180 - Piling Rigs - 2437 Hrs - Asansol - West Bengal</Link>
              </div>
            </section>
          </li>
          <li className="col-sm-4">
            <section>
              <Link to="/machine-detail"></Link>
              <div className="img">
                <Link to="/machine-detail">
                  <img className="img-responsive" src="https://unitedmachinery.in/ump-portal-new/uploads/main_image/e12e5a207c1c51bdf37f1d829294669a.png" alt=""/>
                </Link>
                <div className="">
                  <Link to="/machine-detail"></Link>
                  <Link to="/machine-detail" className="btn font-montserrat">more details</Link>
                </div>
              </div>
              <div className="detail-sec">
                <Link to="/machine-detail" className="font-montserrat"> 2018 Mait HR180 - Piling Rigs - 7876 Hrs - Bangalore - Karnataka</Link>
              </div>
            </section>
          </li>
          <li className="col-sm-4">
            <section>
              <Link to="/machine-detail"></Link>
              <div className="img">
                <Link to="/machine-detail">
                  <img className="img-responsive" src="https://unitedmachinery.in/ump-portal-new/uploads/main_image/3d1c6927ef0c8ca62b7729e4b562131b.png" alt=""/>
                </Link>
                <div className="">
                  <Link to="/machine-detail"></Link>
                  <Link to="/machine-detail" className="btn font-montserrat">more details</Link>
                </div>
              </div>
              <div className="detail-sec">
                <Link to="/machine-detail" className="font-montserrat"> 2019 Zoomlion ZR185C - Piling Rigs - NA Hrs - Sambalpur - Odisha</Link>
              </div>
            </section>
          </li>
        </ul>
      </div>
    </section>
    <Footer/>
    </>
  )
}
