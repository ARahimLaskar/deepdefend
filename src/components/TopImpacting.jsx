import React from "react";
import { TopimpactingCard } from "./TopimpactingCard";

export const TopImpacting = () => {
  return (
    <div className="topimpacting_container">
      <h2>
        Top impacting attack techniques &nbsp; &nbsp; &nbsp; &nbsp;
        <span style={{ fontSize: "2rem", fontWeight: "400" }}>View all</span>
      </h2>
      <div className="topimpacting_cards_container">
        <TopimpactingCard
          heading={"Local Credentials"}
          complexity={"low"}
          severity={"Medium"}
          affectedEntities={"10"}
          criticalAssets={"45%"}
        />
        <TopimpactingCard
          heading={"PrintNightmare-Windows Pri..."}
          complexity={"low"}
          severity={"High"}
          affectedEntities={"39"}
          criticalAssets={"31%"}
        />
        <TopimpactingCard
          heading={"Azure Add Role Assignment"}
          complexity={"low"}
          severity={"High"}
          affectedEntities={"9"}
          criticalAssets={"29%"}
        />
      </div>
    </div>
  );
};
