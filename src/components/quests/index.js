import React, { Component } from "react";
import IndexText from "./questIndex";
import Attr from "./questAttributes";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: null
    };
    this.zoom = this.zoom.bind(this);
  }
  zoom(n) {
    const arr = [
      <Attr link="https://react-gallery-zoom.herokuapp.com" title="React Zoom Gallery" percent="100%">
        <li className="quests-lists">Image gallery</li>
        <li className="quests-lists">Uses animation to simulate 3d space</li>
        <li className="quests-lists">Stack based architecture</li>
        <li className="quests-lists">Intuitive API</li>
      </Attr>,
      <Attr link="http://encore-225023.appspot.com/" title="Encore GC" percent="90%">
        <li className="quests-lists">Developed and designed entire site</li>
        <li className="quests-lists">Enforces testability using Redux</li>
        <li className="quests-lists">Backend has RESTful API</li>
        <li className="quests-lists">Server-side rendering using Next.js</li>
        <li className="quests-lists">SEO optimized</li>
      </Attr>,
      <Attr link="https://test-game-demo.herokuapp.com/" title="Game Demo" percent="?">
        <li className="quests-lists">Fun little side scroller</li>
        <li className="quests-lists">Helps me learn game development</li>
        <li className="quests-lists">Uses express to serve static assets</li>
      </Attr>,
      <Attr link="#personalInfo" title="Portfolio" percent="100%">
        <li className="quests-lists">React SPA</li>
        <li className="quests-lists">State management using Redux</li>
        <li className="quests-lists">Css prepoccessed with Sass</li>
        <li className="quests-lists">Framework for Css to use 8-bit styling</li>
      </Attr>
    ];
    if (n) {
    }
    this.setState({
      display: arr[n]
    });
  }

  componentDidMount() {
    this.zoom(0);
  }

  render() {
    return (
      <div id="quests" className="container with-title">
        <h1 className="title">Quests</h1>
        <div className="quests-container">
          <IndexText
            zoomClick={() => this.zoom(0)}
            encoreClick={() => this.zoom(1)}
            gameClick={() => this.zoom(2)}
            bitClick={() => this.zoom(3)}
          />
          <div className="quests-display container">{this.state.display}</div>
        </div>
      </div>
    );
  }
}

export default Index;
