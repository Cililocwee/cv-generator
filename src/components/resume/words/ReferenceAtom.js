import React from "react";

export default function ReferenceAtom({ name, position, email }) {
  return (
    <div>
      <div>
        <p>{name}</p>
        <p>
          <em>{position}</em>
        </p>
        <p>{email}</p>
      </div>
    </div>
  );
}
