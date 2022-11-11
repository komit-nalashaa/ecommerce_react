import React from "react";

export function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h3> Filters </h3>
        <button className="sidebar-sidecontent" type="button">
          {" "}
          Clear All
        </button>
      </div>
      <div className="Sidebar-Subtitle"> </div>
    </div>
  );
}
