import React, { useEffect, useState } from "react";
import "../styles/hero.css";

const HeroSection = () => {
  const texts = ["Full Stack Developer", "MERN & Frontend Specialist"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    },  4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Hello, I'm <span>Karishma</span>
        </h1>

        <h2 key={index} className="hero-subtitle animate-subtitle">
          {texts[index]}
        </h2>

      <div className="hero-buttons mt-4">
  <a href="#contact" className="hire-btn me-3">
    Hire Me
  </a>
  <a href="/resume.pdf" download className="resume-btn">
    Download Resume
  </a>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
