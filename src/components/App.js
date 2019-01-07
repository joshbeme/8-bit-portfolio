import React, { Component } from 'react';
import PersonalInfo from './personalInfo/index'

class App extends Component {
  render() {
    return (
      <div className="container with-title App">
      <h1 className="title" >Joshua Owens</h1>
       <PersonalInfo/>
       <button className="btn is-primary"  style={{width: "200px"}}>Stuff</button>

      </div>
    );
  }
}

export default App;
