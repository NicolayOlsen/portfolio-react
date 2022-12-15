import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => {
  // Get the current URL of the page
  const [currentUrl, setCurrentUrl] = useState(window.location.href);

  useEffect(() => {
    // Update the current URL when the URL changes
    window.addEventListener("hashchange", () => {
      setCurrentUrl(window.location.href);
    });
  });


  return (
    <>
      <p>
        <a href="#home" className={currentUrl.endsWith("#home") ? "active" : ""}>
          Home
        </a>
      </p>
      <p>
        <a href="#about" className={currentUrl.endsWith("#about") ? "active" : ""}>
          About
        </a>
      </p>
      <p>
        <a href="#skills" className={currentUrl.endsWith("#skills") ? "active" : ""}>
          Skills
        </a>
      </p>
      <p>
        <a href="#projects" className={currentUrl.endsWith("#projects") ? "active" : ""} >
          Projects
        </a>
      </p>
      <p>
        <a href="#contact" className={currentUrl.endsWith("#contact") ? "active" : ""} >
          Contact
        </a>
      </p>
    </>
  );
};
// BEM --> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
          <h1>Portfolio</h1>
        <div className="portfolio__navbar-links_container">
          <Menu />
        </div>
      </div>
    
      <div className="portfolio__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="portfolio__navbar-menu_container scale-up-center">
            <div className="portfolio__navbar-menu_container-links"></div>
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
