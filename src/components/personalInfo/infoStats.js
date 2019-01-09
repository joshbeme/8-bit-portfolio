import React from "react";

const Stats = props => {
  return (
    <div className="infoStats">
      {props.icon}
      
      <h4 >{props.header}</h4>
      <hr />
      <p >{props.children}</p>
    </div>
  );
};

export default Stats;
