import React, { Component } from "react";
import Option from "./pauseOptions";
import Sound from "react-sound";
import menu from "../../static/menu.mp3";
import smanager from "soundmanager2";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: Sound.status.STOPPED
    };
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
    this.onSound = this.onSound.bind(this);
    this.touch = this.touch.bind(this);
  }
  touch() {
    this.setState({
      play: Sound.status.PLAYING
    });
  }
  resumeHandler() {
    this.resume.current.checked = true;
    this.setState({
      play: Sound.status.PLAYING
    });
  }
  infoHandler() {
    this.info.current.checked = true;
    this.setState({
      play: Sound.status.PLAYING
    });
  }
  statsHandler() {
    this.stats.current.checked = true;
    this.setState({
      play: Sound.status.PLAYING
    });
  }
  questsHandler() {
    this.quests.current.checked = true;
    this.setState({
      play: Sound.status.PLAYING
    });
  }
  mailboxHandler() {
    this.mailbox.current.checked = true;
    this.setState({
      play: Sound.status.PLAYING
    });
  }
  onSound() {
    this.setState({
      play: Sound.status.PAUSED
    });
  }
  componentDidMount() {
    smanager.ignoreMobileRestrictions = true;
  }
  render() {
    const { resume, info, stats, quests, mailbox } = this;

    return (
      <div style={{ display: this.props.display }} className="entireModal">
        <div className="container pauseMenu">
          <h2 style={{ textDecoration: "underline" }}>Paused</h2>
          <Option
            touch={this.touch}
            click={this.props.click}
            hover={this.resumeHandler}
            makeRef={resume}
            name="Resume"
          />
          <Option
            to="#personalInfo"
            click={this.props.click}
            touch={this.touch}
            hover={this.infoHandler}
            makeRef={info}
            name="Info"
          />
          <Option
            to="#stats"
            touch={this.touch}
            click={this.props.click}
            hover={this.statsHandler}
            makeRef={stats}
            name="Stats"
          />
          <Option
            touch={this.touch}
            hover={this.questsHandler}
            makeRef={quests}
            name="Quests"
          />
          <Option
            touch={this.touch}
            hover={this.mailboxHandler}
            makeRef={mailbox}
            name="Mailbox"
          />
        </div>
        <Sound
          ignoreMobileRestrictions={true}
          onError={err => console.error(err)}
          url={menu}
          volume={25}
          playStatus={this.state.play}
          onFinishedPlaying={this.onSound}
        />
      </div>
    );
  }
}
export default Modal;
