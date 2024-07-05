import React from "react";
import Logo from "../../assets/images/TeleMedAccess.png";


const Header = ({ phase, percentage = 0, logo }) => (
  <>
    <section>
      {/* <StatusBar phase={phase} percentage={percentage} /> */}
    </section>
    {logo && <img src={Logo} alt="Logo" width={100} height={100} />}
  </>
);

export default Header;