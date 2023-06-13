import React from "react";
import "./index.css";

export default function SidebarRow(props) {
  return (
    <div className="sidebar_row">
      <props.icon className="sidebarRow_icon" />
      <h2 className="sidebarRow-title">{props.title}</h2>
    </div>
  );
}
