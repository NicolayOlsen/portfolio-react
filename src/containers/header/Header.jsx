import React from 'react'
import "./header.css"
import react from "../../assets/react.png"
import tailwind from "../../assets/tailwind.png"

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
        <img src={react} data-value="1" alt="react" />
        <img src={tailwind} data-value="1" alt="tailwind" />
        <h1>Hi👋,<br/>I'm <span className="gradient__text">Nicolay Andre Olsen</span><br/> Frontend Developer</h1>
        <a href=''>Download CV</a>
      </div>
    </div>
  )
}

export default Header
