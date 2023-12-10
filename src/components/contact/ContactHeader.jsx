import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import light_icon from "../../assets/images/light-mode-icon.png";
import dark_icon from "../../assets/images/dark-mode-icon.png";

const ProjectsHeader = ({ isLightMode }) => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleLightMode = () => {
    // Toggle the body class for light/dark mode
    const body = document.querySelector("body");
    body.classList.toggle("light-mode");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsSticky(!isOpen); // Remove the "sticky" class when the burger icon is clicked
  };

  const handleLinkClick = () => {
    // event.preventDefault();
    setIsOpen(false);
    // setActiveLink(sectionId);
    // const extraHash = "#/"; // Add the extra "#/" before the section id
    // window.location.hash = extraHash + sectionId; // Update the URL with the target hash
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50 && !isOpen) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionId = `#${section.getAttribute("id")}`;
        const sectionOffset = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionOffset - 150 &&
          scrollPosition < sectionOffset + sectionHeight
        ) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    const body = document.querySelector("body");
    const scrollPosition = window.scrollY;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
      if (scrollPosition > 50 && !isOpen) {
        setIsSticky(true);
      }
    }
  }, [isOpen]);

  return (
    <header className={isSticky && !isOpen ? "sticky" : ""}>
      <div className="container">
        <a href="/" className="logo">
          Amr Selim
        </a>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={(e) => handleLinkClick()}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about" // Add the extra "#/" before the section id
              onClick={(e) => handleLinkClick()}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={activeLink === "services" ? "active" : ""}
              onClick={(e) => handleLinkClick()}
            >
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={(e) => handleLinkClick()}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="active"
              onClick={(e) => handleLinkClick()}
            >
              Contact
            </Link>
          </li>
          <li>
            <img
              className="mood-icon"
              src={isLightMode ? light_icon : dark_icon}
              alt="mood icon"
              onClick={handleLightMode}
            />
          </li>
        </ul>
        <div className="burger-icon">
          <input
            type="checkbox"
            id="burger-icon-toggle"
            className="burger-icon-toggle"
            checked={isOpen}
            onChange={handleToggle}
          />
          <label
            htmlFor="burger-icon-toggle"
            className="burger-icon-toggle-label"
          >
            <span className={`icon ${isOpen ? "open" : ""}`}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default ProjectsHeader;
