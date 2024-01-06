import {
  AspectRatio,
  Box,
  Container,
  Option,
  Select,
  Stack,
  Typography,
} from "@mui/joy";
import Heading from "../Heading";
import coverBg from "../../assets/page-top-bg/4.jpg";
import communityBg from "../../assets/community-bg.jpg";
import { useContext } from "react";
import { context } from "../Pages";
import { authors } from "../../utils/images";
import attachment from "../../assets/authors/attachment.jpg";
import ForumPost, {
  MemberImg,
  MemberName,
  PostAttachments,
  PostBody,
} from "./ForumPost";
const Forums = () => {
  const posts = authors.map((auth, i) => ({
    src: auth,
    name: "James Smith",
    attachments: i === 5 ? [attachment] : null,
  }));
  const { mode } = useContext(context);
  return (
    <Container maxWidth={"100%"} disableGutters>
      <Heading
        coverBg={coverBg}
        headingTitle={"Our Community"}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.`}
      />
      <Container
        maxWidth={"100%"}
        sx={{
          backgroundImage: `url('${communityBg}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Stack py={8} component={Container} maxWidth={"100%"} fixed>
          <Box mb={5} display={"flex"} justifyContent={"space-between"}>
            <Typography
              textColor={mode === "light" ? "primary.400" : "warning.400"}
              component={"h2"}
              level="h2"
            >
              All Members {"(344)"}
            </Typography>
            <Select
              placeholder="Filter"
              variant="outlined"
              color={mode === "light" ? "primary" : "warning"}
              sx={{ maxWidth: "100%", width: "200px" }}
              slotProps={{ listbox: { variant: "outlined" } }}
            >
              <Option value={"All"}>All</Option>
              <Option value={"Last Post"}>Last Post</Option>
              <Option value={"Recently"}>Recently</Option>
              <Option value={"Most Relvent"}>Most Relvent</Option>
            </Select>
          </Box>
          <Stack rowGap={5}>
            {posts.map(({ src, name, attachments }) => {
              return (
                <ForumPost
                  sx={{
                    backgroundColor: (theme) =>
                      mode === "light"
                        ? theme.palette.primary[300]
                        : theme.palette.common.black,
                    p: 3,
                  }}
                  key={src}
                >
                  <MemberImg sx={{ "--Avatar-size": "70px" }} src={src} />
                  <Stack direction={"column"}>
                    <Box py={1}>
                      <MemberName mode={mode}>{name}</MemberName>
                      <Typography
                        textColor={
                          mode === "light" ? "primary.500" : "warning.300"
                        }
                        mt={1}
                        level="title-sm"
                      >
                        June 21, 2018
                      </Typography>
                    </Box>
                    <PostBody mt={1} pb={3}>
                      <Typography
                        textColor={
                          mode === "light" ? "neutral.500" : "warning.300"
                        }
                        level="body-md"
                        component={"p"}
                      >
                        Lorem ipsum dolor sit amet, cdictum nisl onsectetur
                        adipisc ing ipsum dolor sit ame. Lorem ipsum dolor sit
                        amet, consectetur adipisc ing ipsum dolor sit ame.Donec
                        venenatis at eros sit amet aliquam. Donec vel orci
                        efficitur, dictum nisl vitae, scelerisque nibh.
                        Curabitur eget ipsum pulvinar nunc gravida interdum.
                      </Typography>
                      <PostAttachments
                        mt={3}
                        direction={"row"}
                        flexWrap={"wrap"}
                      >
                        {attachments &&
                          attachments.map((atch) => (
                            <AspectRatio
                              key={atch}
                              sx={{ maxWidth: "100%", width: "350px" }}
                            >
                              <img src={atch} alt="" />
                            </AspectRatio>
                          ))}
                      </PostAttachments>
                    </PostBody>
                  </Stack>
                </ForumPost>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
};

export default Forums;
