// components/Navbar/index.js

import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavBtn,
  SocialIconLink,
  NavMenu,
} from "./NavbarElements";
import "./navbar.css";
import Resume from "../../assets/resume.pdf";
import { FaGithub, FaLinkedin, FaInstagram, FaSpotify } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/">About</NavLink>

          <NavLink to="/blog" style={({ isActive }) => ({})}>
            Blog
          </NavLink>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Resume
          </a>

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
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
