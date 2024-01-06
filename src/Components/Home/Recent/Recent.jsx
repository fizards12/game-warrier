import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/joy";
import recentBg from "../../../assets/recent-game-bg.png";
import recentBg2 from "../../../assets/review-bg-2.jpg";
import { recentImages } from "../../../utils/images";
import { useContext } from "react";
import { context } from "../../Pages";
import GameCard from "./GameCard";
const Recent = () => {
  const { mode } = useContext(context);
  return (
    <Container
      sx={{
        backgroundImage: `url('${mode === "dark" ? recentBg2 : recentBg}')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        py: 8,
      }}
      maxWidth={"100%"}
      component={"section"}
    >
      <Container fixed>
        <Typography
          textAlign={"center"}
          level="h1"
          component={"h1"}
          variant="plain"
          color="neutral"
          mb={5}
        >
          <Typography
            px={3}
            py={1}
            component={"div"}
            level="body-lg"
            variant="soft"
            color="danger"
          >
            NEW
          </Typography>
          <Box py={3}>Recent Games</Box>
        </Typography>
        <Grid
          container
          columns={12}
          rowGap={2}
          columnGap={2}
          justifyContent={"center"}
        >
          {recentImages.map((img) => {
            return (
              <Grid
                key={img}
                minWidth={"250px"}
                maxWidth={{ xs: "300px", sm: "100%" }}
                xs={10}
                sm={8}
                md={3.8}
                lg={3.5}
              >
                <GameCard
                  img={img}
                  title={"Suspendisse ut justo tem por, rutrum"}
                  description={`Lorem ipsum dolor sit amet, consectetur adipisc ing
                        ipsum dolor sit amet, consectetur elit.`}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};

export default Recent;
