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
    this.setState({
      pause: !this.state.pause
    });
  }
 
  disableScroll() {
    if (window.addEventListener)window.addEventListener("DOMMouseScroll", preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    document.addEventListener('touchstart', (event)=>{ event.preventDefault();
        event.stopPropagation();}, false ) ; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
  }
  enableScroll() {
    if (window.removeEventListener)window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    document.removeEventListener('touchstart', ()=>{return null}, false ) ;    document.onkeydown = null;
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
          <IoMdPause />
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
