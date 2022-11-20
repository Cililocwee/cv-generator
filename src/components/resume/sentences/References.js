import React, { Component } from "react";
import EditableTextField from "./EditableTextField";

export default class References extends Component {
  render() {
    return (
      <>
        <h4>References</h4>

        <div className="references">
          <div className="reference-cell">
            <strong>
              <EditableTextField value="Fox Mulder" />
            </strong>
            <br />
            <EditableTextField value="FBI Agent" />
            <br />
            <EditableTextField value="fmulder@redacted.org" />
          </div>

          <div className="reference-cell">
            <strong>
              <EditableTextField value="Dana Scully" />
            </strong>
            <br />
            <EditableTextField value="Forensic Pathologist" />
            <br />
            <EditableTextField value="dr.dscully@redacted.org" />
          </div>
        </div>
      </>
    );
  }
}
