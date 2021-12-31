import { Box, Flex, HStack, Divider, Spacer, Menu, IconButton, Link, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

function Navbar() {
	const icon = { color: "#5E5E5E", fontSize: "1.2rem" };
	return (
		<>
			<Flex p="1.2rem" align="center" w="100%">
				<Box fontSize="2.4rem" fontFamily='Libre Baskerville'>
					POOJA SOLIWAL
				</Box>
				<Spacer />
				<Box display={{ sm: "none", md: "block", lg: "block", xl: "block" }}>
					<HStack color="lblack" direction="row" h="1rem">
						<Link href="https://github.com/this-is-pooja" isExternal>
							<BsGithub color="lblack" fontSize="2rem" />
						</Link>
						<Link href="pooja_soliwal2018@outlook.com" isExternal>
							<MdEmail color="lblack" fontSize="2rem" />
						</Link>
						<Link href="https://www.linkedin.com/in/pooja-soliwal-74a9a921b" isExternal>
							<AiFillLinkedin color="lblack" fontSize="2rem" />
						</Link>
					</HStack>
				</Box>
				<Spacer />
				<HashLink to="#work">
					<Button fontSize="1rem" border="solid 1px #008000" color="green" mr="2rem">
						WORK
					</Button>
				</HashLink>
				<HStack display={{ sm: "block", lg: "none", md: "none", xl: "none" }}>
					<Menu>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							icon={<FiMenu />}
							variant="outline"
						/>
						<MenuList>
							<MenuItem align="center">
								<HashLink to="#work">
									<Box as="button" fontSize="xs" color="lblack">
										WORK
									</Box>
								</HashLink>
							</MenuItem>
							<Divider />
							<MenuItem>
								<HStack color="lblack" direction="row" h="1rem" >
									<Link href="https://github.com/this-is-pooja" isExternal><BsGithub style={icon} /></Link>
									<Link href="pooja_soliwal2018@outlook.com" isExternal><MdEmail style={icon} /></Link>
									<Link href="https://www.linkedin.com/in/pooja-soliwal-74a9a921b" isExternal><AiFillLinkedin style={icon} /></Link>
								</HStack>
							</MenuItem>
						</MenuList>
					</Menu>
				</HStack>
			</Flex>
		</>
	);
}
export default Navbar;
