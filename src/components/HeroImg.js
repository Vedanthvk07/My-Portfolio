import "./HeroImg.css";
import React,{useEffect} from 'react'
import laptops from "../assets/laptops.jpeg"
import me from "../assets/portrait.jpg"

import {Link} from "react-router-dom"
const sentence = ["React Developer.","Web Developer.","Coder."];
  
function animateSentence(sentence, element) {
  let letters = sentence.split('');
  element.textContent = '';

  letters.forEach((letter, index) => {
    setTimeout(() => {
      element.textContent += letter;
    }, index * 100); // Adjust the delay (milliseconds) between letter appearances
  });
}

const HeroImg = () => {

  useEffect(() => {
    const changingWord = document.getElementById("changing-word");
    var i=0;
    function changeSentence() {
      if(i<2){
      i=i+1;
      
      }
      else{
        i=0;
      }
      var randomIndex = i;
      animateSentence(sentence[randomIndex], changingWord);
    }

    changeSentence(); // Display a sentence initially
    const intervalId = setInterval(changeSentence,5000); // Change the sentence every 7 seconds
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img"
            src={laptops} alt="introimg"/>
        </div>
        <div className="main">
        <div class="portrait-container">
  <div className="neon-border">
      <img src={me}  alt="Portrait"/>
      </div>  
    </div>
 
        <div className="content">
            <p>Hello, I'm Vedanth</p>
            <p id="secondP">And I'm a</p>
            <h2 id="changing-word"> </h2>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeroImg
