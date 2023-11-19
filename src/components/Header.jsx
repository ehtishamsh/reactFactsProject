import React from "react";
import Image from "./Images/React-icon-small.png";

function Header({ darkmode, toggleDarkMode }) {
  return (
    <header className={darkmode ? "dark" : ""}>
      <nav>
        <div>
          <img src={Image} alt="" width="38px" className="logo" />
          <h2>ReactFacts</h2>
        </div>
        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
