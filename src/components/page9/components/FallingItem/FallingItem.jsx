import React from "react";
import "./FallingItem.css";

export default function FallingItem({ top, left, image }) {
  return (
    <div
      className="falling-item"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        backgroundImage: image ? `url(${image})` : "none",
      }}
    ></div>
  );
}
