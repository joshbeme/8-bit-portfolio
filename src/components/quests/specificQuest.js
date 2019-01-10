import React from "react";

const Index = props => {
  return (
    
    <button className=" btn is-warning quests-indexContainer ">
      <h1 className="quests-indexIcon" >?</h1>
      <div className="quests-indexText ">
        <div className="quests-indexTextHead"><h4 style={{textDecoration: "underline"}}>{props.title}</h4></div>
        <div className="quests-indexTextBody"><p>{props.children}</p></div>
      </div>
      </button >
    
  );
};

export default Index;