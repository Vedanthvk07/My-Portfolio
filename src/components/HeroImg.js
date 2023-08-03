import "./HeroImg.css";
import React,{useEffect} from 'react'
import laptops from "../assets/laptops.jpeg"
import me from "../assets/portrait.jpg"
import {Link} from "react-router-dom"
const HeroImg = () => {
  const sentences = ["React Developer.","Web Developer.","Coder."];
  
  function animateSentence(sentence, element) {
    let letters = sentence.split('');
    element.textContent = '';
  
    letters.forEach((letter, index) => {
      setTimeout(() => {
        element.textContent += letter;
      }, index * 100); // Adjust the delay (milliseconds) between letter appearances
    });
  }
  var i=0;
  useEffect(() => {
    const changingWord = document.getElementById("changing-word");

    function changeSentence() {
      if(i<2){
      i=i+1;
      }
      else{
        i=0;
      }
      
      var randomIndex = i;
      console.log(randomIndex)
      animateSentence(sentences[randomIndex], changingWord);
    }

    changeSentence(); // Display a sentence initially
    const intervalId = setInterval(changeSentence, 5000); // Change the sentence every 7 seconds

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
    <div class="neon-border">
      <img src={me} alt="Portrait"/>
    </div>
  </div>
        <div className="content">
            <p>Hi, I'm Vedanth</p>
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
