import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useId } from "react";
import ProductCard from "../../components/ProductCard";
import CardFilters from "./CardFilters";

const resourcesList = [
  {
    product: "Zolo",
    title: "ASD Integral Burner",
    body: `U / W radiation tube has uniform temperature and low nitrogen emission heat recovery Features The length of the flame can reach five meters, and the temperature is more uniform. Efficient preheating recovery. When the furnace temperature is 950 °C, the exhaust gas temperature can be reduced to 450C, which is more energy-saving. Flue gas circulation, lower emissions. The heat exchanger can choose the shape structure, which is suitable for many kinds of heat treatment furnaces`,
    type: "pdf",
    download_path: "resources/pdf/ASD Integral Burner.pdf",
    image_path: "resources/images/7.jpg",
  },
  {
    product: "Zolo",
    title: "ASF Double Orifice Plate Burner",
    body: `ANX-C/M Aeries Burner is suitable for applications that enhance combustion gas recycling, improve efficiency, improve temperature uniformity and greatly reduce emissions. ANX-C/M Aeries Burner includes medium, high-speed and ultra-high speed flame modes, and the combustion chamber is made of refractory burner brick.`,
    type: "pdf",
    download_path: "resources/pdf/ASF Double Orifice Plate Burner.pdf",
    image_path: "resources/images/8.png",
  },
  {
    product: "Zolo",
    title: "ASH Gas Fine Regulating Valve",
    body: `ASD Integral Burner has high combustion efficiency, blue flame and all the parameters in the combustion products meet the national environmental protection standards. It has the advantages of small power adjustment range, low noise, no tempering and node-ignition`,
    type: "pdf",
    download_path: "resources/pdf/ASH Gas Fine Regulating Valve.pdf",
    image_path: "resources/images/9.jpg",
  },
  {
    product: "Zolo",
    title: "A-PRO Self-Preheating Burnern",
    body: "The waste heat is recovered with its own heat exchanger, and the combustion-supporting air can be preheated up to 650 ℃. Modular design, each module can be replaced and maintained separately. Suitable for pulse control and continuous control. Staged combustion, combustion is more environmentally friendly. The electrode has its own cooling air protection circuit and has the functions of detection and ignition at the same time. Heat-resistant steel heat exchanger, suitable for a variety of heat treatment furnaces below.",
    type: "pdf",
    download_path: "resources/pdf/A-PRO Self-Preheating Burner.pdf",
    image_path: "resources/images/1.jpg",
  },
  {
    product: "Zolo",
    title: "ASR Split Burner",
    body: `Compared with other burners, SF Double Orifice Plate Burner has a wider air-fuel ratio operating area, lower air excess coefficient, lower energy consumption and better flame stability. ASF double-orifice plate oxygen-poor burner can burn under wind to consume excess oxygen in flue gas and reduce flue gas emission. It is widely used in ceramic kilns and other application scenes that need to maintain a certain flame shape and rigidity.`,
    type: "pdf",
    download_path: "resources/pdf/ASR Split Burner.pdf",
    image_path: "resources/images/12.png",
  },
  {
    product: "Zolo",
    title: "A-STOR Regenerative Burner",
    body: "AME RC-Integrated Regenerative Burner breaks away from the basic concept of traditional regenerative combustion system: double burner + double regenerator structure. Due to the use of unique combustion and heat exchange technology, the dual heat storage, combustion and commutation system are integrated into an independent, highly integrated, high-tech and epoch-making regenerative burner.",
    type: "pdf",
    download_path: "resources/pdf/A-STOR Regenerative Burner.pdf",
    image_path: "resources/images/4.png",
  },
  {
    product: "Zolo",
    title: "A-TJ Burner",
    body: "In order to further enhance the waste heat recovery capacity of flue gas and reduce fuel cost, it adds an auxiliary heat recovery system on the basis of the original finned casing primary heat exchanger, which increases the fuel efficiency to more than 90%, which is close to the level of regenerative heat recovery system. However, it has simpler structure, lower cost, less space and better maintenance performance. Therefore, compared with the regenerative burner, it has higher performance-to-price ratio.",
    type: "pdf",
    download_path: "resources/pdf/A-TJ Burner.pdf",
    image_path: "resources/images/11.png",
  },
  {
    product: "Zolo",
    title: "A-RC Integrated Regenerative Burner",
    body: "AME RC-Integrated Regenerative Burner breaks away from the basic concept of traditional regenerative combustion system: double burner + double regenerator structure. Due to the use of unique combustion and heat exchange technology, the dual heat storage, combustion and commutation system are integrated into an independent, highly integrated, high-tech and epoch-making regenerative burner.",
    type: "pdf",
    download_path: "resources/pdf/A-RC Integrated Regenerative Burner.pdf",
    image_path: "resources/images/3.jpg",
  },
  {
    product: "Zolo",
    title: "A-SHE Efficient Self-Preheating Burner",
    body: "In order to further enhance the waste heat recovery capacity of flue gas and reduce fuel cost, it adds an auxiliary heat recovery system on the basis of the original finned casing primary heat exchanger, which increases the fuel efficiency to more than 90%, which is close to the level of regenerative heat recovery system. However, it has simpler structure, lower cost, less space and better maintenance performance. Therefore, compared with the regenerative burner, it has higher performance-to-price ratio.",
    type: "pdf",
    download_path: "resources/pdf/A-SHE Efficient Self-Preheating Burner.pdf",
    image_path: "resources/images/2.jpg",
  },
  {
    product: "Zolo",
    title: "A-U Radiation Tube Burner Series",
    body: `Suitable for the combustion of natural gas, blast furnace gas, mixed gas, city
    gas and other fuels.
     Flame has many forms, such as straight flame, flat flame and so on.
     It can be installed on the side wall, furnace top and other structures.
     The materials of the regenerator are heat storage ball and honeycomb.
     It uses ignition gun ignition, ignition gun + burner double fire detection mode.
     It is widely used in aluminum melting furnace, trolley / chamber heating
    furnace and heat treatment furnace.`,
    type: "pdf",
    download_path: "resources/pdf/A-U Radiation Tube Burner Series.pdf",
    image_path: "resources/images/5.png",
  },
  {
    product: "Zolo",
    title: "ANX-CM Burner",
    body: `The structure of the furnace body is simplified, and the spacious combustion chamber of the ordinary heating
    furnace is no longer needed except the fire channel.
     The high temperature flue gas emitted at high speed can inject a large
    number of lower temperature flue gas in the furnace, forming a strong
    flue gas reflux and stirring.`,
    type: "pdf",
    download_path: "resources/pdf/ANX-CM Burner.pdf",
    image_path: "resources/images/6.png",
  },
  // {
  //   product: "Zolo",
  //   title: "AST-40 Ignition Burner",
  //   body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
  //   type: "pdf",
  //   download_path: "resources/pdf/AST-40 Ignition Burner.pdf",
  //   image_path: "",
  // },
  // {
  //   product: "Zolo",
  //   title: "AT 50 Electric Actuator",
  //   body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
  //   type: "pdf",
  //   download_path: "resources/pdf/AT 50 Electric Actuator.pdf",
  //   image_path: "",
  // },
  // {
  //   product: "Zolo",
  //   title: "AT-08 Ignition Transformer",
  //   body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
  //   type: "pdf",
  //   download_path: "resources/pdf/AT-08 Ignition Transformer.pdf",
  //   image_path: "",
  // },
  // {
  //   product: "Zolo",
  //   title: "AT31 Electric Actuator",
  //   body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
  //   type: "pdf",
  //   download_path: "resources/pdf/AT31 Electric Actuator.pdf",
  //   image_path: "",
  // },
];
export default function CardList() {
  const [data, setData] = useState(resourcesList);
  const listIds = useId();

  return (
    <section style={{ marginTop: "32px" }}>
      {/* <Grid container>
        <Grid item xs={12} md={3}>
          <CardFilters />
        </Grid> */}

        {/* <Grid item xs={12} md={9}> */}
          <Grid container spacing={2}>
            {data.map((element, index) => (
              <Grid item xs={12} md={4} xl={4}>
                <ProductCard data={element} key={listIds + index} />
              </Grid>
            ))}
          </Grid>
        {/* </Grid> */}
      {/* </Grid> */}
    </section>
  );
}
