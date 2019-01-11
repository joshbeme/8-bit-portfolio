import React, { Component } from "react";
import Skill from "./skill";
import Limit from "./howMany";
class Index extends Component {
  render() {
    return (
      <div id="stats" className="container with-title">
        <h1 className="Stats title">Stats</h1>
        <Limit />
        <div id="stats-skills" >
          <Skill stars={4}>HTML</Skill>
          <Skill stars={4}>React</Skill>
          <Skill stars={4}>CSS</Skill>
          <Skill stars={4}>JavaScript</Skill>
          <Skill stars={3}>Node</Skill>
          <Skill stars={3}>Express</Skill>
          <Skill stars={3}>MongoDB</Skill>
          <Skill stars={2}>Atlas</Skill>

          <Skill stars={3}>Sass</Skill>
          <Skill stars={2}>Jest</Skill>
          <Skill stars={2}>Mocha</Skill>
          <Skill stars={2}>Chai</Skill>
          <Skill stars={3}>Redux</Skill>
          <Skill stars={3}>Next.js</Skill>
          <Skill stars={3}>Webpack</Skill>
          <Skill stars={3}>react-router</Skill>
          <Skill stars={2}>Brain.js</Skill>
          <Skill stars={2}>App Engine</Skill>
          <Skill stars={1}>Docker</Skill>
          <Skill stars={4}>Gulp</Skill>

        </div>
      </div>
    );
  }
}

export default Index;
