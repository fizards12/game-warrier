import {
  Box,
  Button,
  CardCover,
  Container,
  Grid,
  Link,
  Stack,
} from "@mui/joy";
import coverBg from "../../assets/page-top-bg/3.jpg";
import { useContext } from "react";
import { context } from "../Pages";
import { reviewsGamesImgs } from "../../utils/images";
import FullCard, {
  CardBody,
  CardButtons,
  CardImage,
  Review,
} from "../Home/featureSection/FullCard";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Reviews from "../Home/Reviews";
import reviewBg from "../../assets/review-bg-2.jpg";
import Heading from "../Heading";
const Games = () => {
  const { mode } = useContext(context);
  const games = [
    "Overwatch Halloween",
    "Grand Theft Auto",
    "Avatar",
    "Anthem",
    "Cyberpunck 2077",
    "Spiderman",
  ];
  return (
    <Container disableGutters maxWidth={"100%"}>
      <Heading
        coverBg={coverBg}
        headingTitle={"Games Reviews"}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.`}
      />
      <Container sx={{ px: 2, py: 8 }} maxWidth={"100%"} fixed>
        <Grid rowGap={2} columns={8} container>
          {reviewsGamesImgs.map((img, i) => (
            <Grid
              display={"flex"}
              justifyContent={"center"}
              md={4}
              xs={8}
              key={img}
            >
              <FullCard maxWidth="80%">
                <CardImage src={img}>
                  <CardCover sx={{ backgroundColor: "rgba(0,0,0,0.8)" }} />
                </CardImage>
                <CardBody>
                  <Stack direction={"column"} spacing={5} textAlign={"center"}>
                    <Box py={3}>
                      <Review
                        rate={9.3}
                        sx={{
                          "--CircularProgress-size": "90px",
                          color: (theme) => theme.palette["warning"][200],
                        }}
                        determinate
                        variant={"plain"}
                        color={"warning"}
                        type={"warning"}
                        thickness={6}
                      />
                    </Box>
                    <Box pb={2}>
                      <CardBody.Heading>{games[i]}</CardBody.Heading>
                      <CardBody.Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisc ing
                        ipsum dolor sit ame. Lorem ipsum dolor sit amet,
                        consectetur adipisc ing ipsum dolor sit ame.
                      </CardBody.Desc>
                    </Box>
                  </Stack>
                  <CardButtons
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Link
                      color="warning"
                      mt={2}
                      overlay
                      href={"#"}
                      textColor={"warning.400"}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </Link>
                  </CardButtons>
                </CardBody>
              </FullCard>
            </Grid>
          ))}
        </Grid>
        <Box display={"flex"} py={5}>
          <Button
            size="lg"
            sx={{ m: "auto" }}
            variant="outlined"
            color={mode === "light" ? "primary" : "warning"}
          >
            See More
          </Button>
        </Box>
      </Container>
      <Reviews reviewBg={reviewBg} />
    </Container>
  );
};

export default Games;
