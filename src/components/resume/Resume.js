import React, { Component } from "react";
import InfoColumn from "./pages/InfoColumn";
import HighlightColumn from "./pages/HighlightColumn";
import "./resume-styles.css";

export default class Resume extends Component {
  render() {
    const { blurb } = this.props;
    return (
      <div className="resume-wrapper">
        <HighlightColumn blurb={blurb} />
        <InfoColumn />
      </div>
    );
  }
}
