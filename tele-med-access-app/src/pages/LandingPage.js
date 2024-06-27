import React from "react";
import './styles/LandingPage.css';
import PrimaryButton from '../components/Button/PrimaryButton';
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import doctor from "../assets/hero/doctor.jpg"

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="page">
      <NavBar />
      <section className="section">
            <div className="hero-content">
                <h1 className="title">Welcome to TeleMedAccess-Web-App</h1>
                <p className="description">Bridging the gap between healthcare and rural communities.</p>
                <PrimaryButton onClick={() => navigate('/initSession')}>GET STARTED</PrimaryButton>
            </div>
            <div className="hero-image-container">
                <img src={doctor} alt="Hero Pic" className="hero-pic" />
            </div>
        </section>
    </div>
    </> 
  );
};

export default LandingPage;
