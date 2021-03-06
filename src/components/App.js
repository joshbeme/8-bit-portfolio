import React, { Component } from "react";
import PersonalInfo from "./personalInfo/index";
import Stats from "./stats/index";
import Pause from "./pause/index";
import Quests from "./quests/index";
import Mailbox from "./mailbox/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landing: "",
      display: true
    };
    this.click = this.click.bind(this);
  }
  click() {
    this.setState({
      landing: "disapeer",
      display: false
    });
    setTimeout(
      () =>
        this.setState({
          landing: this.state.landing + " none"
        }),
      700
    );
  }
  componentDidMount(){
    document.querySelector('body').style.overflow = 'hidden'
  }
  render() {
    if(!this.state.display) document.querySelector('body').style.overflow = 'auto'


    return (
      <div className="App">
        <div
          onClick={this.click}
          className={`LandingPage ${this.state.landing}`}
        >
          <h1 className="blonk landingText">Click anywhere to start</h1>
        </div>
        <Pause />
        <div className="" />
        <h1 className=" portfolio">Portfolio</h1>
        <PersonalInfo />
        <Stats />
        <Quests />
        <Mailbox />

      </div>
    );
  }
}

export default App;
