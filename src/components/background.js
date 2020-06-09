import React from 'react';
import Particles from 'react-particles-js';
import { particlesConfig } from "../constants";


class AppBackGround extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Particles params={particlesConfig} />
        <div id="stars1" className="stars"></div>
        <div id="stars2" className="stars"></div>
        <div id="stars3" className="stars"></div>
      </React.Fragment>

    );
  }
}

export default AppBackGround;