import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/joy";
import { useContext } from "react";
import { context } from "../Pages";

const Post = ({ src, ...props }) => {
  const {mode} = useContext(context)
  return (
    <Card sx={{ backgroundColor: "transparent", my: 2, p: 0, borderWidth: 0 }}>
      <CardContent
        sx={{ flexDirection: "row", columnGap: 1, alignItems: "start" }}
      >
        <AspectRatio sx={{ width: "70%", maxWidth: "60px" }} ratio={1}>
          <img  src={src} alt="" />
        </AspectRatio>
        <Box>
            <Typography component={"p"} fontSize={{xs:"sm",lg:"md"}} color={mode==="light"?"primary":"warning"} fontWeight={"bold"}>
              June 21, 2018
            </Typography>
            <Typography component={"p"} fontSize={{xs:"xs",lg:"sm"}} textColor={mode==="light"?"primary.700":"warning.100"}>
              Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum
            </Typography>
            <Link fontSize={{xs:"xs",lg:"sm"}} textColor={mode==="light"?"primary.300":"warning.600"} href="#">
              By Admin
            </Link>{" "}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Post;
