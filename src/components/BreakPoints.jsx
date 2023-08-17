import React from "react";

function BreakPoints({ breakpoints }) {
  return (
    <div className="breakpoints">
      <h1>{breakpoints.h1}</h1>
      <p>
        <i>{breakpoints.p}</i>
      </p>
    </div>
  );
}

export default BreakPoints;
