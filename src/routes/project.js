import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="some of my project websites"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
