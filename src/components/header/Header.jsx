import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Bonjour, je suis</h5>
        <h1> Gaël-Freddy GAGOUDE</h1>
        <h5 className='text-light'>Développeur Web et Mobile <br /> JavaScript | React JS & Native | WordPress</h5>

        <CTA />
        <HeaderSocials />

      </div>
    </header>
  )
}

export default Header;