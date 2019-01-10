import React from "react";

const Skill = props => {
    let stars = [];
    for (let i =0; i<props.stars; i++){
      stars.push(<i className="icon star is-transparent is-small" />)  

    }
  return (
    <div className="stats-skill">
      <div>
        {props.children}
        <br/>
        {stars}
      </div>
    </div>
  );
};

export default Skill;
