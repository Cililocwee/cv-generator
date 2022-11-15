import React, { Component } from "react";
import WorkAtom from "../words/WorkAtom";

export default class WorkExperience extends Component {
  render() {
    return (
      <div className="work-experience">
        <h4>Experience</h4>
        <WorkAtom
          title="English Teacher"
          company="ILA"
          location="Ho Chi Minh City"
          timeframe="Apr '20 - Sep '22"
          description="Taught conversational English to children ranging in age from 5 to 18."
        />
        <WorkAtom
          title="English Teacher"
          company="Wall Street English"
          location="Ho Chi Minh City"
          timeframe="May '19 - Apr '20"
          description="Taught business English to adults and seniors in high school."
        />
      </div>
    );
  }
}
