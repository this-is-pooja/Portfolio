import React from 'react';
import { Center, HStack, Box, Text, VStack } from "@chakra-ui/react";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { FaJira } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

function About() {
    const icon = { fontSize: "3.5rem", color: "#5E5E5E" };
    return (
        <>
            <Center color="#4A4A4A" fontSize={{ sm: "2rem", md: "2.6rem" }} fontStyle="sec" fontWeight="bold" mt="8rem" id="about">
                KNOW MORE
            </Center>
            <Box display={{ sm: "none", md: "none", lg: "none", xl: "block" }} id="about">
                <HStack spacing={42} m="4rem">
                    <Box h="15rem" w="100%">
                        <Text fontSize="1.8rem" fontWeight="bold" color="#4A4A4A">Who am I ?</Text>
                        <Text mt="3rem" color="lblack">
                            I'm a BCA Graduate from Kumaun university Nainital,Uttrakhand. and I have done my Intermediate & Highschool from U.K board.
                        </Text>
                    </Box>
                    <Box h="15rem" w="100%">
                        <Text fontSize="1.8rem" fontWeight="bold" color="#4A4A4A">Technologies I use</Text>
                        <HStack mt="3rem" spacing={4}>
                            <SiNextdotjs fontSize="4rem" color="#5E5E5E" />
                            <GrReactjs style={icon} />
                            <SiJavascript fontSize="3rem" color="#5E5E5E" />
                            <SiRedux style={icon} />
                        </HStack>
                    </Box>
                    <Box h="15rem" w="100%">
                        <Text fontSize="1.8rem" fontWeight="bold" color="#4A4A4A">Tools I use</Text>
                        <HStack mt="3rem" spacing={4}>
                            <FaFigma style={icon} />
                            <SiGit style={icon} />
                            <SiVisualstudiocode style={icon} />
                            <FaJira style={icon} />
                        </HStack>
                    </Box>
                    <Box h="15rem" w="100%">
                        <Text fontSize="1.8rem" fontWeight="bold" color="#4A4A4A">Styling libraries</Text>
                        <HStack mt="3rem" ml="1rem" spacing={4}>
                            <SiMaterialui style={icon} />
                            <SiChakraui style={icon} />
                        </HStack>
                    </Box>
                </HStack>
            </Box>
            <Box display={{ sm: "block", md: "block", lg: "block", xl: "none" }} id="about">
                <VStack spacing={4} m="5rem">
                    <Box h="15rem" w="100%">
                        <Text fontSize="1.8rem" fontWeight="bold" color="#4A4A4A">Who am I ?</Text>
                        <Text mt="3rem" color="lblack">
                            I'm a BCA Graduate from Kumaun university Nainital,Uttrakhand. and I have done my Intermediate & Highschool from U.K board.
                        </Text>
                    </Box>
                    <Box h="15rem" w="100%">
                        <Text fontSize="1.8rem" fontWeight="bold" color="#4A4A4A"mt="2rem">Technologies I use</Text>
                        <HStack mt="1rem" spacing={4}>
                            <SiNextdotjs fontSize="4rem" color="#5E5E5E" />
                            <GrReactjs style={icon} />
                            <SiJavascript fontSize="3rem" color="#5E5E5E" />
                            <SiRedux style={icon} />
                        </HStack>
                    </Box>
                    <Box h="15rem" w="100%">
                        <Text fontSize="1.8rem" fontWeight="bold" color="#4A4A4A">Tools I use</Text>
                        <HStack mt="3rem" spacing={4}>
                            <FaFigma style={icon} />
                            <SiGit style={icon} />
                            <SiVisualstudiocode style={icon} />
                            <FaJira style={icon} />
                        </HStack>
                    </Box>
                    <Box h="15rem" w="100%">
                        <Text fontSize="1.8rem" fontWeight="bold" color="#4A4A4A">Styling libraries</Text>
                        <HStack mt="3rem" ml="1rem" spacing={4}>
                            <SiMaterialui style={icon} />
                            <SiChakraui style={icon} />
                        </HStack>
                    </Box>
                </VStack>
            </Box>
        </>
    )
}

export default About
