import React from 'react'
import Navbar from '../components/navbar'
import HeroImg from '../components/HeroImg';
import Footer from '../components/footer';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default Home;
