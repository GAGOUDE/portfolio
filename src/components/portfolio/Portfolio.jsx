import React, { useEffect, useState } from "react";

import "./portfolio.css";
import { portfolio } from '../../assets/dataPortfolio';
import PortfolioImageModal from "../modal/PortfolioImageModal";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  const [activeCategory, setActiveCategory] = useState('#category-all');
  // For modal
  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState({});

  const handleOpen = ({ imageSrc, imageAlt }) => {
    setOpen(true);
    setOpenImage({ src: imageSrc, alt: imageAlt });
  };

  console.log(openImage)

  const handleClose = () => {
    setOpen(false);
    setOpenImage({});
  };

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));

    setProjects(filtered);
  }, [filter]);

  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        {/* Portfolio Catégories */}
        <div className="portfolio__labels">
          <a
            href="#category-all"
            active={filter === "all"}
            onClick={() => {
              setFilter("all"); setActiveCategory('#category-all')
            }}

            className={activeCategory === '#category-all' ? 'active-category' : ''}>
            All
          </a>

          <a
            href="#category-web"
            active={filter === "application web"}
            onClick={() => {
              setFilter("application web"); setActiveCategory('#category-web')
            }}
            className={activeCategory === '#category-web' ? 'active-category' : ''}
          >
            Web Application
          </a>

          <a
            href="#category-landing"
            active={filter === "landing-page"}
            onClick={() => {
              setFilter("landing-page"); setActiveCategory('#category-landing')
            }}
            className={activeCategory === '#category-landing' ? 'active-category' : ''}
          >
            Landing Page
          </a>

          {/* <a
            href="/#category-mobile"
            active={filter === "application mobile"}
            onClick={() => {
              setFilter("application mobile"); setActiveCategory('#category-mobile')
            }}
            className={activeCategory === '#category-mobile' ? 'active-category' : ''}
          >
            Mobile Application
          </a> */}

          <a
            href="/#category-others"
            active={filter === "others"}
            onClick={() => {
              setFilter("others"); setActiveCategory('#others')
            }}
            className={activeCategory === '#others' ? 'active-category' : ''}
          >
            Others
          </a>
        </div>

        {/* Portfolio Détails */}
        <div className="container portfolio__container">
          {
            projects.map((item) => (
              item.filtered === true ? (
                <article key={item.id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={item.image} alt={item.title} onClick={() => handleOpen({ imageSrc: item.image, imageAlt: item.title })} />
                  </div>

                  <h3>{item.title}</h3>
                  <p><span>Technologies : </span>{item.tech}</p>
                  <div className="portfolio__item-cta">
                    <a href={item.gitHub} className='btn btn-secondary' rel="noreferrer" target='_blank'>Lien GitHub</a>
                    <a href={item.demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
                  </div>
                </article>) : null
            ))
          }

          {/* Modal */}
          {open && (
            < PortfolioImageModal
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
              srcImage={openImage.src}
              altImage={openImage.alt}
            />
          )}
        </div>

      </section>
    </>
  );
}

export default Portfolio;
