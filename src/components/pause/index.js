import React, { Component } from "react";
import Modal from "./modal";
import { IoMdPause } from "react-icons/io";

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) {
    e.stopPropagation();  
    e.preventDefault()};
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}



class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: false
    };
    this.pause = this.pause.bind(this);
  }
  pause() {
    this.setState((prevState)=>({
      pause: !prevState.pause
    }));
  }
 
  disableScroll() {
   
    document.querySelector('body').style.overflow = 'hidden'
  }
  enableScroll() {

    document.querySelector('body').style.overflow = 'auto'
  }
  componentDidMount(){


  }
  componentWillUnmount() {
  }
  render() {
    if (this.state.pause) {
        this.disableScroll()
      }
      else{
          this.enableScroll();
      }

    return (
      <div>
        <button
          style={{ display: this.state.pause ? "none" : "block" }}
          onClick={this.pause}
          className="btn  pause is-error"
        >
          <IoMdPause  className="pauseIcon" />
        </button>
        <Modal
          click={this.pause}
          resume={this.pause}
          display={this.state.pause ? "block" : "none"}
          hover={e => this.hoverHandler(e)}
        />
      </div>
    );
  }
}

export default Index;
