import React from "react";

export default function WorkAtom({
  title,
  company,
  location,
  timeframe,
  description,
}) {
  return (
    <div className="work-atom">
      <div className="work-experience-title-line">
        <p>
          <strong>{title}</strong>
        </p>
        <p>{timeframe}</p>
      </div>

      <p>
        {company} <em>{location} </em>
      </p>

      <p>{description}</p>
    </div>
  );
}
