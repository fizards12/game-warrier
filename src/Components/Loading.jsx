import { CircularProgress, Container, useTheme } from "@mui/joy";

const Loading = () => {
    const theme = useTheme();
  return (
    <Container
      maxWidth={"100%"}
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor:(theme)=> theme.palette.mode === "light" ? theme.palette.primary[400] : theme.palette.common.black
      }}
    >
      <CircularProgress
        size="md"
        variant="plain"
        color={theme.palette.mode === "light"? "neutral" : "warning"}
        value={30}
      />
    </Container>
  );
};

export default Loading;
