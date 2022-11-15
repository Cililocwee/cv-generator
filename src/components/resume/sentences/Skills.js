import React, { Component } from "react";
import SkillAtom from "./SkillAtom";

export default class Skills extends Component {
  render() {
    return (
      <div className="skill-div">
        <h4>Skills</h4>
        <ul className="skill-list">
          <SkillAtom skill="Highly adaptable" />
          <SkillAtom skill="Independent thinker" />
          <SkillAtom skill="Goal-oriented" />
        </ul>
      </div>
    );
  }
}
