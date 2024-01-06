import { Box, Container, Grid, Stack, Typography } from "@mui/joy";
import Heading from "../Heading";
import coverBg from "../../assets/page-top-bg/5.jpg";
import ContactForm from "./ContactForm";
import { useContext } from "react";
import { context } from "../Pages";
import { MdAlternateEmail, MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  const { mode } = useContext(context);
  return (
    <Container disableGutters maxWidth={"100%"}>
      <Heading
        coverBg={coverBg}
        headingTitle={`contact us`}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Donec malesuada lorem maximus mauris scelerisque, 
         at rutrum nulla dictum.`}
      />
      <Container sx={{ py: 8 }} maxWidth={"100%"} fixed>
        <Grid container columns={12} rowGap={5}>
          <Grid component={Stack} rowGap={2} xs={12} md={5}>
            <Typography
              level="h2"
              component={"h2"}
              textColor={mode === "light" ? "primary.700" : "warning.500"}
              fontWeight={"bold"}
            >
              {" "}
              Contact us
            </Typography>
            <Typography
              level="body-lg"
              fontSize={{xs:"sm",sm:"lg"}}
              component={"p"}
              textColor={"neutral.500"}
            >
              Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
              nisl. Duis feug iat bibendum orci, non elementum urna. Cras sit
              amet sapien aliquam.
            </Typography>
            <Box display={"flex"} flexDirection={"column"} rowGap={1}>
              <Typography
                level="h3"
                component={"h3"}
                fontWeight={"bold"}
                textColor={mode === "light" ? "primary.500" : "warning.300"}
              >
                Address
              </Typography>
              <Typography
                component={"p"}
                level="body-lg"
                fontSize={{xs:"sm",sm:"lg"}}
                textColor={"neutral.500"}
                startDecorator={<MdLocationPin style={{fontSize:"25px"}}/>}
              >
                9 Al-Marwa Street Abu-Soliman Alexandria, Egypt
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} rowGap={1}>
              <Typography
                level="h3"
                component={"h3"}
                fontWeight={"bold"}
                textColor={mode === "light" ? "primary.500" : "warning.300"}
              >
                Phone
              </Typography>
              <Typography
                level="body-lg"
                fontSize={{xs:"sm",sm:"lg"}}
                component={"p"}
                textColor={"neutral.500"}
                startDecorator={<FaPhone style={{fontSize:"20px"}}/>}
              >
                +201157232513
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} rowGap={1}>
              <Typography
                level="h3"
                component={"h3"}
                fontWeight={"bold"}
                textColor={mode === "light" ? "primary.500" : "warning.300"}
              >
                Email
              </Typography>
              <Typography
                level="body-lg"
                fontSize={{xs:"sm",sm:"lg"}}
                component={"p"}
                textColor={"neutral.500"}
                startDecorator={<MdAlternateEmail style={{fontSize:"25px"}} />}
              >
                mahmoudsameh734@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={7}>
            <Stack rowGap={2}>
              <Typography
                level="h3"
                component={"h3"}
                textColor={mode === "light" ? "primary.700" : "warning.500"}
                fontWeight={"bold"}
              >
                Leave a Reply
              </Typography>
              <ContactForm mode={mode} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Contact;
