import React, { Component } from 'react';
import ProfilePic from '../picture';
import profilePic from "../static/8-bit-josh.jpg";
import {Container} from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="container with-title App">
      <h1 className="title" >Joshua Owens</h1>
       <ProfilePic src={profilePic} />
       <button className="btn "  style={{width: "200px"}}>Stuff</button>

      </div>
    );
  }
}

export default App;
