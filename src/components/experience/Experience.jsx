import React from 'react';
import './experience.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiJquery } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiFirebase } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si';
import { AiFillSetting } from 'react-icons/ai';
import { SiTailwindcss } from 'react-icons/si';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>Mes compétences</h2>

      <div className="container experience__container">
        {/* FRONTEND */}
        <div className="experience__frontend">
          <h3>Front-End</h3>

          <div className="experience__content">
            <article className="experience__details">
              <div>
                <AiFillHtml5 className='experience__details-icon' />
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <FaCss3Alt className='experience__details-icon' />
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <FaBootstrap className='experience__details-icon' />
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <FaSass className='experience__details-icon' />
                <h4>SASS</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <SiTailwindcss className='experience__details-icon' />
                <h4>Tailwind</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <SiJquery className='experience__details-icon' />
                <h4>jQuery</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <DiJavascript1 className='experience__details-icon' />
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <FaReact className='experience__details-icon' />
                <h4>React JS | Native</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <SiMaterialui className='experience__details-icon' />
                <h4>Material UI</h4>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND */}
        <div className="experience__backend">
          <h3>Back-End</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <FaNodeJs className='experience__details-icon' />
                <h4>Node JS | Express JS</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <SiMongodb className='experience__details-icon' />
                <h4>Mongo DB</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <SiFirebase className='experience__details-icon' />
                <h4>Firebase</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <AiFillSetting className='experience__details-icon' />
                <h4>API REST</h4>
              </div>
            </article>

          </div>
        </div>

        {/* CMS */}
        <div className="experience__backend">
          <h3>CMS</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <FaNodeJs className='experience__details-icon' />
                <h4>Node JS | Express JS</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <SiMongodb className='experience__details-icon' />
                <h4>Mongo DB</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <SiFirebase className='experience__details-icon' />
                <h4>Firebase</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <AiFillSetting className='experience__details-icon' />
                <h4>API REST</h4>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience