import React, { Component } from "react";
import EditableTextField from "./EditableTextField";

export default class References extends Component {
  render() {
    const reference1name = "Fox Mulder";
    const reference1position = "FBI Agent";
    const reference1contact = "fmulder@redacted.org";

    const reference2name = "Dana Scully";
    const reference2position = "Forensic Pathologist";
    const reference2contact = "dr.dscully@redacted.org";
    return (
      <>
        <h4>References</h4>

        <div className="references">
          <div className="reference-cell">
            <strong>
              <EditableTextField value={reference1name} />
            </strong>
            <EditableTextField value={reference1position} />
            <EditableTextField value={reference1contact} />
          </div>

          <div className="reference-cell">
            <strong>
              <EditableTextField value={reference2name} />
            </strong>
            <EditableTextField value={reference2position} />
            <EditableTextField value={reference2contact} />
          </div>
        </div>
      </>
    );
  }
}
