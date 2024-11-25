import React from 'react'
import HeadTop from '../images/head-top.png'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import ContactSection from './InnerSection/ContactSection'
import SubNavbar from './InnerSection/SubNavbar'
import Patner from './InnerSection/Patner'

export default function About(props) {
  return (    
    <>
    <Navbar />
   <SubNavbar title={props.title}/>
    <section className="what-we-do">
        <div className="container"> 
        <div className="tittle"> <img src={HeadTop} alt=""/>
            <h3>who we are</h3>
            <p>United Machinery or UMP Infra Services India Pvt Ltd. Is an Asset disposition company, selling Heavy Construction equipment and Tippers through Negotiated Sales Process. The company is headquartered in New Delhi and has operations all over India.</p>
        </div>
        <div role="tabpanel"> 
            <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active"><a href="#what-we" aria-controls="home" role="tab" data-toggle="tab"><i className="fa fa-bullhorn"></i> <span className="font-montserrat">About Us</span></a></li>
            <li role="presentation"><a href="#mission" aria-controls="profile" role="tab" data-toggle="tab"><i className="fa fa-rocket"></i><span className="font-montserrat">Equipment Market</span></a></li>
            <li role="presentation"><a href="#vision" aria-controls="messages" role="tab" data-toggle="tab"><i className="fa fa-lightbulb-o"></i><span className="font-montserrat">Rise Of Used <br/>Construction Equipment</span></a></li>
            </ul>
            <div className="tab-content">
            <div role="tabpanel" className="tab-pane animated-6s flipInX mt-4 active" id="what-we">
                <h4>About Us</h4>
                <p>United Machinery or UMP Infra Services India Pvt Ltd. Is an Asset disposition company, selling Heavy Construction equipment and Tippers through Negotiated Sales Process. The company is headquartered in New Delhi and has operations all over India. The company helps Construction Companies (Contractor), Equipment Rental Companies and Heavy Equipment Traders Buy or Sell through it platform.</p>

                <p>Through it’s diversified marketing network United Machinery or UMP Infra Services India Pvt Ltd. Also helps Bank &amp; NBFC’s who are into asset financing to dispose their repossessed Construction Equipment, thereby providing NPA (Non-Performing Assets) disposal services. The Company started Operation in 2017 and till date has sold over 500+ Used Construction Equipment’s</p>
            </div>
            <div role="tabpanel" className="tab-pane animated-6s flipInX" id="mission">
                <h4>Equipment Market</h4>
                <p>Govt. Initiative to Develop Public &amp; Private sector infrastructure along with recently introduced FDI reforms for Construction Sector, highway projects &amp; growing economy have led to the overall surge of CE (Construction Equipment) &amp; UCE (Used Construction Equipment) market in India. Coupled by Indian government’s move to cut GST rates on CE/UCE from 28 % to18 % has resulted in unprecedented demand in India over the last five months.</p>
                <p>CE/UCE market is expected to grow on account of increasing number of Infrastructure Projects, Initiatives by the present Govt. to develop 100 new smart cities, setting up industrial hubs for ‘Make in India’ campaign. There is huge demand for airport infrastructure, railways, roads, sanitation facilities, urban and rural housing, office spaces and numerous other projects – all indicating the need for an improved infrastructure. This signifies the demand and growth of the construction equipment industry in India.</p>
            </div>
            <div role="tabpanel" className="tab-pane animated-6s flipInX" id="vision">
                <h4>Rise Of Used Construction Equipment</h4>
                <p>Used Construction Equipment (UCE) market plays a dominant role in the Construction Industry / Infrastructure development &amp; the ratio between CE &amp; UCE has become 1:1 in recent times. The primary reason Contractor / Rental Companies opt for UCE for the reasons low budget, shorter project duration or longer delivery period of New CE.</p>

                <p>Presently Contractor / Rental Companies Acquire &amp; Dispose UCE through local dealers/brokers and personal sources. But as number grows most customer look for Service providers who are professional and offer personalized services to meet their varied Needs.</p>

                <p>A typical Sellers / Buyers of UCE could vary from “Seller / Buyer of Single Backhoe Loader “to “Seller / Buyer of specialized equipment like Piling Rig or Boom Pumps” or “Seller / Buyer of Fleet of 30 Machine spread over multiple locations”. </p>
            </div>
            </div>
        </div>
        </div>
    </section>
    <ContactSection/>
   
    <section className="parthner">
        <div className="container">      
            <div className="tittle"> <img src={HeadTop} alt=""/>
                <h3>our trusted partners</h3>
                <p>This time there's no stopping us. Straightnin' the curves. Flatnin' the hills Someday the mountain might get ‘em but the law never will. The weather started getting rough - the tiny ship was tossed.</p>
            </div> 
            <Patner/>        
        </div>
    </section>
    <Footer/>
    </>
  )
}
