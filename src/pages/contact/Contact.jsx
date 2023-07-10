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

const interestAreaList = ["steel", "heat treatement", "aluminum", "other"];

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
              {interestAreaList.map((areaString) => (
                <div key={areaString}>
                  <Checkbox key={areaString} />
                  <span>{capitalizeFirstLetter(areaString)}</span>
                </div>
              ))}
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
          <div>
            <h2>See how we can help optimize your domain.</h2>
            <p>
              Taking your operation to the next level begins with a simple conversation. Tell us about yourself and your
              industry and we’ll get back to you soon.
            </p>
          </div>

          <div>
            {/* <h4>Astechinic Info:</h4> */}
            <p>Tel1：+86 13630037928</p>
            <p>Tel2：+86 4000839718</p>
            <p>E-mail：Astechnic@163.com</p>
          </div>
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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
