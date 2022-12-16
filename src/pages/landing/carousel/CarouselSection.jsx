import React from "react";
import { Paper, Typography } from "@mui/material";
import "./CarouselSection.css";
import Carousel from "react-material-ui-carousel";

const textList = [
  {
    body: "All those involved in the steel industry know strip breaks are a challenge. Since implementing the solutions OnPoint helped develop, we’ve gone from several strip breaks a month to near zero, keeping our employees safe and improving our bottom line profitability.",
    subTitle: [`DAVE STICKLER, CEO,`, `BIG RIVER STEEL`],
  },
  {
    body: `OnPoint does more than just show you what’s happening – it gives you the next step of capability which is really where the money is. That’s a key element that is significantly different from what I’ve seen in a lot of other tools.`,
    subTitle: [`INNOVATION DIRECTOR,`, `FLINT HILLS RESOURCES`],
  },
];

export default function CarouselSection() {
  return (
    <section style={{ marginTop: "50px", color: "#494949", padding: "20px" }}>
      <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={false}>
        {textList.map((item, i) => (
          <Paper
            key={`test3-item-${i}`}
            elevation={10}
            style={{ height: 250 }}
            className="HeightItem carousel-container"
          >
            <div className="carousel-body-container">
              <h1 className="carousel-quote">"</h1>
              <p className="carousel-text">{item.body}</p>
              <h1 className="carousel-quote carousel-quote-2">"</h1>
            </div>
            <p className="carousel-sub-title-1 carousel-sub-title">{item.subTitle[0]}</p>
            <p className="carousel-sub-title">{item.subTitle[1]}</p>
          </Paper>
        ))}
      </Carousel>
    </section>
  );
}
