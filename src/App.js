import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import PortfolioMobile from './components/portfolioMobile/PortfolioMobile';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <PortfolioMobile />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
