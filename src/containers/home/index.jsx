import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const interests = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Data Science Enthusiast",
  "Problem Solver",
  "Tech Explorer",
  "Lifelong Learner",
];

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [restartAnimation, setRestartAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % interests.length);
      setRestartAnimation(true);
      setTimeout(() => setRestartAnimation(false), 100);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleNavigateToPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1 className="static-text">Hi, I'm Siddhant Rai</h1>
        <h1
          key={currentIndex}
          className={`dynamic-text ${restartAnimation ? "typing" : ""}`}
        >
          {interests[currentIndex]}
        </h1>
      </div>

      <div className="home__contact-me">
        <button onClick={handleNavigateToPortfolio}>Portfolio</button>
      </div>
    </section>
  );
};

export default Home;
