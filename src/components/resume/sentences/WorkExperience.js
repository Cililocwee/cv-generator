import React, { Component } from "react";
import WorkAtom from "../words/WorkAtom";
import EditableTextField from "./EditableTextField";

export default function WorkExperience() {
  return (
    <div className="work-experience">
      <h4>Experience</h4>
      <div className="work-list">
        <WorkAtom
          title={<EditableTextField value="Position" />}
          company={<EditableTextField value="Company |" />}
          location={<EditableTextField value="City, Country" />}
          timeframe={<EditableTextField value="Jan '01 - Sep '01" />}
          description={
            <EditableTextField value="Enter description of responsibilities here." />
          }
        />

        <WorkAtom
          title={<EditableTextField value="Position" />}
          company={<EditableTextField value="Company |" />}
          location={<EditableTextField value="City, Country" />}
          timeframe={<EditableTextField value="Jan '01 - Sep '01" />}
          description={
            <EditableTextField value="Enter description of responsibilities here." />
          }
        />

        <WorkAtom
          title={<EditableTextField value="Position" />}
          company={<EditableTextField value="Company |" />}
          location={<EditableTextField value="City, Country" />}
          timeframe={<EditableTextField value="Jan '01 - Sep '01" />}
          description={
            <EditableTextField value="Enter description of responsibilities here." />
          }
        />
      </div>
    </div>
  );
}
