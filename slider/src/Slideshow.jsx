import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'First Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Second Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Third Slide'
  },
];


export default function Slideshow() {
  return (
    <div className="slide-container" >
      <Fade nextArrow={<div style={{ marginRight: '137px',marginTop:'10px' }}><FaArrowRight size={50}  />
      </div>} prevArrow={<div style={{ marginLeft: '120px',marginTop:'10px' ,height:'30px'}}><FaArrowLeft size={50}  /></div>}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '80vw', height: '100vh',marginLeft:"110px",marginTop:'5vh' }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  )
}
