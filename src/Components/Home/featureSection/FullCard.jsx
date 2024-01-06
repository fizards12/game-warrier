/* eslint-disable react/display-name */
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardCover,
  CircularProgress,
  Typography,
} from "@mui/joy";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "use-count-up";
const FullCard = ({ children, minWidth="230px",maxWidth="250px" ,...props }) => {
  return (
    <Card {...props} sx={{ minWidth: minWidth, maxWidth: maxWidth }}>
      {children}
    </Card>
  );
};

export const CardBody = ({ children, ...props }) => {
  return <CardContent {...props}>{children}</CardContent>;
};

export const Review = ({ rate, ...props }) => {
  const [animate, setAnimate] = useState(false);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0% 0% -35% 0%",
  });
  const { value, reset } = useCountUp({
    isCounting: animate,
    start: 0,
    end: rate * 10,
    duration: 1.5,
    decimalPlaces: 1,
  });
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      reset();
      setAnimate(false);
    }
  }, [inView]);
  return (
    <CircularProgress
      value={parseFloat(value)}
      {...props}
      ref={(el) => inViewRef(el)}
    >
      {(value * 0.1).toLocaleString()}
    </CircularProgress>
  );
};

CardBody.Category = ({
  component,
  type = "primary",
  category = "NEW",
  ...props
}) => {
  return (
    <Box display={"flex"}>
      <Typography
        component={component}
        px={3}
        py={1}
        level={"body-md"}
        variant={"solid"}
        color={type}
        {...props}
      >
        {category}
      </Typography>
    </Box>
  );
};

CardBody.Heading = ({
  component,
  children = "",
  href = "#",
  level = "h3",
  color = "neutral",
  textColor = "neutral.300",
  ...props
}) => {
  return (
    <Typography
      component={component || "h3"}
      href={href}
      level={level}
      color={color}
      textColor={textColor}
      {...props}
    >
      {children}
    </Typography>
  );
};

CardBody.Desc = ({ component, level, textColor, children = "", ...props }) => {
  return (
    <Typography
      component={component || "p"}
      mt={1}
      level={level || "body-lg"}
      textColor={textColor || "neutral.300"}
      {...props}
    >
      {children}
    </Typography>
  );
};

export const CardButtons = ({ children, ...props }) => {
  return <CardActions {...props}>{children}</CardActions>;
};

export const CardImage = ({ src, children, ...props }) => {
  return (
    <>
      <CardCover {...props}>
        <img src={src} alt={src} />
      </CardCover>
      {children}
    </>
  );
};

export default FullCard;
