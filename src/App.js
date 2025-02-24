import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import StarsBackground from "./components/StarsBackground";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";

function App() {
    const [showButton, setShowButton] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    
    // Initialize state from localStorage
    const [showStars, setShowStars] = useState(() => {
        const saved = localStorage.getItem("showStars");
        return saved ? JSON.parse(saved) : false;
    });

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => setShowButton(window.scrollY > 300);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Persist star state
    useEffect(() => {
        localStorage.setItem("showStars", JSON.stringify(showStars));
    }, [showStars]);

    const toggleStarBackground = () => {
        setIsFlipping(true);
        setShowStars(prev => !prev);
    };

    const scrollToTop = () => {
        setIsScrolling(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setIsScrolling(false), 500);
    };

    return (
        <div className="App">
            <Header />
            {showStars && <StarsBackground />}
            <MainContent />
            <Footer />

            <button 
                className="star-toggle"
                onClick={toggleStarBackground}
                onAnimationEnd={() => setIsFlipping(false)}
            >
                <FontAwesomeIcon 
                    icon={showStars ? solidStar : regularStar} 
                    size="2x"
                    className={`star-icon ${isFlipping ? 'flip-animation' : ''} ${showStars ? 'star-active' : 'star-inactive'}`}
                />
            </button>

            {showButton && (
                <button
                    className={`scroll-to-top ${isScrolling ? "scrolling" : ""}`}
                    onClick={scrollToTop}
                    onTransitionEnd={() => setIsScrolling(false)}
                >
                    <FontAwesomeIcon icon={faSpaceAwesome} style={{ fontSize: '32px' }} />
                </button>
            )}
        </div>
    );
}

export default App;