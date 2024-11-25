import React from 'react'
import {Link} from "react-router-dom"
import { Carousel } from '@trendyol-js/react-carousel';

export default function Patner() {
  return (
   <>  
    <div className="parthner-slide" id="exampleCarousel1"> 
        <Carousel show={5} slide={2} swiping={true}>   
            <div style={{width:'200px',float:'left',margin: '20px'}}>        
                <div className="part"> 
                    <Link to="/zxcx">
                        <img src="https://unitedmachinery.in/images/parthner-img-1.png" alt="" style={{padding:"45px"}}/> 
                    </Link> 
                </div> 
            </div> 
            <div style={{width:'200px',float:'left',margin: '20px'}}> 
                <div className="part"> 
                    <Link to="/zxcx">
                        <img src="https://unitedmachinery.in/images/parthner-img-1.png" alt="" style={{padding:"45px"}}/> 
                    </Link> 
                </div> 
            </div> 
            <div style={{width:'200px',float:'left',margin: '20px'}}> 
                <div className="part"> 
                    <Link to="/zxcx">
                        <img src="https://unitedmachinery.in/images/parthner-img-1.png" alt="" style={{padding:"45px"}}/> 
                    </Link> 
                </div> 
            </div> 
            <div style={{width:'200px',float:'left',margin: '20px'}}> 
                <div className="part"> 
                    <Link to="/zxcx">
                        <img src="https://unitedmachinery.in/images/parthner-img-1.png" alt="" style={{padding:"45px"}}/> 
                    </Link> 
                </div> 
            </div> 
            <div style={{width:'200px',float:'left',margin: '20px'}}> 
                <div className="part"> 
                    <Link to="/zxcx">
                        <img src="https://unitedmachinery.in/images/parthner-img-1.png" alt="" style={{padding:"45px"}}/> 
                    </Link> 
                </div> 
            </div> 
            <div style={{width:'200px',float:'left',margin: '20px'}}> 
                <div className="part"> 
                    <Link to="/zxcx">
                        <img src="https://unitedmachinery.in/images/parthner-img-1.png" alt="" style={{padding:"45px"}}/> 
                    </Link> 
                </div> 
            </div> 
        </Carousel>
    </div>
   </>
  )
}
