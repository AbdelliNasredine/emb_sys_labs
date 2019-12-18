import React, { Component } from "react";
import WillayaInformation from "./WillayaInformation";

import cities from "../data/cities.test.json";
import "../styles/Menu.css";

const API_BASE_URL = "http://localhost:8000";

export default class Menu extends Component {
  state = {
    selectedId: null,
    isLoading: false,
    data: []
  };

  constructor() {
    super();
    this.handleWillayaClick = this.handleWillayaClick.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${API_BASE_URL}/wilaya/all`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  handleWillayaClick(event) {
    const id = event.target.id;
    console.log(id);
    this.setState({ selectedId: id });
  }
  render() {
    const { selected, isLoading } = this.state;
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
          {isLoading == true ? (
            <div className="Menu-loading"></div>
          ) : (
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
                      <WillayaInformation {...c} />
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
          )}
        </div>
      </div>
    );
  }
}
