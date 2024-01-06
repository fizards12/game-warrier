import { Avatar, Box, Card, CardContent, Link, Typography } from "@mui/joy";
import { useContext } from "react";
import { context } from "../Pages";

const Comment = ({ src }) => {
  const {mode} = useContext(context)
  return (
    <Card sx={{ backgroundColor: "transparent", py: 1, px: 0, borderWidth: 0 }}>
      <CardContent sx={{ alignItems: "flex-start", flexDirection: "row" }}>
        <Avatar size={"lg"} src={src} alt="" />
        <Box px={1}>
          <Typography level="body-md" component={"p"}>
            <Link color="danger" fontWeight={"bold"} href="#">
              James Smith
            </Link>{" "}
            on
            <Typography fontSize={"sm"} component={"span"} textColor={mode==="light"?"primary.700":"warning.100"}>
              {" "}
              Lorem ipsum dolor sit amet, co
            </Typography>
          </Typography>
          <Typography level="body-sm" color={mode==="light"?"primary":"warning"}>
            June 21, 2018
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Comment;
