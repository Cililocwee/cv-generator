import React, { Component } from "react";
import ReferenceAtom from "../words/ReferenceAtom";

export default class References extends Component {
  render() {
    return (
      <div className="references">
        <h4>References</h4>
        <ReferenceAtom
          name="John Smith"
          position="Supervisor"
          email="jsmith@hassel.org"
        />
        <ReferenceAtom
          name="Sally Sumner"
          position="Manager"
          email="ssumner@hassel.org"
        />
      </div>
    );
  }
}
