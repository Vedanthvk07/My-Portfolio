import "./AboutContent.css"
import React from 'react'
import react1 from "../assets/react1.jpg"
import js1 from "../assets/js1.jpg"
import py from "../assets/py1.jpg"
import java from "../assets/java1.jpg"
import sql from "../assets/sql1.jpg"
import html from "../assets/html1.jpg"
import css from "../assets/css1.jpg"
import c from "../assets/c++.jpeg"
import php from "../assets/php1.jpg"
import {Link} from "react-router-dom"
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>I'm Vedanth Kayangala</h1>
            <p>I am a budding web developer and am currently gaining expertise in Reactjs development along with Nodejs.Im currently pursuing my B.E. from St Joseph Engineering college,Mangaluru</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
      <div className="right">
        
        <h1>My Skills </h1>
        
        <div className="img-container">
            <div className="img">
            <FaReact size={200} style={{color:"#fff" ,marginRight:"2rem"}}/>  
            </div>
            <div className="img">
            <FaHtml5 size={200} style={{color:"#fff" ,marginRight:"2rem"}}/>  
            </div>
            <div className="img">
            <FaCss3 size={200} style={{color:"#fff" ,marginRight:"2rem"}}/>   
            </div>
            <div className="img">
            <FaJs size={200} style={{color:"#fff" ,marginRight:"2rem"}}/>   
            </div>
            <div className="img">
            <FaNodeJs size={200} style={{color:"#fff" ,marginRight:"2rem"}}/>  
            </div>
            <div className="img">
            <FaPython size={200} style={{color:"#fff" ,marginRight:"2rem"}}/>   
            </div>
            <div className="img">
            <FaJava size={200} style={{color:"#fff" ,marginRight:"2rem"}}/> 
            </div><div className="img">
            <FaBootstrap size={200} style={{color:"#fff" ,marginRight:"2rem"}}/>  
            </div>
            <div className="img">
                    <FaPhp size={200} style={{color:"#fff" ,marginRight:"2rem"}}/>   
            </div>

        </div>
      </div>
    </div>
  )
}

export default AboutContent
