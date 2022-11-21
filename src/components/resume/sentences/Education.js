import React from "react";
import EditableTextField from "./EditableTextField";

export default function Education() {
  return (
    <div className="education-wrapper">
      <h4>Education:</h4>
      <div className="education">
        <div className="degree1-top">
          <strong>
            <EditableTextField value="M.A. " />
          </strong>

          <em>
            <EditableTextField value=" - Marketing" />
          </em>
        </div>

        <div className="degree1-bottom">
          <EditableTextField value="University of California" />

          <EditableTextField value=" | June '04" />
        </div>
        <div className="degree2-top">
          <strong>
            <EditableTextField value="B.A " />
          </strong>

          <em>
            <EditableTextField value=" - Journalism" />
          </em>
        </div>

        <div className="degree2-bottom">
          <EditableTextField value="Colorado State University" />
          <EditableTextField value=" | June '06" />
        </div>
      </div>

      <br />
    </div>
  );
}
