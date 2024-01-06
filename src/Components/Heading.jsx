import { useContext } from "react";
import NewsTicker from "./NewsTicker/NewsTicker";
import { AspectRatio, Box, Typography } from "@mui/joy";
import { context } from "./Pages";

const Heading = ({ coverBg, headingTitle, description }) => {
  const { mode } = useContext(context);
  return (
    <>
      <NewsTicker />
      <Box position={"relative"}>
        <AspectRatio ratio={"4/3"} maxHeight={"500px"} minHeight={"400px"}>
          <img style={{ height: "100%" }} src={coverBg} alt="" />
        </AspectRatio>
        <Box
          px={{ xs: 2, md: 5 }}
          py={15}
          position={"absolute"}
          textTransform={"capitalize"}
          maxWidth={500}
          bottom={0}
          zIndex={4}
        >
          <Typography
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "60px" }}
            component={"h1"}
            textColor={mode === "dark" ? "warning.500" : "primary.500"}
          >
            {headingTitle}
          </Typography>
          <Typography
            mt={2}
            fontSize={{ xs: "0.8rem", sm: "1rem", md: "1.2rem" }}
            component={"p"}
            textColor={mode === "dark" ? "warning.200" : "primary.200"}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Heading;
