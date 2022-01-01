import { Image, Center, Button } from "@chakra-ui/react";
import Layout from "./layout/Layout";
import Img from "./assets/img.jpg";
import { Typewriter } from "react-simple-typewriter";
import ProjectWork from "./components/projectWork";
import About from "./components/About";
import { BrowserRouter, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./index.css";

function App() {
  const cv = { fontSize: "1rem", backgroundColor: "green", color: "white" };
  const about = { fontSize: "1rem", border: "solid 1px #008000", color: "green" };

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Center mt="4rem">
          <Image src={Img} borderRadius='full' boxSize={{ sm: "12rem", md: "14rem", lg: "16rem" }} />
        </Center>
        <h1 className="mediaQuery" style={{ textAlign: "center", padding: "4rem" }}>I'm
          <span className="mediaQuery" style={{ color: "#008000", fontWeight: "bold" }}>
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[' Pooja Soliwal.', ' a Front-end Web Developer.', ' a Constant Web Learner.']}
            />
          </span>
        </h1>
        <Center mb="8rem">
          <Link to="/Pooja-Soliwal-Resume.pdf" target="_blank" download>
            <Button style={cv}>Download CV</Button>
          </Link>
          <HashLink to="#about">
            <Button style={about} ml="2rem">Know more</Button>
          </HashLink>
        </Center>
        <ProjectWork />
        <About />
      </BrowserRouter>
    </>
  )
}
export default App;
