import React from 'react'
import {Link} from "react-router-dom"

export default function SubNavbar(props) {
  return (
    <>
    <div className="sub-banner">
        <div className="overlay">
        <div className="container">
            <ol className="breadcrumb">
            <li className="pull-left">{props.title}</li>
            <li><Link to="/">Home</Link></li>
            <li className="active">{props.title} </li>
            </ol>
        </div>
        </div>
    </div> 
    </>
  )
}
