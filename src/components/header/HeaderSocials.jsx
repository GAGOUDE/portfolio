import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ga%C3%ABl-freddy-gagoude-a764b769/">
        <ImLinkedin style={{ fontSize: 28 }} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/GAGOUDE">
        <FaGithub style={{ fontSize: 28 }} />
      </a>
    </div>
  )
}

export default HeaderSocials