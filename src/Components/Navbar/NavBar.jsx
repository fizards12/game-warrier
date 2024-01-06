import { Button, Container, Drawer, Grid, Link } from "@mui/joy";
import Navlink from "./Navilink";
import { NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import "./navbar.css";
import { useContext, useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { context } from "../Pages";

const NavBar = () => {
  const { mode, setMode } = useContext(context);
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
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const [isCanvas, setCanvas] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const canvasProps = {
    component: Drawer,
    anchor: "top",
    size: null,
    open: isOpen,
    onClose: () => setOpen(!isOpen),
    rowSpacing: "20px",
    columnSpacing: "10px",
    sx: {
      margin: 0,
    },
  };
  const screenWidthObserver = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 900) {
      setCanvas(true);
    } else {
      setCanvas(false);
    }
  };
  useEffect(() => {
    screenWidthObserver();
    window.onresize = screenWidthObserver;
    return () => {
      window.onresize = () => {};
    };
  }, []);
  return (
    <>
      <Container
        maxWidth={"100%"}
        data-joy-color-scheme={"dark"}
        sx={(theme) => ({
          position: "sticky",
          p: 3,
          borderBottom: "1px solid #ffb320",
          bgcolor:
            mode === "light"
              ? theme.vars.palette.primary[500]
              : theme.vars.palette.common.black,
          zIndex: 500,
          top: 0,
        })}
      >
        <Grid
          maxWidth={"lg"}
          container
          margin={"auto"}
          justifyContent={"space-between"}
          columns={16}
          alignItems={"center"}
        >
          <Grid xs={"auto"}>
            <Link
              variant="plain"
              color="secondary"
              sx={{
                width: {
                  xs: "120px",
                  sm: "auto",
                },
              }}
              to={"/"}
              component={NavLink}
            >
              <img width={"100%"} src={logo} className="logo" />
            </Link>
          </Grid>
          <Grid
            {...(isCanvas ? canvasProps : { spacing: 4 })}
            container
            columns={5}
            alignItems={"center"}
            justifyContent={"space-between"}
            xs={"auto"}
          >
            {routes.map(({ title, to }) => (
              <Grid
                key={title}
                level={"title-lg"}
                underline="none"
                variant="secondary"
                to={to}
                title={title}
                component={Navlink}
              />
            ))}
          </Grid>
          <Grid container justifyContent={"flex-end"} xs={6} sm={3} lg={2}>
            <Grid marginRight={2}>
              <Button
                sx={(theme) => ({
                  padding: 1,
                  display: "flex",
                  borderRadius: "50%",
                  "&:hover": {
                    color:
                      mode === "light"
                        ? theme.vars.palette.neutral[50]
                        : theme.vars.palette.primary[400],
                    bgcolor:
                      mode === "light"
                        ? theme.vars.palette.neutral[900]
                        : theme.vars.palette.primary[50],
                  },
                  color:
                    mode === "light"
                      ? theme.vars.palette.neutral[900]
                      : theme.vars.palette.neutral[50],
                  bgcolor:
                    mode === "light"
                      ? theme.vars.palette.neutral[50]
                      : theme.vars.palette.primary[500],
                  "&>svg": {
                    fontSize: "20px",
                  },
                })}
                onClick={toggleMode}
              >
                {mode === "light" ? <MdDarkMode /> : <MdLightMode />}
              </Button>
            </Grid>

            {isCanvas && (
              <Grid container alignItems={"center"}>
                <Link
                  onClick={() => setOpen(!isOpen)}
                  fontSize={"30px"}
                  variant={"plain"}
                  color={mode === "light" ? "primary" : "neutral"}
                >
                  <CgMenuGridR />
                </Link>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NavBar;
