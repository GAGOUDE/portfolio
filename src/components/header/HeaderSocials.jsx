import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com">
              <ImLinkedin />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com">
              <FaGithub />
          </a>
    </div>
  )
}

export default HeaderSocials