import React from "react";
import "../App.css";
export const TopimpactingCard = ({
  heading,
  complexity,
  severity,
  affectedEntities,
  criticalAssets,
}) => {
  return (
    <div className="topimpactingCard">
      <h3>{heading}</h3>
      <p>
        Complexity: <span style={{ color: "red" }}>{complexity}</span>
      </p>
      <p>
        Severity:<span style={{ color: "red" }}>{severity}</span>{" "}
      </p>
      <div className="topimpactingCard_numbers">
        <div>
          <p>{affectedEntities}</p>
          <p>Affected entities</p>
        </div>
        <div>
          <p style={{ color: "red" }}>{criticalAssets}</p>
          <p style={{ color: "red" }}>Critical assets at risk</p>
        </div>
      </div>
      <p>View remediations</p>
    </div>
  );
};
