import React, { useEffect, useState } from "react";
import "./portfolioMobile.css";
import { portfolioMobile } from '../../assets/dataPortfolioMobile';

function PortfolioMobile() {
    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);

    const [activeCategory, setActiveCategory] = useState('#category-mobile');

    useEffect(() => {
        setProjects(portfolioMobile);
    }, []);

    useEffect(() => {
        setProjects([]);

        const filtered = portfolioMobile.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));

        setProjects(filtered);
    }, [filter]);

    return (
        <>
            <section id="portfolio-mobile">

                {/* Portfolio Catégories */}
                <div className="portfolio__labels">
                    {/* <a
                        href="#category-all"
                        active={filter === "all"}
                        onClick={() => {
                            setFilter("all"); setActiveCategory('#category-all')
                        }}

                        className={activeCategory === '#category-all' ? 'active-category' : ''}>
                        All
                    </a> */}

                    <a
                        href="#category-mobile"
                        active={filter === "application mobile"}
                        onClick={() => {
                            setFilter("application mobile"); setActiveCategory('#category-mobile')
                        }}
                        className={activeCategory === '#category-mobile' ? 'active-category' : ''}
                    >
                        Mobile Application
                    </a>

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


                                    <h3>{item.title}</h3>
                                    <p><span>Technologies : </span>{item.tech}</p>
                                    <div className="portfolio__item-cta">
                                        <a href={item.demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Code et Live Test</a>
                                    </div>

                                    <div className="portfolio__item-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                </article>) : null
                        ))
                    }
                </div>

            </section>
        </>
    );
}

export default PortfolioMobile;
