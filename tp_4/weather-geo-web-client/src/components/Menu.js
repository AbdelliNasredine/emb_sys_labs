import React from "react";

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
          <li className="Menu-citie">Alger</li>
          <li className="Menu-citie">Oran</li>
          <li className="Menu-citie">Bechar</li>
          <li className="Menu-citie">Ouargla</li>
          <li className="Menu-citie">Anaba</li>
          <li className="Menu-citie">Sétife</li>
          <li className="Menu-citie">Saida</li>
          <li className="Menu-citie">Adrar</li>
          <li className="Menu-citie">Mascara</li>
          <li className="Menu-citie">Alger</li>
          <li className="Menu-citie">Oran</li>
          <li className="Menu-citie">Bechar</li>
          <li className="Menu-citie">Ouargla</li>
          <li className="Menu-citie">Anaba</li>
          <li className="Menu-citie">Sétife</li>
          <li className="Menu-citie">Saida</li>
          <li className="Menu-citie">Adrar</li>
          <li className="Menu-citie">Mascara</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
