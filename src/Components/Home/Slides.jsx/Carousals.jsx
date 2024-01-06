import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  Pagination,
  Autoplay,
  EffectFade,
  Controller,
} from "swiper/modules";
import Slide, { SlideContent, SlideHeader } from "./Slide";
import { useContext, useState } from "react";
import { context } from "../../Pages";
import { Container, Grid, Typography } from "@mui/joy";
import Fade from "../../utilitesComponents/Fade";

const Carousals = (props) => {
  const { mode } = useContext(context);
  const [control, setControl] = useState(null);
  const [index, setIndex] = useState(0);
  const slideContainerStyle = {
    padding: "0 !important",
    "& .swiper-wrapper>div": {
      position: "relative",
      height: {
        xs: "auto",
        sm: "700px",
        md: "800px",
      },
      width: "100%",
    },
    "& img": {
      height: "100%",
      position: "absolute",
      top: 0,
      left: "50%",
      zIndex: -1,
      transform: "translate(-50%,0)",
    },
  };
  const slides = [...props.slides];
  const changeHandler = (swiper) => {
    if (swiper) {
      setControl(swiper);
      setIndex(swiper.activeIndex);
    }
  };

  return (
    <Container
      maxWidth={"100%"}
      sx={slideContainerStyle}
      component={Swiper}
      spaceBetween={30}
      effect={"fade"}
      controller={{ control: control }}
      onSwiper={setControl}
      onSlideChangeTransitionEnd={changeHandler}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Pagination, Autoplay, Controller]}
      speed={1000}
    >
      {slides.map(({ src, alt }, i) => {
        return (
          <SwiperSlide key={alt}>
            <img src={src} alt={alt} />
            <Fade
              direction="down"
              delay={100}
              once={false}
              isExist={control && i === control.activeIndex}
              ParentComponent={Slide}
            >
              <Grid unstable_level={1} component={SlideHeader} xs={1}>
                The Best{" "}
                <Typography textColor={"warning.400"}>Games</Typography> Out
                There
              </Grid>
              <Grid
                index={i}
                unstable_level={1}
                component={SlideContent}
                xs={1}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque, at rutrum nulla
                dictum. Ut ac ligula sapien. Suspendisse cursus faucibus
                finibus.
              </Grid>
            </Fade>
          </SwiperSlide>
        );
      })}
    </Container>
  );
};

export default Carousals;
