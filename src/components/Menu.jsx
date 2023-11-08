import React from "react";
import "../App.css";

export const Menu = () => {
  return (
    <div className="menu_container">
      <ul>
        <li>
          <span class="material-symbols-outlined">speed</span>
        </li>
        <li>
          <span class="material-symbols-outlined">list_alt</span>
        </li>
        <li>
          <span class="material-symbols-outlined">shuffle</span>
        </li>
        <li>
          <span class="material-symbols-outlined">settings</span>
        </li>
        <li>
          <span class="material-symbols-outlined">manage_search</span>
        </li>
      </ul>
    </div>
  );
};
