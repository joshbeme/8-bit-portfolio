import React, { Component } from "react";
import Modal from './modal';
import { IoMdPause } from "react-icons/io";

class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            paused: false,
        }
        this.pause = this.pause.bind(this);
    }
    pause(){
        this.setState({
            pause: !this.state.pause
        })
    }

  render() {
      
    return (<div>
        <button style={{display:this.state.pause ? 'none' : 'block'}} onClick={this.pause} className="btn  pause is-error">
            <IoMdPause/>
        </button>
        <Modal click={this.pause} resume={this.pause} display={this.state.pause ? 'block' : 'none'} hover={e =>this.hoverHandler(e)}></Modal>
        </div>
    )
  }
}

export default Index;
