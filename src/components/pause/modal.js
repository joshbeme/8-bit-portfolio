import React, { Component } from "react";
import Option from './pauseOptions';

class Modal extends Component {
    constructor(props){
        super(props);
        this.state={
       
        }
        this.resume = React.createRef();
        this.info = React.createRef();
        this.stats = React.createRef();
        this.quests = React.createRef();
        this.mailbox = React.createRef();
        this.resumeHandler = this.resumeHandler.bind(this);
        this.infoHandler = this.infoHandler.bind(this);
        this.statsHandler = this.statsHandler.bind(this);
        this.questsHandler = this.questsHandler.bind(this);
        this.mailboxHandler = this.mailboxHandler.bind(this);

    }
    resumeHandler(){
        this.resume.current.checked = true
    }
    infoHandler(){
        this.info.current.checked = true

    }
    statsHandler(){
        this.stats.current.checked = true

    }
    questsHandler(){
        this.quests.current.checked = true

    }
    mailboxHandler(){
        this.mailbox.current.checked = true

    }
  render() {
    const {resume, info, stats, quests, mailbox} = this

    return (
        <div style={{display: this.props.display}} className="entireModal" >
      <div  className="container pauseMenu">
      <h2 style={{textDecoration: "underline"}} >Paused</h2>
        <Option click={this.props.click} hover={this.resumeHandler} makeRef={resume} name="Resume" ></Option>
        <Option hover={this.infoHandler} makeRef={info} name="Info" ></Option>
        <Option hover={this.statsHandler} makeRef={stats} name="Stats" ></Option>
        <Option hover={this.questsHandler} makeRef={quests} name="Quests" ></Option>
        <Option hover={this.mailboxHandler} makeRef={mailbox} name="Mailbox" ></Option>
      </div>
      </div>
    );
  }
}
export default Modal;
