import React from "react";
import { Button, Checkbox, Grid, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Contact.css";
import BottomBorderButton from "../../components/BottomBorderButton";

const contactFormElements = [
  { label: "Your Name", key: "name", type: "TextField" },
  { label: "Email", key: "email", type: "TextField" },
  { label: "Company", key: "company", type: "TextField" },
  { label: "Phone Number", key: "phone", type: "TextField" },
  { label: "Interest Area", key: "area", type: "checkbox" },
  { label: "Please Leave a Message", key: "message", type: "TextField" },
];
export default function Contact() {
  const formRender = (element) => {
    let formElement;
    switch (element.type) {
      case "TextField":
        formElement = (
          <div className="input-container">
            <p>{element.label}</p>
            <TextField />
          </div>
        );
        break;
      case "checkbox":
        formElement = (
          <div className="input-container">
            <p>{element.label}</p>
            <div className="interest-checkbox-group">
              <div>
                <Checkbox />
                <span>Steel</span>
              </div>
              <div>
                <Checkbox />
                <span>Metallurgy</span>
              </div>
              <div>
                <Checkbox />
                <span>Glass</span>
              </div>
            </div>
          </div>
        );
        break;

      default:
        formElement = <></>;
        break;
    }
    return formElement;
  };
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <div className="contact-left-container">
          <h2>See how we can help optimize your domain.</h2>
          <p>
            Taking your operation to the next level begins with a simple conversation. Tell us about yourself and your
            industry and we’ll get back to you soon.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="contact-right-container">
          {contactFormElements.map((object) => formRender(object))}
          <div className="input-container">
            <div>
              <BottomBorderButton label="submit" color="var(--black)" />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
