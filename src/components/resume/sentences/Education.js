import React, { Component } from "react";
import EducationAtom from "../words/EducationAtom";

export default class Education extends Component {
  render() {
    return (
      <div className="education">
        <h4>Education</h4>
        <EducationAtom
          degree="M.A."
          institution="Univeristy of California - Los Angeles"
          date="May 2014"
          subject="Marketing"
        />
        <EducationAtom
          degree="B.A."
          institution="University of Colorado"
          date="May 2012"
          subject="Business"
        />
      </div>
    );
  }
}
