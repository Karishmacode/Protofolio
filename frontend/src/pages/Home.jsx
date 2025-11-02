import React from "react";
 import "../styles/global.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutCard from "../components/AboutCard";
import ProjectsSection from "../components/ProjectsSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
 <AboutCard />
 <ProjectsSection />
 <ContactForm />

      <Footer />
     
    </>
  );
};

export default Home;
