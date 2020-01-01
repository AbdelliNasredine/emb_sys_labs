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
        // console.log(data);
        data.data.forEach(w => {
          //console.log(w);
          fetch(`${API_BASE_URL}/show/${w.name}`)
            .then(res => res.json())
            .then(data => {
              console.log(data);
            });
        });
        this.setState({isLoading: false, data: data.data});
      });
  }

  handleWillayaClick(event) {
    const id = event.target.id;
    this.setState({ selectedId: id });
  }
  render() {
    const { selectedId, isLoading, data } = this.state;
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
              {data.map((wilaya, idx) => {
                if (selectedId == wilaya.code) {
                  return (
                    <li
                      key={idx}
                      id={wilaya.code}
                      className="Menu-citie active"
                      onClick={this.handleWillayaClick}
                    >
                      {wilaya.name}
                      <WillayaInformation {...wilaya} />
                    </li>
                  );
                }
                return (
                  <li
                    key={idx}
                    id={wilaya.code}
                    className="Menu-citie"
                    onClick={this.handleWillayaClick}
                  >
                    {wilaya.name}
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
