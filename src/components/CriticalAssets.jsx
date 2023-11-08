import React from "react";
import "../App.css";
export const CriticalAssets = () => {
  return (
    <div className="criticalAssets_container">
      <h1>
        Critical assets at risk &nbsp; &nbsp; &nbsp;
        <span style={{ fontWeight: "400", fontSize: "1.8rem" }}>View all</span>
      </h1>
      <div className="critical_assets_card">
        <div>
          <p className="critical_assets_table_heading">
            Critical assets compromised by attack vector with the lowest average
            complexity
          </p>
          <div className="critical_assets_contents">
            <table>
              <tr>
                <td>critical assets name </td>
                <td>Avg. complexity</td>
                <td>Trend </td>
              </tr>
              <tr>
                <td>Raymond Butcher</td>
                <td>
                  2 <span> | Low</span>
                </td>
                <td>
                  <span class="material-symbols-outlined">east</span>
                </td>
              </tr>
              <tr>
                <td>testing</td>
                <td>
                  2 <span> | Low</span>
                </td>
                <td>
                  <span class="material-symbols-outlined">east</span>
                </td>
              </tr>
              <tr>
                <td>ATM-Jump-Server</td>
                <td>
                  2.11 <span> | Low</span>
                </td>
                <td>
                  <span class="material-symbols-outlined">east</span>
                </td>
              </tr>
            </table>
            <div className="criticalAssets_pie-chart">
              <div>
                <p>498</p>
                <p>Critical assets</p>
                <p>at risk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
