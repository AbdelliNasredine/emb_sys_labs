import React from "react";

import "../styles/Menu.css";

function Menu() {
  return (
    <div className="Menu-container">
      <div className="Menu-header">
        <h2 className="Menu-title">Algeria weather</h2>
        <p className="Menu-app-description">
          This application is the front end of Weather Information System REST
          API , you can see all the weather data of the major algeria's cities,
          Hope you like it
        </p>
      </div>
    </div>
  );
}

export default Menu;
