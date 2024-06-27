import React from "react";
import "./Teams.css";
import team from "../../assets/teams/person.jpg";

const Teams = () =>{
    return (
        <>
       <section class="team-section">
    <div class="team-container">
        <div class="team-member">
            <div class="member-avatar">
                <img src= {team} alt="Team Member 1" />
            </div>
            <div class="member-info">
                <h3 class="member-name">Arinze Umehobi</h3>
                <p class="member-role">Frontend Developer</p>
                <p class="member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero quam, condimentum non orci id, blandit ultricies tortor.</p>
                <ul class="member-social-links">
                    <li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-github"></i></a></li>
                </ul>
            </div>
        </div>

        <div class="team-member">
            <div class="member-avatar">
                <img src={team} alt="Team Member 2" />
            </div>
            <div class="member-info">
                <h3 class="member-name">Isaac Adegboyega</h3>
                <p class="member-role">Frontend Developer</p>
                <p class="member-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <ul class="member-social-links">
                    <li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-github"></i></a></li>
                </ul>
            </div>
        </div>

        <div class="team-member">
            <div class="member-avatar">
                <img src= {team} alt="Team Member 3" />
            </div>
            <div class="member-info">
                <h3 class="member-name">Bernard Amegah</h3>
                <p class="member-role">Frontend Developer</p>
                <p class="member-description">Vivamus sit amet dui a odio tincidunt maximus at non magna. Nam aliquet nisl et magna fermentum, et efficitur augue varius.</p>
                <ul class="member-social-links">
                    <li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-github"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
        
        </>
    );
}

export default Teams;