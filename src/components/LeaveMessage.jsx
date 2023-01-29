import React from "react";
import { Link } from "react-router-dom";
import "./LeaveMessage.css";

export default function LeaveMessage() {
  return (
    <Link to={"contact-us"}>
      <div className="green-brick-container animate__animated animate__fadeInRight float">
        <div className="green-brick">Leave a Message.</div>
        <div className="green-brick-triangle" />
      </div>
    </Link>
  );
}
