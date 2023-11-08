import React from "react";

export const TopChoke = () => {
  return (
    <div>
      <h2>Top choke points</h2>
      <div className="chock_card">
        <p>
          Top 3 Entities which are part of the most attack vectors to critical
          assets that affect 43.1% of critical assets (267/619)
        </p>
        <table>
          <tr>
            <td>Entity name </td>
            <td>Critical assets</td>
            <td>Trend </td>
          </tr>
          <tr>
            <td>hezi nagar</td>
            <td>233</td>
            <td></td>
          </tr>
          <tr>
            <td>Compute Engine default service account</td>
            <td>141</td>
            <td></td>
          </tr>
          <tr>
            <td>gcppocsa</td>
            <td>64</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};
