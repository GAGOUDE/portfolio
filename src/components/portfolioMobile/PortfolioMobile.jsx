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
                <h5>Pour tester les applications, veuillez télécharger l'application <a href="https://expo.dev/client" rel="noreferrer" target='_blank'>Expo Go</a> et scanner le QR code du Live test.</h5>

                {/* Portfolio Catégories */}
                <div className="portfolio__labels">
                    <a
                        href="#category-mobile"
                        // active={filter === "application mobile"}
                        onClick={() => {
                            setFilter("application mobile"); setActiveCategory('#category-mobile')
                        }}
                        className={activeCategory === '#category-mobile' ? 'active-category' : ''}
                    >
                        Mobile Application
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
                                        {item.gitHub ? (
                                            <div className="portfolio__item-cta-link">
                                                <a href={item.gitHub} className='btn btn-secondary' rel="noreferrer" target='_blank'>GitHub</a>
                                                <a href={item.demoAndroid} className='btn btn-primary test-bg bg-android' rel="noreferrer" target='_blank'>Android</a>
                                                <a href={item.demoIos} className='btn btn-primary test-bg' rel="noreferrer" target='_blank'>iOS</a>
                                            </div>
                                        ) : (
                                            <a href={item.demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Code et Live Test</a>
                                        )}

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
