import React from 'react'
import {Link} from "react-router-dom"

export default function ContactSection() {
  return (
    <>
    <section className="call-us">
      <div className="overlay">
        <div className="container">
          <ul className="row">
            <li className="col-sm-6">
              <h4>Do you want to sell your machines ?</h4>
              <h6>Call us and list your machines here</h6>
            </li>
            <li className="col-sm-4">
              <h1 className="mt-3">+91-9811191402</h1>
            </li>
            <li className="col-sm-2 no-padding"> <Link to="/contact-us" className="btn">just contact us</Link> </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}
