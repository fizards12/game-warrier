/* eslint-disable react/display-name */
import { Button, Container, Grid, Typography } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";
import { forwardRef, useContext } from "react";
import { context } from "../../Pages";
const Slide = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      className={props.className}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        
        py: {
          xs: "150px",
          md: "unset",
        },
      }}
      fixed
    >
      <Grid
        px={{ xs: 1, sm: 2 }}
        spacing={3}
        unstable_level={0}
        container
        columns={1}
      >
        {props.children}
      </Grid>
    </Container>
  );
});

export const SlideHeader = (props) => {
  const { mode } = useContext(context);
  return (
    <Typography
      mb={2}
      variant={"plain"}
      textColor={mode === "light" ? "neutral.300" : "primary.softColor"}
      level="h1"
    >
      {props.children}
    </Typography>
  );
};

export const SlideContent = (props) => {
  const { mode } = useContext(context);
  return (
    <>
      <Grid unstable_level={2} xs={1}>
        <Typography
          textColor={mode === "light" ? "neutral.300" : "primary.softColor"}
          my={2}
          level={"h4"}
        >
          {props.children}
        </Typography>
      </Grid>
      <Grid unstable_level={2} xs={1}>
        <Button
          variant={"outlined"}
          size={"lg"}
          sx={(theme) => ({
            backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel}/0.2)`,
          })}
          color="primary"
          my={2}
          to={`/blog/${props.index}`}
          component={RouterLink}
        >
          Read More
        </Button>
      </Grid>
    </>
  );
};

export default Slide;
