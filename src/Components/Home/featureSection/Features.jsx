import {
  Box,
  CardCover,
  Container,
  Grid,
  Link,
  Stack,
} from "@mui/joy";
import FullCard, { CardBody, CardButtons, CardImage } from "./FullCard";
import { featureImages } from "../../../utils/images";

const Features = () => {
  const categories = ["NEW", "STRATEGY", "BATTLE", "RACING"].map(
    (category, i) => {
      switch (category) {
        case "NEW":
          return { category, type: "danger", src: featureImages[i] };
        case "STRATEGY":
          return { category, type: "success", src: featureImages[i] };
        case "BATTLE":
          return { category, type: "warning", src: featureImages[i] };
        case "RACING":
          return { category, type: "primary", src: featureImages[i] };
      }
    }
  );
  return (
    <Container
      component={"section"}
      fixed
      sx={{ py: 15, px: 1 }}
    >
      <Grid container columns={8} justifyContent={"center"} rowGap={2}>
        {categories.map(({ category, type, src }) => (
          <Grid
            display={"flex"}
            justifyContent={"center"}
            xs={8}
            md={4}
            lg={2}
            key={category}
          >
            <FullCard key={src}>
              <CardImage src={src}>
                <CardCover sx={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
              </CardImage>
              <CardBody>
                <Stack direction={"column"} spacing={20}>
                  <CardBody.Category category={category} type={type} />
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
