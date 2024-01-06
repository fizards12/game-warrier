import { Box, Container, Grid, Stack, Typography } from "@mui/joy";
import { tournamentImgs } from "../../utils/images";
import { useContext } from "react";
import { context } from "../Pages";
import Tournament from "./Tournament";
const Tournaments = ({tournBg}) => {
  const { mode } = useContext(context);
  return (
    <Container
    component={"section"}
      sx={{
        backgroundImage: `url('${tournBg}')`,
        backgroundPosition: "center center",
        py: 5,
        px:1
      }}
      maxWidth={"100%"}
    >
      <Container fixed>
        <Stack alignItems={{xs:"center",sm:"normal"}} direction={"column"}>
          <Box display={"flex"}>
            <Typography
              component={"p"}
              p={1}
              px={3}
              bgcolor={(theme) =>
                theme.palette.warning[mode === "light" ? 600 : 400]
              }
              textColor={"common.white"}
              marginInline={0}
            >
              TOURNAMENTS
            </Typography>
          </Box>
          <Grid justifyContent={{xs:"center",sm:"space-between"}} rowGap={2} columnGap={2} columns={12} container>
            {tournamentImgs.map((src) => (
              <Grid xs={"auto"} sm={11} md={5.5}  key={src}>
                <Tournament src={src} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Container>
  );
};

export default Tournaments;
