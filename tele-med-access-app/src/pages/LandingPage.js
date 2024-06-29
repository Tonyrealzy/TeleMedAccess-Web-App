import React from "react";
import "./styles/LandingPage.css";
import PrimaryButton from "../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import doctor from "../assets/hero/doctor.jpg";
import About from "../components/About/About";
import Features from "../components/Features/Features";
import Teams from "../components/Teams/Teams";
import FAQ from "../components/FAQ/Faq";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <NavBar />
      <section className="section" id="home">
        <div className="hero-content">
          <h1 className="title">Welcome to TEMA</h1>
          <p className="description">
            Bridging the gap between healthcare and rural communities.
          </p>
          <PrimaryButton onClick={() => navigate("/initSession")}>
            GET STARTED
          </PrimaryButton>
        </div>
        <div className="hero-image-container">
          <img src={doctor} alt="Hero Pic" className="hero-pic" />
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="teams">
        <Teams />
      </section>
      <section id="faq">
        <FAQ />
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
