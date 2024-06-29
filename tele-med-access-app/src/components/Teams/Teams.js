import React from "react";
import "./Teams.css";
import image from "../../assets/teams/profile.png";
import image1 from "../../assets/teams/profile1.png";
import image2 from "../../assets/teams/profile2.png";

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
                        <p className="member-role">Frontend Developer</p>
                        <p className="member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero quam, condimentum non orci id, blandit ultricies tortor.</p>
                        <ul className="member-social-links">
                            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github" aria-hidden="true"></i></a></li>
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
                        <p className="member-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        <ul className="member-social-links">
                            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github" aria-hidden="true"></i></a></li>
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
                        <p className="member-description">Vivamus sit amet dui a odio tincidunt maximus at non magna. Nam aliquet nisl et magna fermentum, et efficitur augue varius.</p>
                        <ul className="member-social-links">
                            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teams;