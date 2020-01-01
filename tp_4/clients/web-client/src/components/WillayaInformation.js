import React from "react";

import "../styles/WillayaInformation.css";

const Willaya = (props) => {
  console.log(props);
  return (
    <div className="WillayaInformation">
      <li className="item"><span>Temp:</span> 32°c</li>
      <li className="item"><span>Wind:</span> N/A</li>
      <li className="item"><span>Humidity:</span> 1.2%</li>
      <li className="item"><span>Time:</span> Sundy 21, 2019</li>
    </div>
  );  
}

export default Willaya;