// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #1c6ea4;
  background: -moz-linear-gradient(
    left,
    #1c6ea4 0%,
    #1c6ea4 100px,
    #2cabff 100%
  );
  background: -webkit-linear-gradient(
    left,
    #1c6ea4 0%,
    #1c6ea4 100px,
    #2cabff 100%
  );
  background: linear-gradient(
    to right,
    #1c6ea4 0%,
    #1c6ea4 100px,
    #2cabff 100%
  );
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 23px;
  display: flex;
  align-items: center;
  text-decoration: none;

  padding: 0rem 2rem;
  cursor: pointer;
  border: none; /* Ensure no border is applied */
  outline: none;
  transition: background 0.3s ease, color 0.3s ease;

  /* Style for the active link */
  &.active {
    color: #bfbfbf;
  }

  /* Optional: Add hover effects for links */
  &:hover {
    color: #c4c4c4; /* Text color on hover */
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;

  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 90px;
  right: 0;
  background: #1c6ea4;
  background: -moz-linear-gradient(
    left,
    #1c6ea4 0%,
    #1c6ea4 calc(100%-100px),
    #2cabff 100%
  );
  background: -webkit-linear-gradient(
    left,
    #1c6ea4 0%,
    #1c6ea4 calc(100%-100px),
    #2cabff 100%
  );
  background: linear-gradient(
    to right,
    #1c6ea4 0%,
    #1c6ea4 calc(100%-100px),
    #2cabff 100%
  );
  width: 60%;
  z-index: 9999;
  a {
    padding: 20px;
    text-decoration: none;
    color: #ffffff;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #2cabff;
    }
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 24px;

  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const SocialIconLink = styled.a`
  color: #ffffff;
  font-size: 24px;
  padding: 0 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #c4c4c4; /* Change to your desired hover color */
  }
`;
