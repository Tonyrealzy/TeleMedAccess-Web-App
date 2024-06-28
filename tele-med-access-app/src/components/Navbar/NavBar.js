import React, { useState } from "react";
import "./NavBar.css";
import burgerLogo from "../../assets/header/menu.png";
import closeLogo from "../../assets/header/close.png";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav className="navigation" role="navigation">
            <a href="/" className="logo"><img src="logo-image.png" alt="TEMA" /></a>
                <div className="navmenu">
                    <img
                        className="navbtn"
                        src={showMenu ? closeLogo : burgerLogo}
                        alt="menu-button"
                        aria-label={showMenu ? "Close menu" : "Open menu"}
                        onClick={() => setShowMenu(!showMenu)}
                    />
                    <ul className={`listItems ${showMenu ? 'show' : ''}`} role="menu">
                        <li role="menuitem"><a href="#home">Home</a></li>
                        <li role="menuitem"><a href="#about">About</a></li>
                        <li role="menuitem"><a href="#features">Features</a></li>
                        <li role="menuitem"><a href="#teams">Teams</a></li>
                        <li role="menuitem"><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;