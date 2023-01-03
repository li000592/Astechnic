import React from "react";
import "./BottomBorderButton.css";
export default function BottomBorderButton({
  label = "Click",
  color = "var(--white)",
}) {
  return (
    <button className="bottom-border-button" style={{ color: color }}>
      {label.toLocaleUpperCase()}
    </button>
  );
}
