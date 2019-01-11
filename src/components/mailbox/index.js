import React, { Component } from "react";
import mailbox from "../../static/Mailbox.png";
import cloud from "../../static/Cloud.png";
import Info from "./info";


class Index extends Component {
  render() {
    return (
      <div id="mailbox">
        <h1 className="mailboxTitle">Mailbox</h1>
        <img className="mailboxImg" src={mailbox} />
        <img className="cloud1" src={cloud} />
        <img className="cloud2" src={cloud} />
        <Info />
      </div>
    );
  }
}

export default Index;
