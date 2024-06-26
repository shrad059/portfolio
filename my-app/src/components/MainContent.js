import React from 'react';
import Home from './Home'; // Create a separate component for Home
import About from './About'; // Create a separate component for About
import Portfolio from './Portfolio'; // Create a separate component for Portfolio
import Contact from './Contact'; // Create a separate component for Contact
// import StarsBackground from './StarsBackground';

const MainContent = () => {
  return (
    <main className="main-content">
      {/* <StarsBackground/> */}
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default MainContent;
