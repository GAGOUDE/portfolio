import React from 'react';
import './nav.css';
import { FaHome, FaRegUser, FaBook } from 'react-icons/fa';
import { BiMessageEdit } from 'react-icons/bi';
import { RiComputerLine } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <Link activeClass="active" className="nav-icon" to="home" spy={true} smooth={true} duration={300} ><FaHome /></Link>
      <Link activeClass="active" className="nav-icon" to="about" spy={true} smooth={true} duration={300} ><FaRegUser /></Link>
      <Link activeClass="active" className="nav-icon" to="experience" spy={true} smooth={true} duration={300} ><FaBook /></Link>
      <Link activeClass="active" className="nav-icon" to="portfolio" spy={true} smooth={true} duration={300} ><RiComputerLine /></Link>
      <Link activeClass="active" className="nav-icon" to="contact" spy={true} smooth={true} duration={300} ><BiMessageEdit /></Link>
    </nav>
  )
}

export default Nav;