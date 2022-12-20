import React, { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import ScrollTopButton from "./ScrollTopButton";

const Menu = ({ darkThemeEnabled }) => {
  
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

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Navbar = () => {
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (darkThemeEnabled) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [darkThemeEnabled]);

  const toggleTheme = () => {
    setDarkThemeEnabled(!darkThemeEnabled);
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="portfolio__navbar">
      <ScrollTopButton />
      <div className="portfolio__navbar-links">
          <h1 href="#">Portfolio</h1>
        <div className="portfolio__navbar-links_container">
          <Menu darkThemeEnabled={darkThemeEnabled} />
          <ThemeProvider theme={darkThemeEnabled ? lightTheme : darkTheme}>
          <CssBaseline />
          <IconButton onClick={toggleTheme} className="darkmode" color="inherit">
          {darkThemeEnabled ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </ThemeProvider>
        </div>
      </div>
    
      <div className="portfolio__navbar-menu">
        <IconButton onClick={toggleTheme}>
          {darkThemeEnabled ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {toggleMenu ? (
          <RiCloseLine color="#252525" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#252525" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="portfolio__navbar-menu_container scale-up-center">
            <div className="portfolio__navbar-menu_container-links"></div>
            <Menu darkThemeEnabled={darkThemeEnabled} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
