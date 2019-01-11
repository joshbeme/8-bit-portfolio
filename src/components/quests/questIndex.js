import React from "react";
import Quest from './specificQuest';
const Index = props => {
  return (
    <div className="quests-index container">
      <Quest click={props.zoomClick} click={props.zoomClick} title={"React Zoom Gallery"}>Open-source gallery component</Quest>
      <Quest click={props.encoreClick} title={"Encore GC"}>Freelance job</Quest>
      <Quest click={props.gameClick} title={"Game Demo"}>Fun little game for practicing</Quest>
      <Quest click={props.bitClick} title={"Portfolio"}>8-bit version of resume</Quest>
    </div>
  );
};

export default Index;
