import React from "react";
import "./Teams.css";
import image from "../../assets/teams/ari.png";
import image1 from "../../assets/teams/ike.png";
import image2 from "../../assets/teams/ben.png";

const Teams = () => {
    return (
        <section className="team-section">
                 <h2>Team Members</h2>
            <div className="team-container">
                <div className="team-member">
                    <div className="member-avatar">
                        <img src={image} alt="Arinze Umehobi" />
                    </div>
                    <div className="member-info">
                        <h3 className="member-name">Arinze Umehobi</h3>
                        <p className="member-role">FullStack Developer</p>
                        <ul className="member-social-links">
                            <li><a href="https://www.linkedin.com/in/arinzeumehobi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="https://x.com/tonyrealzy/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/Tonyrealzy/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="team-member">
                    <div className="member-avatar">
                        <img src={image1} alt="Isaac Adegboyega" />
                    </div>
                    <div className="member-info">
                        <h3 className="member-name">Isaac Adegboyega</h3>
                        <p className="member-role">Frontend Developer</p>
                        <ul className="member-social-links">
                            <li><a href="https://www.linkedin.com/in/isaac-adegboyega-a64159220/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="https://twitter.com/Isaac_degboyega/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/isaaco24/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="team-member">
                    <div className="member-avatar">
                        <img src={image2} alt="Bernard Amegah" />
                    </div>
                    <div className="member-info">
                        <h3 className="member-name">Bernard Amegah</h3>
                        <p className="member-role">Frontend Developer</p>
                        <ul className="member-social-links">
                            <li><a href="https://www.linkedin.com/in/bernard-amegah/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="https://x.com/bern587/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/brwngld/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teams;