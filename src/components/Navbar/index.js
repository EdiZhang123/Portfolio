// components/Navbar/index.js

import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavBtn,
  SocialIconLink,
  NavMenu,
  DropdownMenu,
} from "./NavbarElements";
import "./navbar.css";
import Resume from "../../assets/resume.pdf";
import { FaGithub, FaLinkedin, FaInstagram, FaSpotify } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);

      // Close dropdown when switching from mobile to desktop view
      if (!isMobileView) {
        setIsOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Nav>
        {isMobile && <Bars onClick={toggleMenu} />}

        {/* Render the main navigation for desktop view */}
        {!isMobile && (
          <NavMenu>
            <NavLink to="/">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Resume
            </a>
          </NavMenu>
        )}

        {/* Render the dropdown menu for mobile view */}
        {isMobile && isOpen && (
          <DropdownMenu>
            <NavLink to="/" onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/blog" onClick={toggleMenu}>
              Blog
            </NavLink>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={toggleMenu}
            >
              Resume
            </a>

            <div style={{ marginTop: "5%", marginBottom: "5%" }}>
              {" "}
              {/* Adds spacing */}
              <SocialIconLink
                href="https://www.linkedin.com/in/edizhang/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/EdiZhang123"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/e.zh.an.g/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://open.spotify.com/user/jnkwetxyi0p265s5cv2tzekox?si=cc42baa4e72e402a"
                target="_blank"
                aria-label="Spotify"
              >
                <FaSpotify />
              </SocialIconLink>
            </div>
          </DropdownMenu>
        )}

        <NavBtn>
          <SocialIconLink
            href="https://www.linkedin.com/in/edizhang/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink
            href="https://github.com/EdiZhang123"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.instagram.com/e.zh.an.g/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink
            href="https://open.spotify.com/user/jnkwetxyi0p265s5cv2tzekox?si=cc42baa4e72e402a"
            target="_blank"
            aria-label="Spotify"
          >
            <FaSpotify />
          </SocialIconLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
