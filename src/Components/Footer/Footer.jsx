import {
  AspectRatio,
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import logo from "../../assets/footer-logo.png";
import TopComments from "./TopComments";
import LastPosts from "./LastPosts";
import footerBg from "../../assets/footer-top-bg.png";
import { NavLink } from "react-router-dom";
const Footer = ({ bgImg }) => {
  const routes = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Games",
      to: "/games",
    },
    {
      title: "Blog",
      to: "/blogs",
    },
    {
      title: "Forums",
      to: "/forums",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ];
  return (
    <>
      <Container
        component={"footer"}
        sx={{
          backgroundImage: `url('${bgImg}')`,
          backgroundPosition: "center center",
          py: 8,
        }}
        maxWidth={"100%"}
      >
        <Container
          sx={{
            position: "relative",
          }}
          maxWidth={"100%"}
        >
          <AspectRatio
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              position: "absolute",
              bottom: "-50px",
              left: 0,
              width: "400px",
            }}
            variant="plain"
            ratio={1}
          >
            <img width={"100%"} src={footerBg} alt="" />
          </AspectRatio>
          <Grid container columns={16} justifyContent={"space-around"}>
            <Grid mb={5} xs={16} md={5}>
              <Box maxWidth={"250px"}>
                <img style={{ width: "100%" }} src={logo} alt="" />
              </Box>
              <Typography
                level="body-lg"
                component={"p"}
                textColor={"common.white"}
              >
                Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
                sit ame.
              </Typography>
            </Grid>
            <Grid xs={16} md={11} lg={8}>
              <Grid
                justifyContent={"center"}
                direction={{ xs: "column", sm: "row" }}
                rowGap={2}
                columnGap={2}
                container
                columns={12}
              >
                <Grid
                  xs={12}
                  sm={5.5}
                  sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <TopComments />
                </Grid>
                <Grid
                  xs={12}
                  sm={5.5}
                  sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <LastPosts />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container sx={{ backgroundColor: "#252729", p: 2 }} maxWidth={"100%"}>
        <Stack
          flexWrap={"wrap"}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography textColor={"background.level3"}>
            Copyright ©2024 All rights reserved | This template is made with by
            <Link variant="plain" color="primary" href="#">
              Colorlib
            </Link>
          </Typography>
          <Grid columns={10} justifyContent={"space-between"} container>
            {routes.map(({ title, to }) => (
              <Grid key={title}>
                <Link
                  sx={(theme) => ({
                    p: 2,
                    "&.active": {
                      color: {
                        xs: theme.vars.palette.warning[100],
                        md: theme.vars.palette.warning[400],
                      },
                    },
                    "&:hover": {
                      color: {
                        xs: theme.vars.palette.warning[50],
                        md: theme.vars.palette.warning[300],
                      },
                    },
                  })}
                  underline="none"
                  component={NavLink}
                  to={to}
                >
                  {title}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
