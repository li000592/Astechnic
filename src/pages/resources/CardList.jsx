import React, { useState, useEffect, useRef } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { useId } from "react";
import ProductCard from "../../components/ProductCard";
import CardFilters from "./CardFilters";
import { resourcesCardList } from "./resouces_card_list";
import useOnScreen from "../../hooks/useOnScreen";
import { Suspense } from "react";

// total 79
export default function CardList() {
  const [data, setData] = useState(resourcesCardList);
  const cardListEnd = useRef(null);
  const isVisible = useOnScreen(cardListEnd);
  const [listStatus, setListStatus] = useState("idle");
  const [displayData, setDisplayData] = useState(
    ["Industrial burners"].reduce(
      (accumulator, currentType) => [
        ...accumulator,
        ...data[currentType].slice(0, 3).map((fileName) => {
          return { fileName: fileName, type: currentType };
        }),
      ],
      []
    )
  );
  const [dataFilter, setDataFilter] = useState({
    displayNumber: 12,
    displayType:["Industrial burners"],
    status: "idle",
  });

  useEffect(() => {
    if (dataFilter.status === "rerender") {
      const updatedDataFilter = { ...dataFilter, displayNumber: dataFilter.displayNumber + 12, status: "idle" };
      setDataFilter(updatedDataFilter);
      setDisplayData((oldData) => {
        const eachTypeNumber = 12 / dataFilter.displayType.length;
        const fetchTimes = updatedDataFilter.displayNumber / 12;
        const sliceNumber = eachTypeNumber * fetchTimes;

        return (
          dataFilter.displayType === "all"
            ? ["Burner", "Electronic Controls", "Industrial burners", "Valves"]
            : dataFilter.displayType
        ).reduce(
          (accumulator, currentType) => [
            ...accumulator,
            ...data[currentType].slice(0, sliceNumber).map((fileName) => {
              return { fileName: fileName, type: currentType };
            }),
          ],
          []
        );
      });
      setListStatus("idle");
    }
  }, [dataFilter.status]);

  const listIds = useId();

  CardList.displayName = "cardlist";

  useEffect(() => {
    if (isVisible && displayData.length < 78) {
      setListStatus("loading");
      setTimeout(() => {
        const updatedDataFilter = { ...dataFilter, displayNumber: dataFilter.displayNumber + 12, status: "idle" };
        setDataFilter(updatedDataFilter);
        setDisplayData((oldData) => {
          const eachTypeNumber = 12 / dataFilter.displayType.length;
          const fetchTimes = updatedDataFilter.displayNumber / 12;
          const sliceNumber = eachTypeNumber * fetchTimes;

          return (
            dataFilter.displayType === "all"
              ? ["Burner", "Electronic Controls", "Industrial burners", "Valves"]
              : dataFilter.displayType
          ).reduce(
            (accumulator, currentType) => [
              ...accumulator,
              ...data[currentType].slice(0, sliceNumber).map((fileName) => {
                return { fileName: fileName, type: currentType };
              }),
            ],
            []
          );
        });
        setListStatus("idle");
      }, 1500);
    } else if (displayData.length >= 78) {
      setListStatus("full");
    }
  }, [isVisible]);

  return (
    <>
      <section style={{ marginTop: "32px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <CardFilters dataFilter={dataFilter} setDataFilter={setDataFilter} />
          </Grid>

          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {displayData.map((element, index) => (
                <Grid item xs={12} md={6} xl={4} key={listIds + index}>
                  <Suspense fallback={<>loading...</>}>
                    <ProductCard data={element} key={listIds + index} />
                  </Suspense>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </section>
      <div
        ref={cardListEnd}
        style={{
          display: "flex",
          marginTop: "24px",
          justifyContent: "center",
        }}
      >
        {listStatus === "loading" && <CircularProgress />}
        {listStatus === "full" && <p>--- Here is the end of all the resources ---</p>}
      </div>
    </>
  );
}
