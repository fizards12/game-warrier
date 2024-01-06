import { Container, Sheet, useColorScheme } from "@mui/joy";
import NavBar from "./Navbar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Suspense, createContext } from "react";
import lazyLoad from "../utils/lazyload";
import Loading from "./Loading";
import Footer from "./Footer/Footer";
import tournBg from "../assets/pattern.png";
const Home = lazyLoad("../Components/Home/Home", null, 1000);
const Games = lazyLoad("../Components/Games/Games", null, 1000);
const Blogs = lazyLoad("../Components/Blog/Blogs", null, 1000);
const Blog = lazyLoad("../Components/Blog/Blog", null, 1000);
const Contact = lazyLoad("../Components/Contact/Contact", null, 1000);
const Forums = lazyLoad("../Components/Forums/Forums", null, 1000);

export const context = createContext({ mode: "light", setMode: () => {} });

const Pages = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Suspense fallback={<Loading />}>
      <context.Provider value={{ mode: mode, setMode: setMode }}>
        <Router>
          <Container maxWidth={"100%"} disableGutters>
            <NavBar />
            <Sheet invertedColors>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/forums" element={<Forums />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="*" element={<Navigate to={"/"} />} />
              </Routes>
            </Sheet>
            <Footer bgImg={tournBg} />
          </Container>
        </Router>
      </context.Provider>
    </Suspense>
  );
};

export default Pages;
