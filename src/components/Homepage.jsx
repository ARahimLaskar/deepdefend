import React from "react";
import "../App.css";
import { Menu } from "./Menu";
import graph from "../assets/graph.png";
import { CriticalAssets } from "./CriticalAssets";
import { TopChoke } from "./TopChoke";
import { TopImpacting } from "./TopImpacting";
export const Homepage = () => {
  return (
    <div className="Home_container">
      <Menu />
      <div className="cards_container">
        <div className="first_card">
          <div className="security_card">
            <p className="security_heading">Security score</p>

            <div>
              <div className="hexagon">
                <p>C</p>
              </div>
            </div>
            <p>70</p>
            <p>-1 From last month</p>
          </div>

          <div className="compareScenarios_card">
            <p>Compare scenarios</p>
            <ul>
              <li>Azure to AWS_2</li>
              <li>Hybrid Risk To Customer Data</li>
              <li>Log4Shell (CVE-2021-44228) Risk from..</li>
            </ul>
            <div id="setting_selectSenarios">
              <span class="material-symbols-outlined">settings</span>
              <p>Select Scenarios</p>
            </div>
          </div>

          <div className="graph_section">
            <img src={graph} />
          </div>
        </div>
        <div style={{ display: "flex", gap: "3rem" }}>
          <p>All Scenarios</p>
          <select>All Scenarios</select>
          <p>Past 30 days</p>
          <select>Past 30 days</select>
        </div>
        <div className="cards">
          <div className="scenarios_risk_container">
            <h2>
              Scenarios at high risk &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ fontSize: "2rem", fontWeight: "400" }}>
                {" "}
                View all
              </span>
            </h2>
            <div className="scenarios_risk_card">
              <ul>
                <li>
                  <div>
                    <div className="hexagon_f">
                      <p>F</p>
                    </div>
                    <p>(22) - On-Prem Risj | Workstations > DC</p>
                  </div>
                  <button>Take action</button>
                </li>
                <li>
                  <div>
                    <div className="hexagon_f">
                      <p>F</p>
                    </div>
                    <p>(24) - AWS-Public EC2 to Sensitive Data S3</p>
                  </div>
                  <button>Take action</button>
                </li>
                <li>
                  <div>
                    <div className="hexagon_f">
                      <p>F</p>
                    </div>
                    <p>(24) Azure External Users > Azure Custome..</p>
                  </div>
                  <button>Take action</button>
                </li>
              </ul>
            </div>
          </div>
          <CriticalAssets />
          <TopChoke />
          <TopImpacting />
        </div>
      </div>
    </div>
  );
};
