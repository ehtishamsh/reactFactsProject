import React from "react";
import Image from "./Images/React-icon-small.png";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src={Image} alt="" width="38px" className="logo" />
          <h2>ReactFacts</h2>
        </div>
        <ul className="header_list">
          <li>
            <h4>React Course - Project 1</h4>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
