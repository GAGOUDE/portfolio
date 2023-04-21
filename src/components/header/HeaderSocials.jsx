import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gael-freddy-gagoude-a764b769/">
        <ImLinkedin />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/GAGOUDE">
        <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocials