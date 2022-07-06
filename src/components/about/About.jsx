import React from 'react';
import './about.css';
import ME from '../../assets/portrait1.jpg';
// import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsFolderCheck } from 'react-icons/bs';
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>Présentation</h2>

      {/* Image */}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="portrait" />
          </div>
        </div>
      

      {/* Contenu */}
        <div className="about__content">
          {/* Présentation */}
          <p>Je suis diplômé d'un <span>Master 2 recherche en microbiologie fondamentale et appliquée</span>, et je me suis reconverti dans le numérique. <br /> Dans un premier temps, j'ai appris à coder par le biais d'un apprentissage en autodidacte. Ensuite, j'ai intégré une formation Bootcamp qui m'a permis d'obtenir le <span>Titre professionnel RNCP 6 Chef de projet d'applications Web et mobile</span>. <br /> </p>

          <div className="about__cards">
            {/* Experience */}
            {/* <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Clients</h5>
              <small>Secteurs public et privé</small>
            </article> */}

            {/* Services */}
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Experience</h5>
              <small>Débutant</small>
            </article>

            {/* Projets */}
           
            <Link to="portfolio" spy={true} smooth={true} duration={300}>
              <article className='about__card' style={{cursor: "pointer"}}>
                <BsFolderCheck className='about__icon' />
                <h5>Projets</h5>
                <small>Environ une dizaine</small>
              </article>
            </Link>
          </div>

          <a href="#contact" className='btn btn-primary'>Me contacter</a>
        </div>
      </div>
    </section>
  )
}

export default About;