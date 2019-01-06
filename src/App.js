import React, { Component } from 'react';
import logo from './logo.svg';
import ProfilePic from './picture';
import profilePic from "./static/8-bit-josh.jpg";

class App extends Component {
  render() {
    return (
      <div className="container with-title App">
      <h1 className="title" >Joshua Owens</h1>
       <ProfilePic src={profilePic} />
       <button className="btn " >Stuff</button>

      </div>
    );
  }
}

export default App;
