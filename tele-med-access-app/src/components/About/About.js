import React from "react";
import "./About.css";
import heart from "../../assets/about/heart.jpg"
import medkit from "../../assets/about/medkit.png"
import scope from "../../assets/about/scope.png"
import temperature from "../../assets/about/temperature.png"



const About = () => {
    return (
    <>
    <section className="about-section" id="about">
            <div className="about-content">
            <h2 className="about-title">About</h2>
                <img
                    src={heart}
                    alt="Me sitting with a laptop"
                    className="about-image"
                />
                <ul className="about-items">
                    <li className="about-item">
                        <img src={medkit} alt="Cursor icon" />
                        <div className="about-item-text">

                            <p>
                            Welcome to TeleMedAccess (TEMA), your gateway to bridging the healthcare divide between urban and rural communities. Our mission is to address the critical challenge of limited access to healthcare services faced by rural dwellers. 
                            Often confronted with inadequate medical facilities and a scarcity of healthcare professionals, rural areas struggle to meet their populations' healthcare needs. 
                            TEMA is here to change that.

                            </p>
                        </div>
                    </li>
                    <li className="about-item">
                        <img src={scope} alt="Server icon" />
                        <div className="about-item-text">
                            <p>
                    
                            Our dedicated team of professionals is united by a single purpose: connecting rural communities with city-based healthcare providers. 
                            Through our innovative web platform, TEMA, we facilitate remote access to medical consultations, advice, and support.
                            This initiative is designed to be scalable and adaptable, making it a global solution for remote healthcare access.

                            </p>
                        </div>
                    </li>
                    <li className="about-item">
                        <img src={temperature} alt="UI icon" />
                        <div className="about-item-text">
                            <p>
                            At TEMA, we believe that everyone deserves quality healthcare, no matter where they live. 
                            Our platform leverages the latest technology to ensure that remote healthcare is accessible, efficient, and reliable.
                            Join us in our mission to make healthcare more inclusive and equitable.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </>
    );
};

export default About;