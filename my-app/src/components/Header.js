import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const makeActive = (link) => navLinks[link]?.classList.add('active-link');
    const removeActive = (link) => navLinks[link]?.classList.remove('active-link');
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    const sectionMargin = 200;
    let currentActive = 0; 

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY ;
      const current = sections.length - [...sections].reverse().findIndex((section) => scrollPosition >= section.offsetTop) - 1;

      if (current !== currentActive && current >= 0 && current < sections.length) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
      }
    });
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container padd-15">
        <a href="#home" className="nav-logo">
          <h1>Shraddha</h1>
        </a>
        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
