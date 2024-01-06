import { Container, Grid, Sheet, Typography } from "@mui/joy";
import { useContext, useEffect, useState } from "react";
import { context } from "../Pages";
import "./newsTicker.css";
import NewsElement from "./NewsElement";

const NewsTicker = () => {
  const { mode } = useContext(context);
  const [currentNews, setCurrent] = useState(0);
  const news = [
    {
      id: 0,
      value: {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "NEW",
        type: "success",
      },
    },
    {
      id: 1,
      value: {
        title: "isum dolor sit amet, consectetur adipiscing elit.",
        category: "STRATEGY",
        type: "warning",
      },
    },
    {
      id: 2,
      value: {
        title: "dolor sit amet, consectetur adipiscing elit.",
        category: "RACING",
        type: "danger",
      },
    },
  ];

  const animate = () => {
    setCurrent((current) => (current + 1) % news.length);
  };

  useEffect(() => {
    setTimeout(animate, 5000);
  }, [currentNews]);

  return (
    <Container disableGutters maxWidth={"100%"}>
      <Grid container columns={3} minWidth={"100%"}>
        <Grid
          sx={(theme) => ({
            bgcolor: theme.palette.warning[400],
            display: { xs: "none", md: "flex" },
          })}
          container
          alignItems={"center"}
          py={2}
          px={5}
          xs={0}
          md={1}
        >
          <Typography textAlign={"end"} marginLeft={"auto"} level={"title-lg"}>
            Latest News
          </Typography>
        </Grid>
        <Sheet
          component={Grid}
          overflow={"hidden"}
          data-joy-color-scheme={mode === "light" ? "dark" : "light"}
          xs={3}
          md={2}
        >
          <Grid
            height={{ xs: "80px", md: "100%" }}
            display={"flex"}
            alignItems={"center"}
            position={"relative"}
            overflow={"hidden"}
          >
            {news.map(({ id, value }) => {
              return (
                <NewsElement
                  isExist={currentNews === id}
                  key={id}
                  value={value}
                />
              );
            })}
          </Grid>
        </Sheet>
      </Grid>
    </Container>
  );
};

export default NewsTicker;
