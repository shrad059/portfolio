import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';

function App() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0); // Track progress

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
        }, 200); // Increase by 10% every 100 milliseconds

        const loaderTimer = setTimeout(() => {
            setLoading(false); // Stop loading after 1 second (adjust as needed)
        }, 2000);

        return () => {
            clearInterval(timer);
            clearTimeout(loaderTimer);
        };
    }, []);

    return (
        <div className="App">
            {loading ? (
                <div className="video-loader-container">
                    <video autoPlay loop muted className="video-loader">
                        <source src={process.env.PUBLIC_URL + "/loader.mp4"} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Progress Bar */}
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            ) : (
                <>
                    <Header />
                    <StarsBackground />
                    <MainContent />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
