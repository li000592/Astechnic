import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useId } from "react";
import ProductCard from "../../components/ProductCard";
import CardFilters from "./CardFilters";

export default function CardList() {
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ]);
  const listIds = useId();

  return (
    <section style={{ marginTop: "32px" }}>
      <Grid container>
        <Grid item sx={3}>
          <CardFilters />
        </Grid>

        <Grid item sx={9}>
          <Grid container spacing={4}>
            {data.map((element, index) => (
              <Grid item sx={4}>
                <ProductCard data={element} key={listIds + index} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
