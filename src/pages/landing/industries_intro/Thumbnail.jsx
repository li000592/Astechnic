import Carousel from "react-material-ui-carousel";
import Img1 from "../../../assets/images/thumbnail.webp";
import { Paper } from "@mui/material";

export default function Thumbnail({ category, index, imageList = [] }) {
  //  let seconds = 1;
  //   if ([0, 1, 4].includes(index)) seconds = 0;
  //   else seconds = 2;
  return (
    <>
      {/* <img
        className={`thumb-img  animate__animated animate__fadeInBottomLeft`}
        src={img}
        alt=""
      /> */}
      <Carousel animation="slide" autoPlay swip={false} indicators={false}>
        {imageList.map((item, i) => (
          <Paper key={`test3-item-${i}`} elevation={10} style={{ height: "310px" }} className="">
            <img src={item} alt="" />
          </Paper>
        ))}
      </Carousel>
      {/* <Box xs={{ backgroundColor: "grey"}}></Box> */}

      <div className="thumb-bottom-container">
        <p className="thumb-text">{category}</p>
        <div className="add-symbol">+</div>
      </div>
    </>
  );
}
