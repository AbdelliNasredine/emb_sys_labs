import React from "react";
import cities from "../data/cities.test.json";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="Menu-container">
      <div className="Menu-header">
        <span className="Menu-text-small">App made by abdelli Nasredine</span>
        <h2 className="Menu-title">Algeria weather</h2>
        <p className="Menu-app-description">
          This application is the front end of Weather Information System REST
          API , you can see all the weather data of the major algeria's cities,
          Hope you like it
        </p>
      </div>
      <div className="Menu-main">
        <span className="Menu-text-medium">Algerie's cities</span>
        <ul className="Menu-cities">
          {cities.map(c => (
            <li key={c.willaya} className="Menu-citie">
              {c.willaya}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
