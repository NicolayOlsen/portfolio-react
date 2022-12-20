import React from 'react'
import ScrollTop from "../../assets/ScrollTop.png"
import "./navbar.css"

const ScrollTopButton = () => {
  const scrollToTop = () => {
    // find the element with the id of "home"
    const homeElement = document.querySelector('#top');
    // scroll to the top of the page
    homeElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={scrollToTop}>
        <img src={ScrollTop} className='scroll-top'/>
      </button>
    </div>
  )
}

export default ScrollTopButton
