import "./WorkCard.css"

import { NavLink } from "react-router-dom";

import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="img"/>
    <h2 className="pro-title">{props.title}</h2>
    <div className="pro-details">
      <p>{props.text}</p>
      </div>
      <div className="pro-btns">
        
        <NavLink to={props.view} className="btn">View</NavLink>
      </div>
    
</div>
  )
}

export default WorkCard
