import React from "react";
import Quest from './specificQuest';
const Index = props => {
  return (
    <div className="quests-index container">
      <Quest title={"React Zoom Gallery"}>Open-source gallery component</Quest>
      <Quest title={"Encore GC"}>Freelance job</Quest>
      <Quest title={"Game Demo"}>Fun little game for practicing</Quest>
      <Quest title={"Portfolio"}>8-bit version of resume</Quest>
    </div>
  );
};

export default Index;
