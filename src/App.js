import { Image, Center, Button, HStack } from "@chakra-ui/react";
import Layout from "./layout/Layout";
import Img from "./assets/img.jpg";
import { Typewriter } from "react-simple-typewriter";
import ProjectWork from "./components/projectWork";
import About from "./components/About";
import { BrowserRouter, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Lottie from "react-lottie";
import BubblesAnimation from "./Lotttie/87280-bubbles-lottie-animation.json";

function App() {
  const button = { fontSize: "1rem", backgroundColor: "green", color: "white" };
  const Bubbles = {
    loop: true,
    autoplay: true,
    animationData: BubblesAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Center mt="2rem">
          <HStack>
            <Image src={Img} borderRadius='full' boxSize='16rem' />
            <Lottie options={Bubbles} height={320}
              width={455} />
          </HStack>
        </Center>
        <h1 style={{ fontSize: "3rem", textAlign: "center", padding: "4rem" }}>I'm
          <span style={{ color: "#008000", fontWeight: "bold" }}>
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
            <Button style={button}>Download CV</Button>
          </Link>
          <HashLink to="#about">
            <Button style={button} ml="2rem">Know more</Button>
          </HashLink>
        </Center>
        <ProjectWork />
        <About />
      </BrowserRouter>
    </>
  )
}
export default App;
