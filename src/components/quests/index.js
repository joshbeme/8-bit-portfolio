import React, { Component } from "react";
import IndexText from './questIndex';

class Index extends Component {
  render() {
    return (
      <div id="quests" className="container with-title">
        <h1 className="title">Quests</h1>
        <div className="quests-container" >
          <IndexText />
          <div className="quests-display container"></div>
        </div>
      </div>
    );
  }
}

export default Index;
