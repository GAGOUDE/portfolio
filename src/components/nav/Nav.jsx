import React from 'react';
import './nav.css';
import { FaHome, FaRegUser, FaBook } from 'react-icons/fa';
import { BiMessageEdit } from 'react-icons/bi';
import { RiComputerLine } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <Link activeClass="active" className="nav-icon" to="home" spy={true} smooth={true} duration={300}>
        <FaHome />
        <p className="nav-item">Accueil</p>
      </Link>

      <Link activeClass="active" className="nav-icon" to="about" spy={true} smooth={true} duration={300}>
        <FaRegUser />
        <p className="nav-item">Présentation</p>
      </Link>

      <Link activeClass="active" className="nav-icon" to="experience" spy={true} smooth={true} duration={300}>
        <FaBook />
        <p className="nav-item">Compétences</p>
      </Link>

      <Link activeClass="active" className="nav-icon" to="portfolio" spy={true} smooth={true} duration={300}>
        <RiComputerLine />
        <p className="nav-item">Projets</p>
      </Link>

      <Link activeClass="active" className="nav-icon" to="contact" spy={true} smooth={true} duration={300}>
        <BiMessageEdit />
        <p className="nav-item">Contact</p>
      </Link>
    </nav>
  )
}

export default Nav;