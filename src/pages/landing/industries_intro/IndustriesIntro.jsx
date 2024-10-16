import { Grid } from "@mui/material";
import Thumbnail from "./Thumbnail";
import "./IndustriesIntro.css";

import image1_1 from "../../../assets/images/landing/1-1.jpg";
import image1_2 from "../../../assets/images/landing/1-2.jpg";
import image1_3 from "../../../assets/images/landing/1-3.jpg";
import image1_4 from "../../../assets/images/landing/1-4.jpg";
import image1_5 from "../../../assets/images/landing/1-5.jpg";
import image1_6 from "../../../assets/images/landing/1-6.jpg";
import image2_1 from "../../../assets/images/landing/2-1.jpg";
import image2_2 from "../../../assets/images/landing/2-2.jpg";
import image2_3 from "../../../assets/images/landing/2-3.jpg";

import image3_1 from "../../../assets/images/landing/3-1.jpg";
import image3_2 from "../../../assets/images/landing/3-2.jpg";
import image3_3 from "../../../assets/images/landing/3-3.jpg";
import image3_4 from "../../../assets/images/landing/3-4.jpg";
import image4_1 from "../../../assets/images/landing/4-1.jpg";
import image5_1 from "../../../assets/images/landing/5-1.jpg";
import image6_1 from "../../../assets/images/landing/6-1.jpg";
import image6_2 from "../../../assets/images/landing/6-2.jpg";
import image6_3 from "../../../assets/images/landing/6-3.jpg";
import image6_4 from "../../../assets/images/landing/6-4.jpg";
import image7_1 from "../../../assets/images/landing/7-1.jpg";
import image7_2 from "../../../assets/images/landing/7-2.jpg";
import image7_3 from "../../../assets/images/landing/7-3.jpg";
import image7_4 from "../../../assets/images/landing/7-4.jpg";
import image8_1 from "../../../assets/images/landing/8-1.jpg";
import image8_2 from "../../../assets/images/landing/8-2.jpg";
import image8_3 from "../../../assets/images/landing/8-3.jpg";
import image8_4 from "../../../assets/images/landing/8-4.jpg";
import image9_1 from "../../../assets/images/landing/9-1.jpg";
import image9_2 from "../../../assets/images/landing/9-2.jpg";
import image9_3 from "../../../assets/images/landing/9-3.jpg";
import image9_4 from "../../../assets/images/landing/9-4.jpg";
import image9_5 from "../../../assets/images/landing/9-5.jpg";
import image9_6 from "../../../assets/images/landing/9-6.jpg";
import image10_1 from "../../../assets/images/landing/10-1.jpg";
import image10_2 from "../../../assets/images/landing/10-2.jpg";
import image10_3 from "../../../assets/images/landing/10-3.jpg";
import image11_1 from "../../../assets/images/landing/11-1.jpg";
import image11_2 from "../../../assets/images/landing/11-2.jpg";

const serviesList = [
  {
    label: "Steel",
    imageList: [image1_1, image1_2, image1_3, image1_4, image1_5, image1_6],
  },
  {
    label: "Heat treatment",
    imageList: [image2_1, image2_2, image2_3],
  },
  {
    label: "Non-ferrous metals industry",
    imageList: [image3_1, image3_2, image3_3, image3_4],
  },
  {
    label: "Chemical",
    imageList: [image4_1, image5_1],
  },
  // {
  //   label: "Coal chemical",
  //   imageList: [image5_1],
  // },
  {
    label: "Food",
    imageList: [image6_1, image6_2, image6_3, image6_4],
  },
  {
    label: "Ceramic Sanitary-Ware",
    imageList: [image7_1, image7_2, image7_3, image7_4,image11_2],
  },
  {
    label: "Environmental",
    imageList: [image8_1, image8_2, image8_3, image8_4, image11_1],
  },
  {
    label: "New Energy",
    imageList: [image9_1, image9_2, image9_3, image9_4, image9_5, image9_6],
  },
  {
    label: "Textile",
    imageList: [image10_1, image10_2, image10_3],
  },
  // {
  //   label: "Porcelain Enamel",
  //   imageList: [image11_1],
  // },
];

export default function IndustriesIntro() {
  return (
    <section className="industries-intro-section">
      <p className="industries-title">INDUSTRIES WE SERVE</p>
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        {serviesList.map((category, index) => (
          <Grid xs={12} md={6} lg={4} item key={category.label + index}>
            <Thumbnail category={category.label + " Industry"} imageList={category.imageList} index={index} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
