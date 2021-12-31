import React from 'react'
import { Box, Link, HStack, Center, Text, VStack } from "@chakra-ui/react";
import Lottie from "react-lottie";
import EcommerceAnimation from "../Lotttie/22380-e-commerce.json";
import MusicAnimation from "../Lotttie/49116-music-burst-icon.json";
import WeatherAnimation from "../Lotttie/61302-weather-icon.json";
import EducationAnimation from "../Lotttie/27637-welcome.json";
import QuotesAnimation from "../Lotttie/82073-testimonials-icon.json";
import CoderAnimation from "../Lotttie/89113-coder.json";

function projectWork() {
    const style = { width: "14rem", height: "14rem", textAlign: "center", borderRadius: "4rem", color: "white", border: "solid 1px #008000" };
    const Ecommerce = {
        loop: true,
        autoplay: true,
        animationData: EcommerceAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const Music = {
        loop: true,
        autoplay: true,
        animationData: MusicAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const Weather = {
        loop: true,
        autoplay: true,
        animationData: WeatherAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const Education = {
        loop: true,
        autoplay: true,
        animationData: EducationAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const Quotes = {
        loop: true,
        autoplay: true,
        animationData: QuotesAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const Developer = {
        loop: true,
        autoplay: true,
        animationData: CoderAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <Center color="black" fontSize="2.6rem" fontWeight="bold" mb="4rem" textAlign="center" id="work">
                WORK EXPERIENCE
            </Center>
            <Box display={{ sm: "none", md: "none", lg: "none", xl: "block" }} id="work">
                <Box>
                    <Lottie
                        options={Developer}
                        height={500}
                        width={455}
                    />
                </Box>
                <HStack spacing={16} justifyContent="center" m="4rem">
                    <Link href="https://e-commerce-this-is-pooja.vercel.app/" isExternal>
                        <Box style={style}>
                            <Lottie
                                options={Ecommerce}
                                height={240}
                                width={200}
                            />
                            <Text color="black">E-commerce Website</Text>
                        </Box>
                    </Link>
                    <Link href="https://music-app-this-is-pooja.vercel.app" isExternal>
                        <Box style={style}>
                            <Lottie
                                options={Music}
                                height={230}
                                width={170}
                            />
                            <Text color="black" mt="0.6rem">Music Application</Text>
                        </Box>
                    </Link>
                    <Link href="https://react-weather-app-2yvzgfbe3-this-is-pooja.vercel.app/" isExternal>
                        <Box style={style}>
                            <Lottie
                                options={Weather}
                                height={240}
                                width={240}
                            />
                            <Text color="black">Weather Application</Text>
                        </Box>
                    </Link>
                    <Link href="http://quotesgen-ej06v2ml2-this-is-pooja.vercel.app/" isExternal>
                        <Box style={style}>
                            <Lottie
                                options={Quotes}
                                height={190}
                                width={180}
                            />
                            <Text color="black" mt="3.1rem">Quotes Generator</Text>
                        </Box>
                    </Link>
                    <Link href="https://lohitakshedu.com" isExternal>
                        <Box style={style}>
                            <Lottie
                                options={Education}
                                height={220}
                                width={220}
                            />
                            <Text color="black" mt="1.2rem">Educational Website</Text>
                        </Box>
                    </Link>
                </HStack>
            </Box>
            <Box display={{ sm: "block", md: "block", lg: "block", xl: "none" }} id="work">
                <VStack spacing={16} justifyContent="center" m="4rem">
                    <Link href="https://e-commerce-this-is-pooja.vercel.app/" isExternal>
                        <Box style={style}>
                            <Lottie
                                options={Ecommerce}
                                height={240}
                                width={200}
                            />
                            <Text color="black">E-commerce Website</Text>
                        </Box>
                    </Link>
                    <Link href="https://music-app-this-is-pooja.vercel.app" isExternal>
                        <Box style={style}>
                            <Lottie
                                options={Music}
                                height={230}
                                width={170}
                            />
                            <Text color="black"mt="0.6rem">Music Application</Text>
                        </Box>
                    </Link>
                    <Link href="https://react-weather-app-2yvzgfbe3-this-is-pooja.vercel.app/" isExternal>
                        <Box style={style}>
                            <Lottie
                                options={Weather}
                                height={240}
                                width={240}
                            />
                            <Text color="black">Weather Application</Text>
                        </Box>
                    </Link>
                    <Link href="http://quotesgen-ej06v2ml2-this-is-pooja.vercel.app/" isExternal>
                        <Box style={style}>
                            <Lottie
                                options={Quotes}
                                height={190}
                                width={180}
                            />
                            <Text color="black"mt="3.1rem">Quotes Generator</Text>
                        </Box>
                    </Link>
                    <Link href="https://lohitakshedu.com" isExternal>
                        <Box style={style}>
                            <Lottie
                                options={Education}
                                height={220}
                                width={220}
                            />
                            <Text color="black"mt="1.2rem">Educational Website</Text>
                        </Box>
                    </Link>
                </VStack>
            </Box>
        </>
    )
}

export default projectWork
