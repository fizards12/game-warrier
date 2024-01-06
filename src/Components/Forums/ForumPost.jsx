import { Avatar, Card, CardContent, Stack, Typography } from "@mui/joy";

const ForumPost = ({ children, ...props }) => {
  return (
    <Card {...props}>
      <CardContent sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        {children}
      </CardContent>
    </Card>
  );
};

export const MemberImg = ({ src, ...props }) => {
  return <Avatar {...props} src={src} alt="" />;
};

export const PostBody = ({ children, ...props }) => {
  return (
    <Stack {...props} direction={"column"}>
      {children}
    </Stack>
  );
};

export const MemberName = ({ children, mode, ...props }) => {
  return (
    <>
      <Typography
        {...props}
        textColor={mode === "light" ? "danger.600" : "danger.400"}
        component={"p"}
        level="title-lg"
      >
        {children}
      </Typography>
    </>
  );
};

export const PostAttachments = ({ children, ...props }) => {
  return <Stack {...props}>{children}</Stack>;
};

export default ForumPost;
