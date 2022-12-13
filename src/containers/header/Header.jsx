import React from 'react'
import "./header.css"
import react from "../../assets/react.png"
import tailwind from "../../assets/tailwind.png"
import Me from "../../assets/AI-Me.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

    document.addEventListener("mousemove", parallax);
    function parallax(e){
      document.querySelectorAll(".portfolio__header-content img").forEach(function(move){
  
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 300;
        var y = (e.clientY * moving_value) / 300;
  
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px";
      });
    }

  return (
    <div className='portfolio__header section__padding' id="home">
      <div className='portfolio__header-content'>
        <img src={Me} data-value="1" alt="nicolay" />
        <h1>Hi👋,<br/>I'm <span className="gradient__text">Nicolay Andre Olsen</span><br/> Frontend Developer</h1>
        <a href=''>Download CV</a>
      </div>
      <div class="portfolio__header-social">
        <a href="https://www.linkedin.com/in/nicolay-andre-o-0b120b204/"><FontAwesomeIcon icon="fab fa-linkedin" /></a>
        <a href="https://www.behance.net/vybzgfx"><i class="fab fa-behance"></i></a>
      </div>
    </div>
    
  )
}

export default Header
