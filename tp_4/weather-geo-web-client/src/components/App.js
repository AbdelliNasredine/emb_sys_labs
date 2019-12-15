import React, { Component } from "react";
import MapboxWeatherMap from "./MapboxWeatherMap";
import Menu from "./Menu";

import "../styles/App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      stations: [],
      isLoading: false
    };
  }

  componentDidMount() {
    // this.setState({ isLoading: true });
    // fetch("/test.json")
    //   .then(res => res.json())
    //   .then(winfo => {
    //     this.setState({ isLoading: false, stations: winfo });
    //     console.log(winfo);
    //   });
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <MapboxWeatherMap/>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Menu />
//       <MapboxWeatherMap />
//     </div>
//   );
// }

// export default App;
