import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';

function App() {
  return (
    <div className="App">
      <StarsBackground/>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
