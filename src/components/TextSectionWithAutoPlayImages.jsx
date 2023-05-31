import React from "react";
import { Grid, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function TextSectionWithAutoPlayImages({ title, body = "", body2 = "", imageList, isImageListLeft = false }) {
  return (
    <section>
      <Grid container>
        {!isImageListLeft && (
          <Grid item xs={12} md={6}>
            <div className="text-section-container">
              <h2>{title}</h2>
              <p>{body}</p>
              <p>{body2}</p>
            </div>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          {imageList && (
            <div className="text-section-container">
              <Carousel animation="slide" autoPlay swip={false} indicators={false}>
                {imageList.map((item, i) => (
                  <Paper key={`test3-item-${i}`} elevation={10} style={{ height: 400 }} className="">
                    <img src={item} alt="" />
                  </Paper>
                ))}
              </Carousel>
            </div>
          )}
        </Grid>
        {isImageListLeft && (
          <Grid item xs={12} md={6}>
            <div className="text-section-container">
              <h2>{title}</h2>
              <p>{body}</p>
              <p>{body2}</p>
            </div>
          </Grid>
        )}
      </Grid>
    </section>
  );
}

export default TextSectionWithAutoPlayImages;
