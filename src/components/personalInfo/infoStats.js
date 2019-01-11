import React from "react";

const Stats = props => {
  return (
    <div className="infoStats">
      {props.icon}
      
      <h4 style={{textDecoration: "underline"}} >{props.header}</h4>
      
      <p >{props.children}</p>
    </div>
  );
};

export default Stats;
