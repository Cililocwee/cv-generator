import React from "react";

export default function EducationAtom({ degree, institution, subject, date }) {
  return (
    <div className="education-atom">
      <div className="degree-line">
        <p>{degree}&nbsp;-&nbsp;</p>
        <p>
          <em>{subject}</em>
        </p>
      </div>
      <div className="date-line">
        <p>{date}&nbsp;|&nbsp;</p>
        <p>{institution}</p>
      </div>
    </div>
  );
}
