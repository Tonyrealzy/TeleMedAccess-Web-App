import React from "react";
import "./Features.css";
import UserFriendly from "../../assets/features/experience.png";
import Secure from "../../assets/features/secure.png";
import Responsive from "../../assets/features/responsive.png";
import Api from "../../assets/features/api.png";

const Features = () => {
    return (
        <section className="features-section">
            <div className="features-content">
                <h2 className="section-title">Key Features</h2>
                <div className="features-grid">
                    <div className="feature">
                        <div className="feature-icon">
                            <img src={UserFriendly} alt="User-Friendly Interface" />
                        </div>
                        <div className="feature-details">
                            <h3 className="feature-title">User-Friendly Interface</h3>
                            <p className="feature-description">
                                Our platform is designed with the user in mind. With a visually appealing and intuitive interface, you can easily navigate through various features and access the services you need.
                            </p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">
                            <img src={Secure} alt="Secure and Reliable" />
                        </div>
                        <div className="feature-details">
                            <h3 className="feature-title">Secure and Reliable</h3>
                            <p className="feature-description">
                            Security is our top priority. We ensure your data is protected with the latest security measures, providing a reliable platform you can trust.    
                            </p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">
                            <img src={Responsive} alt="Responsive Design" />
                        </div>
                        <div className="feature-details">
                            <h3 className="feature-title">Responsive Design</h3>
                            <p className="feature-description">
                                Use TEMA on any device. Our platform is designed to be responsive, providing a seamless experience whether you are on a smartphone, tablet, or computer.
                            </p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">
                            <img src={Api} alt="API Integration" />
                        </div>
                        <div className="feature-details">
                            <h3 className="feature-title">API Integration</h3>
                            <p className="feature-description">
                            Our platform integrates with various external APIs to fetch and display relevant data, enhancing the user experience and providing up-to-date medical information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;