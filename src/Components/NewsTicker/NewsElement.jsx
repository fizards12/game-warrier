import { Typography } from "@mui/joy";
import Fade from "../utilitesComponents/Fade";

const NewsElement = ({ isExist, id, value }) => {
  return (
    <Fade
      ParentComponent={Typography}
      direction="down"
      duration={5000}
      animateExit={true}
      parentProps={{
        sx: {
          position: "absolute",
        },
        mx: 1,
        minWidth: "fit-content",
        level: "body-md",
      }}
      isExist={isExist}
      once={false}
    >
      <Typography
        sx={(theme) => ({
          bgcolor: `${theme.vars.palette[value.type].softBg}`,
        })}
        mr={2}
        variant="outlined"
        color={value.type}
      >
        {value.category}
      </Typography>{" "}
      {value.title}
    </Fade>
  );
};

export default NewsElement;
