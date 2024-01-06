import { Box, Stack, Typography } from "@mui/joy";
import { authorsAvatars } from "../../utils/images";
import Comment from "./Comment";
const TopComments = () => {
  return (
    <Box p={2}>
      <Typography color={"danger"} level="h3" fontWeight={"bold"} component={"h3"}>
        Top Comments
      </Typography>
      <Stack
        pt={2}
        direction={"column"}
        justifyContent={"space-around"}
      >
        {authorsAvatars.map((img) => {
          return <Comment key={img} src={img} />;
        })}
      </Stack>
    </Box>
  );
};

export default TopComments;
