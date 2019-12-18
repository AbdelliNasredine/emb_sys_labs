import React, { Component } from "react";
import WillayaInformation from "./WillayaInformation";

import cities from "../data/cities.test.json";
import "../styles/Menu.css";

export default class Menu extends Component {
  state = {
    selectedId: null
  };

  constructor() {
    super();
    this.handleWillayaClick = this.handleWillayaClick.bind(this);
  }

  handleWillayaClick(event) {
    const id = event.target.id;
    console.log(id);
    this.setState({ selectedId: id });
  }
  render() {
    const selected = this.state.selectedId;
    return (
      <div className="Menu-container">
        <div className="Menu-header">
          <span className="Menu-text-small">App made by abdelli Nasredine</span>
          <h2 className="Menu-title">Algeria weather</h2>
          <p className="Menu-app-description">
            This application is the front end of Weather Information System REST
            API , you can see all the weather data of the major algeria's
            cities, Hope you like it
          </p>
        </div>
        <div className="Menu-main">
          <span className="Menu-text-medium">Algerie's cities</span>
          <ul className="Menu-cities">
            {cities.map(c => {
              if (selected == c.code) {
                return (
                  <li
                    key={c.code}
                    id={c.code}
                    className="Menu-citie active"
                    onClick={this.handleWillayaClick}
                  >
                    {c.willaya}
                    <WillayaInformation {...c}/>
                  </li>
                );
              }
              return (
                <li
                  key={c.code}
                  id={c.code}
                  className="Menu-citie"
                  onClick={this.handleWillayaClick}
                >
                  {c.willaya}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
