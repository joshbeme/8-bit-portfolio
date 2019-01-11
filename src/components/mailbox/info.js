import React from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const Info = props => {
  return (
    <div className="mailbox-info">
      <div className="mailbox-github">
        <a className="link a"><i className="icon github is-large link" /> </a>
        JoshBeMe
      </div>
      <div className="mailbox-gmail">
        <a className="link a"><FaGoogle className="is-large icon link" /></a>
         JoshuaMOwens70@gmail.com
      </div>
      <div className="mailbox-linkedin">
        <a className="link a"><FaLinkedin className="is-large icon link" /></a>
        Joshua-Owens
      </div>
      <i className="octocat cat"></i>
     
    </div>
  );
};

export default Info;
