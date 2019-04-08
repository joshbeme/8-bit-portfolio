import React from "react";
import { FaGoogle, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Info = props => {
  return (
    <div className="mailbox-info">
      <div className="mailbox-github">
        <a
          href="https://github.com/joshbeme"
          className="link a"
          target="_blank"
          rel='noopener noreferrer'
        >
          <FaGithubSquare className="icon github is-large link" />{" "}
        </a>
        JoshBeMe
      </div>
      <div className="mailbox-gmail">
        <a
          href="mailto:joshuamowens70@gmail.com"
          className="link a"
          target="_blank"
          rel='noopener noreferrer'
        >
          <FaGoogle className="is-large icon link" />
        </a>
        JoshuaMOwens70@gmail.com
      </div>
      <div className="mailbox-linkedin">
        <a
          href="https://www.linkedin.com/in/joshua-owens"
          className="link a"
          target="_blank"
          rel='noopener noreferrer'
        >
          <FaLinkedin className="is-large icon link" />
        </a>
        Joshua-Owens
      </div>
      <i className="octocat cat" />
    </div>
  );
};

export default Info;
