import React from 'react';
import './about.css';
import ME from '../../assets/images/portrait1.jpg';
// import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsFolderCheck } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';
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
          <p>Je me suis reconverti dans le numérique suite à une découverte autodidactique. Ensuite, j'ai intégré une formation Bootcamp qui m'a permis d'obtenir le <span>Titre professionnel RNCP 6 Chef de projet d'applications Web et Mobile</span>. <br /> </p>

          <div className="about__cards">
            {/* Services */}
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Experience</h5>
              <small>Junior</small>
            </article>

            {/* Projets */}

            <Link to="portfolio" spy={true} smooth={true} duration={300}>
              <article className='about__card' style={{ cursor: "pointer" }}>
                <BsFolderCheck className='about__icon' />
                <h5>Projets</h5>
                <small>Applications Web</small>
              </article>
            </Link>

            <Link to="portfolio-mobile" spy={true} smooth={true} duration={300}>
              <article className='about__card' style={{ cursor: "pointer" }}>
                <FaMobileAlt className='about__icon' />
                <h5>Projets</h5>
                <small>Applications Mobiles</small>
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