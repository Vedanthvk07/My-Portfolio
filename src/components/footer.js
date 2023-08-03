import "./footer.css"
import { FaHome,FaPhone,FaMailBulk, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

import React from 'react'

const Footer = () => {

  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                <div>
                    <p>Kuthar,Permannur</p>
                    <p>575017</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>9164736464</h4>
            
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>vedanthvk64@gmail.com</h4>
            
            </div>
            </div>
            <div className="right">
                <h4>About me:</h4>
                  <p> This is Vedanth Kayangala. I am pursuing my B.E. at St Joseph Engineering College, Mangaluru</p> 
                  <div className="social">
                    <a href="https://www.instagram.com/vedanthvk/"><FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                   <a href="https://twitter.com/Vedanthvk07"> <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                    <a a href="https://www.linkedin.com/in/vedanth-kayangala-875998211"><FaLinkedin  size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                  </div>
                  </div>

                  
            </div>
        </div>
      
    
  )
}

export default Footer
