import { Container } from "@mui/joy";
import Carousals from "./Slides.jsx/Carousals";
import slide1 from "../../assets/slider-1.jpg";
import slide2 from "../../assets/slider-2.jpg";
import NewsTicker from "../NewsTicker/NewsTicker";
import Features from "./featureSection/Features";
import Recent from "./Recent/Recent";
import Tournaments from "./Tournaments";
import Reviews from "./Reviews";
import tournBg from "../../assets/pattern.png";
import reviewBg from "../../assets/review-bg.png";

const Home = () => {
  const slides = [
    {
      src: slide1,
      alt: "slide-1.jpg",
    },
    {
      src: slide2,
      alt: "slide-2.jpg",
    },
  ];

  return (
    <Container
      sx={{
        padding: "0 !important",
      }}
      maxWidth={"100%"}
    >
      <Carousals slides={slides} />
      <NewsTicker />
      <Features/>
      <Recent/>
      <Tournaments tournBg={tournBg}/>
      <Reviews reviewBg={reviewBg}/>
    </Container>
  );
};

export default Home;
