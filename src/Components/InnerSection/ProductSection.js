import React from 'react'
import {Link} from "react-router-dom"

export default function ProductSection() {
  return (
        <>
        <section className="properties">
            <div className="container">
                <ul className="row" id="product_list">
                    <li className="col-sm-4">
                        <span className="tag font-montserrat sale">FOR SALE</span>
                        <section>
                        <Link to="/machine-detail"></Link>
                        <div className="img">
                            <Link to="/machine-detail">
                            <img className="img-responsive prod_img" src="https://unitedmachinery.in/ump-portal-new/uploads/main_image/47fa1e27cc0c050aaf8f02272045eca0.png" alt=""/>
                            </Link>
                            <div className="">
                            <Link to="/machine-detail"></Link>
                            <Link to="/machine-detail" className="btn font-montserrat">more details</Link>
                            </div>
                        </div>
                        <div className="detail-sec">
                            <Link to="/machine-detail" className="font-montserrat">2017 Volvo PTR 220 - 2880 Hrs - Delhi - New Delhi</Link>
                            <div className="share-p">
                            <span className="price font-montserrat">Price : INR 33,00,000 + Applicable GST</span>
                            </div>
                        </div>
                        </section>
                    </li>
                    <li className="col-sm-4">
                        <span className="tag font-montserrat sale">FOR SALE</span>
                        <section>
                        <Link to="/machine-detail"></Link>
                        <div className="img">
                            <Link to="/machine-detail">
                            <img className="img-responsive prod_img" src="https://unitedmachinery.in/ump-portal-new/uploads/main_image/348a95df5cfcdf7655ffd50431c8295e.png" alt=""/>
                            </Link>
                            <div className="">
                            <Link to="/machine-detail"></Link>
                            <Link to="/machine-detail" className="btn font-montserrat">more details</Link>
                            </div>
                        </div>
                        <div className="detail-sec">
                            <Link to="/machine-detail" className="font-montserrat">2016 Vogele Super 1800-3 - 6558 Hrs - Churu - Rajasthan</Link>
                            <div className="share-p">
                            <span className="price font-montserrat">Price : INR 1,35,00,000 + Applicable GST</span>
                            </div>
                        </div>
                        </section>
                    </li>
                    <li className="col-sm-4">
                        <span className="tag font-montserrat sale">FOR SALE</span>
                        <section>
                        <Link to="/machine-detail"></Link>
                        <div className="img">
                            <Link to="/machine-detail">
                            <img className="img-responsive prod_img" src="https://unitedmachinery.in/ump-portal-new/uploads/main_image/1cc0669de0917a9bed92fdd08dc02002.png" alt=""/>
                            </Link>
                            <div className="">
                            <Link to="/machine-detail"></Link>
                            <Link to="/machine-detail" className="btn font-montserrat">more details</Link>
                            </div>
                        </div>
                        <div className="detail-sec">
                            <Link to="/machine-detail" className="font-montserrat">2009 Komatsu D65 - 5800 Hrs - Visakhapatnam - Andhra Pradesh</Link>
                            <div className="share-p">
                            <span className="price font-montserrat">Price : INR 25,00,000 + Applicable GST</span>
                            </div>
                        </div>
                        </section>
                    </li>      
                </ul>
            </div>
        </section>
        </>
  )
}
