import { Box, CardCover, Container, Grid, Link, Stack } from "@mui/joy";
import Heading from "../Heading";
import coverBg from "../../assets/page-top-bg/1.jpg";
import { allRecentImages } from "../../utils/images";
import LastPosts from "../Footer/LastPosts";
import TopComments from "../Footer/TopComments";
import GameCard from "../Home/Recent/GameCard";
import { featureImages } from "../../utils/images";
import FullCard, { CardBody, CardButtons, CardImage, Review } from "../Home/featureSection/FullCard";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { reviewsImages } from "../../utils/images";
const Blogs = () => {
  return (
    <Container disableGutters maxWidth={"100%"}>
      <Heading
        coverBg={coverBg}
        headingTitle={"Video Gallery"}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.`}
      />
      <Container maxWidth={"100%"} fixed>
        <Grid py={10} columns={24} container>
          <Grid columns={8} columnGap={1} rowGap={2} container xs={24} md={16}>
            {allRecentImages.map((img) => (
              <Grid xs={8} md={3.8} key={img}>
                <GameCard
                  img={img}
                  title={"Suspendisse ut justo tem por, rutrum"}
                  description={`Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit.`}
                />
              </Grid>
            ))}
          </Grid>
          <Grid component={Stack} rowGap={2} direction={"column"} xs={24} md={8}>
            <LastPosts />
            <TopComments />
            <FullCard>
              <CardImage src={featureImages[0]}>
                <CardCover sx={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
              </CardImage>
              <CardBody>
                <Stack direction={"column"} spacing={20}>
                  <CardBody.Category category={"NEW"} type={"danger"} />
                  <Box pb={2}>
                    <CardBody.Heading>
                      Suspendisse ut justo tem por, rutrum
                    </CardBody.Heading>
                    <CardBody.Desc>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </CardBody.Desc>
                    <CardButtons>
                      <Link
                        color="neutral"
                        mt={2}
                        href={"#"}
                        textColor={"neutral.400"}
                      >
                        3 Comments
                      </Link>
                    </CardButtons>
                  </Box>
                </Stack>
              </CardBody>
            </FullCard>
            <FullCard>
                <CardImage src={reviewsImages[0]}>
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
                      <CardBody.Heading>{"Assassin's Creed"}</CardBody.Heading>
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
        </Grid>
      </Container>
    </Container>
  );
};

export default Blogs;
