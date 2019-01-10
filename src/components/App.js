import React, { Component } from 'react';
import PersonalInfo from './personalInfo/index';
import Stats from './stats/index';
import Pause from './pause/index';
import Quests from './quests/index';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Pause></Pause>
      <h1 className="title" >Portfolio</h1>
       <PersonalInfo/>
       {/* <button className="btn is-primary"  style={{width: "200px"}}>Stuff</button> */}
      <Stats/>
      <Quests/>
      </div>
    );
  }
}

export default App;
