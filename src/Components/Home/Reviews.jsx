import {
  Box,
  CardCover,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import { useContext } from "react";
import { context } from "../Pages";
import { reviewsImages } from "../../utils/images";
import FullCard, {
  CardBody,
  CardButtons,
  CardImage,
  Review,
} from "./featureSection/FullCard";
const Reviews = ({reviewBg}) => {
  const { mode } = useContext(context);
  const reviews = [9.3, 9.5, 9.1, 9.7].map((rate, i) => {
    switch (rate) {
      case 9.3:
        return {
          rate,
          title: "Assassin's Creed",
          type: "danger",
          src: reviewsImages[i],
        };
      case 9.5:
        return {
          rate,
          title: "DOOM",
          type: "success",
          src: reviewsImages[i],
        };
      case 9.1:
        return {
          rate,
          title: "Overwatch",
          type: "warning",
          src: reviewsImages[i],
        };
      case 9.7:
        return {
          rate,
          title: "GTA",
          type: "primary",
          src: reviewsImages[i],
        };
    }
  });

  return (
    <Container
      sx={{
        backgroundImage: { md: `url('${reviewBg}')` },
        backgroundPosition: "right center",
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
          <Box py={3}>Reviews Games</Box>
        </Typography>
        <Grid container columns={8} rowGap={2} justifyContent={"center"}>
          {reviews.map(({ rate,title, type, src }) => {
            return (
              <Grid
                display={"flex"}
                justifyContent={"center"}
                xs={8}
                md={4}
                lg={2}
                key={rate}
              >
                <FullCard key={src}>
                  <CardImage src={src}>
                    <CardCover sx={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
                  </CardImage>
                  <CardBody>
                    <Stack
                      direction={"column"}
                      spacing={5}
                      textAlign={"center"}
                    >
                      <Box py={3}>
                        <Review
                          rate={rate}
                          sx={{
                            "--CircularProgress-size": "90px",
                            color: (theme) => theme.palette[type][200],
                          }}
                          determinate
                          variant={"plain"}
                          color={type}
                          type={type}
                          thickness={6}
                        >
                          {rate / 10}
                        </Review>
                      </Box>
                      <Box pb={2}>
                        <CardBody.Heading>
                          {title}
                        </CardBody.Heading>
                        <CardBody.Desc>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
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
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};

export default Reviews;
