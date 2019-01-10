import React, { Component } from "react";
import Picture from "./picture";
import profilePic from "../../static/8-bit-josh.png";
import Container from "./container";
import Info from "./talkBubble";
import ContainerInfo from './statsContainer';

const dialogue = [
  "WELCOME",
  "Enjoy my portfolio",
  "...",
  "bye."
];

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogueCycle: 1,
      dialogue: 0 % 4
    };
    this.cycleDialogue = this.cycleDialogue.bind(this);
  }
  cycleDialogue() {
    console.log(this.state.dialogueCycle);
    this.setState(state => {
      return {
        dialogueCycle: state.dialogueCycle + 1,
        dialogue: state.dialogueCycle % 4
      };
    });
  }

  render() {
    return (
      <Container id="personalInfo" classname="personalInfo container">
            {/* <h1 className="title">Personal Info</h1> */}

        <Container classname="personalInfo-container-img">
          <Picture src={profilePic} onClick={this.cycleDialogue} />
          <Info>{dialogue[this.state.dialogue]}</Info>
        </Container>
        <ContainerInfo/>

        
      </Container>
    );
  }
}

export default Index;
