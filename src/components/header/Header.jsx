import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/portrait1.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Bonjour, je suis</h5>
        <h1> Gaël-Freddy GAGOUDE</h1>
        <h5 className='text-light'>Développeur frontend React JS</h5>

        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt='me' />
        </div>
      </div>
    </header>
  )
}

export default Header;