import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/joy";
import { useContext } from "react";
import { context } from "../../Pages";

const GameCard = ({ img, title, description }) => {
  const { mode } = useContext(context);
  return (
    <Card sx={{ p: 0, overflow: "hidden", borderRadius: 0 }}>
      <AspectRatio
        sx={{ borderRadius: 0 }}
        ratio={1}
        minHeight={"180px"}
        maxHeight={"200px"}
      >
        <img src={img} alt="" />
      </AspectRatio>
      <CardContent sx={{ p: 3 }}>
        <Box py={1}>
          <Typography
            mb={2}
            color={mode === "light" ? "primary" : "warning"}
            level="title-lg"
            fontWeight={"bold"}
            component={"h6"}
          >
            {title}
          </Typography>
          <Typography
            level="body-lg"
            textColor={mode==="light"?"primary.500":"warning.100"}
            component={"p"}
          >
            {description}
          </Typography>
        </Box>
        <Typography
          pt={1}
          level="body-sm"
          component={Link}
          underline="none"
          textColor={mode==="light"?"primary.400":"warning.600"}
        >
          3 Comments
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
