import * as React from "react"
import Navbar from "../components/Navbar"
import '../styles/global.css'
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
import  Review  from "../components/Review"
import Services from "../components/Services"
import Doctor from "../components/Doctor"
import Work from "../components/Work"

export default function Home() {
  return <div className="bg-cyan-50 ">
    <Navbar/>
    <Services/>
    <Work/>
    <Doctor/>
   <Review/>
    <Newsletter/>
    <Footer/>
    
   
  </div>
}
