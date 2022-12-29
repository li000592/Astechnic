import React from "react";
import "./BottomBorderButton.css"
export default function BottomBorderButton({ label = "Click" }) {
    
  return <button className="bottom-border-button">{label.toLocaleUpperCase()}</button>;
}
