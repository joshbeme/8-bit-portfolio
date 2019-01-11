import React from "react";

const Attribute = props => {
  return (
    
      <div className="lists">
        <h2 className="quests-listsTitle" style={{ textDecoration: "" }}>{props.title}</h2>
        <div className="quests-displayDescTitle">
          {" "}
          <p style={{textDecoration: "underline"}}>Description</p> <p>{props.percent}</p>
        </div>
        <ul className="">
        {props.children}
          
        </ul>
        <a href={props.link} target="_blank" className="btn is-success quest-button">Click Me!</a>
      </div>
  
  );
};

export default Attribute;
