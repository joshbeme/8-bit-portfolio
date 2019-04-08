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
      <Attr link="https://www.npmjs.com/package/react-zoom-gallery" title="React Zoom Gallery" percent="100%">
        <li className="quests-lists">Image gallery</li>
        <li className="quests-lists">Uses animation to simulate 3d space</li>
        <li className="quests-lists">Stack based architecture</li>
        <li className="quests-lists">Intuitive API</li>
      </Attr>,
      <Attr link="https://bitbucket.org/joshbeme/encore" title="Encore GC" percent="100%">
        <li className="quests-lists">Developed and designed entire site</li>
        <li className="quests-lists">Enforces testability using Redux</li>
        <li className="quests-lists">Backend has RESTful API</li>
        <li className="quests-lists">Server-side rendering using Next.js</li>
        <li className="quests-lists">SEO optimized</li>
      </Attr>,
      <Attr link="https://github.com/hackla-engage/engage-client" title="Engage Town" percent="70%">
        <li className="quests-lists">Open Source Project</li>
        <li className="quests-lists">Front End uses React, Redux, and Sass</li>
        <li className="quests-lists">Helps citizens engage with town hall</li>
        <li className="quests-lists">Currently being beta tested with city of Santa Monica</li>

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
        <h1 style={{textAlign: "center", textDecoration: "underline", paddingBottom: "5px"}} className="quests-header">Quests</h1>
        <div className="quests-container">
          <IndexText
            zoomClick={() => this.zoom(0)}
            encoreClick={() => this.zoom(1)}
            engageClick={() => this.zoom(2)}
            bitClick={() => this.zoom(3)}
          />
          <div className="quests-display container">{this.state.display}</div>
        </div>
      </div>
    );
  }
}

export default Index;
