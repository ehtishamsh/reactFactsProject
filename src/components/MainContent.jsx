import React from "react";
function MainContent({ darkmode }) {
  return (
    <main className={darkmode ? "dark" : ""}>
      <h1>Fun facts about React</h1>
      <ul>
        <li>
          <span> Was first released in 2013</span>
        </li>
        <li>
          <span>Was originally created by Jordan Walke</span>
        </li>
        <li>
          <span>Has well over 100K stars on GitHub</span>
        </li>
        <li>
          <span>Is maintained by Facebook</span>
        </li>
        <li>
          <span>
            Powers thousands of enterprise apps, including mobile apps
          </span>
        </li>
      </ul>
    </main>
  );
}

export default MainContent;
