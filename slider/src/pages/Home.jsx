import React from 'react'
import Slideshow from '../Slideshow.jsx'
import Hero from '../components/Hero.jsx'
import Marquee from "react-fast-marquee";
import { FaRegDotCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div>
        <Hero/>
        <Marquee  speed={150} style={{backgroundColor:'green',color:'white',borderTop:'10px double white',borderBottom:'10px double white',fontFamily:"fantasy"}}>
         <div style={{fontSize:'80px'}}> &nbsp; Nitya Foundation <FaRegDotCircle size={30}/> </div>
         <div style={{fontSize:'80px'}}> &nbsp; Nitya Foundation <FaRegDotCircle size={30}/></div>
        </Marquee>
        <Slideshow></Slideshow>
        <br />
        <Hero/>
    </div>
  )
}
