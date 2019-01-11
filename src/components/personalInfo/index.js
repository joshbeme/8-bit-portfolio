import React, { Component } from "react";
import Picture from "./picture";
import profilePic from "../../static/8-bit-josh.png";
import Container from "./container";
import TalkBubble from "./talkBubble";
import ContainerInfo from "./statsContainer";

const dialogue = ["WELCOME", "Enjoy my portfolio", "...", "bye."];

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogueCycle: 0,
      display: "",
      blink: "blink"
    };
    this.cycleDialogue = this.cycleDialogue.bind(this);
  }
  cycleDialogue() {
    if (this.state.dialogueCycle >= 3) {

      this.setState({
        display: "none"
      });

      
    } else {

      if (this.state.dialogueCycle === 2) {
        this.setState({
          blink: ""
        });}
      this.setState(state => {
        return {
          dialogueCycle: state.dialogueCycle + 1
        };
      })

    }
  }

  render() {
    return (
      <Container id="personalInfo" classname="personalInfo container">
        {/* <h1 className="title">Personal Info</h1> */}

        <Container classname="personalInfo-container-img">
          <Picture src={profilePic} onClick={this.cycleDialogue} />
          <TalkBubble class={this.state.blink} display={this.state.display}>
            {dialogue[this.state.dialogueCycle]}
          </TalkBubble>
        </Container>
        <ContainerInfo />
      </Container>
    );
  }
}

export default Index;
