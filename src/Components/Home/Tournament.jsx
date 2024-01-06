import { AspectRatio, Card, CardContent, Stack, Typography } from "@mui/joy";
const cardStyle = {
  borderRadius: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  position: "relative",
  flexDirection: { xs: "column", sm: "row", md: "column", lg: "row" },
  minWidth: 250,
  maxWidth:{
    xs:300,
    sm:"100%"
  },
  width:{
    xs:270,
    sm:"auto"
  },
  padding: {
    xs: 0,
    sm: "70px 24px 25px 24px",
  },
  overflow: "hidden",
};
const Tournament = ({ src }) => {
  return (
    //Tournament Card
    <Card variant="soft" sx={cardStyle}>
      <Typography
        top={0}
        left={0}
        py={1}
        px={3}
        bgcolor={"#ffb320"}
        textColor={"common.black"}
        fontWeight={"bold"}
        position={"absolute"}
        zIndex={100}
      >
        PREMIUM TOURNAMENT
      </Typography>
      {/* Tournament Card Image */}
      <AspectRatio
        ratio={1}
        sx={{
          width: { xs: "auto", sm: 220, md: "auto", lg: 200 }
        }}
      >
        <img src={src} alt="" />
      </AspectRatio>
      {/* Tournament Card Content */}
      <CardContent sx={{ p: { xs: 2, sm: "" } }}>
        {/* Card Header */}
        <Typography level="h2" fontWeight={"normal"} color="warning">
          World Of WarCraft
        </Typography>
        {/* Card Body */}
        <Stack direction={"column"}>
          <Typography color="neutral" level="body-sm">
            Tournament Beggins:{" "}
            <Typography textColor={"neutral.50"}>June 20, 2018</Typography>
          </Typography>
          <Typography color="neutral" level="body-sm">
            Tournament Ends:{" "}
            <Typography textColor={"neutral.50"}>July 01, 2018</Typography>
          </Typography>
          <Typography color="neutral" level="body-sm">
            Participants:{" "}
            <Typography textColor={"neutral.50"}>10 teams</Typography>
          </Typography>
          <Typography color="neutral" level="body-sm">
            Tournament Author:{" "}
            <Typography textColor={"neutral.50"}>Admin</Typography>
          </Typography>
        </Stack>
        <Typography mt={5} color="neutral" level="body-sm">
          <Typography variant="plain" color="warning">
            Prizes:{" "}
          </Typography>
          1st place $2000, 2nd place: $1000, 3rd place: $500
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Tournament;
