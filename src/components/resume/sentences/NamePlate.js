import React, { Component } from "react";
import EditableTextField from "./EditableTextField";

export default class NamePlate extends Component {
  render() {
    return (
      <div className="nameplate">
        <span className="nameplate-name">
          <EditableTextField value="John Everyman" />
        </span>

        <div className="nameplate-details">
          <EditableTextField value="j.everyman@example.com" />
          <EditableTextField value="+84.76.899.9899" />
          <EditableTextField value="Danang, Vietnam" />
        </div>
      </div>
    );
  }
}
