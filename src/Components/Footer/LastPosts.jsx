import { Box, Stack, Typography } from "@mui/joy";
import { latestPosts } from "../../utils/images";
import Post from "./Post";
const TopComments = () => {
  return (
    <Box p={2}>
      <Typography color={"danger"} level="h3" fontWeight={"bold"} component={"h3"}>
        Last Posts
      </Typography>
      <Stack
        pt={2}
        direction={"column"}
      >
        {latestPosts.map((img) => {
          return <Post key={img} src={img} />;
        })}
      </Stack>
    </Box>
  );
};

export default TopComments;
