import {
  Stack,
  VStack,
  HStack,
  Flex,
  IconButton,
  Text,
  useColorMode,
  Box,
  Button,
  useMediaQuery,
  Image,
  Spacer,
} from "@chakra-ui/react";

import Head from "next/head";

import { useState } from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import Skills from "../components/Skills";
import Education from "../components/Education";

const Portfolio = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  //states for toggle button
  const [openSkills, setOpenSkills] = useState(false);
  const [OpenEducation, setEducation] = useState(false);

  const handleOpenSkills = (e) => {
    e.preventDefault();
    setOpenSkills(!openSkills);
    setEducation(false);
  };

  const handleOpenEducation = (e) => {
    e.preventDefault();
    setEducation(!OpenEducation);
    setOpenSkills(false);
  };

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Head>
        <title>Ananda Narayanan Udayakumar</title>
        <meta name="description" content="Portfolio of Anandu" />
        <link
          rel="icon"
          href="https://cdn.discordapp.com/attachments/978673047772991548/1010895573303427222/favicon.ico"
        />
      </Head>
      <VStack w="100%" h="95vh" top="5vh">
        <NavBar />
        <Flex
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="85%"
          alignItems="center"
        >
          <Stack
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            w="40%"
            pl={5}
            pr={5}
            h="100%"
          >
            <Flex
              direction={isNotSmallerScreen ? "row" : "column"}
              spacing={isNotSmallerScreen ? "2" : "0"}
              p={isNotSmallerScreen ? "20" : "0p"}
              alignItems="center"
              h="38vh"
              mb="10vh"
            >
              <Box alignSelf="flex-start">
                <Text
                  fontSize="4xl"
                  fontWeight="bold"
                  color={isDark ? "white" : "black"}
                >
                  Hi there!
                </Text>
                <Text
                  fontSize="6xl"
                  fontWeight="bold"
                  color={isDark ? "white" : "black"}
                  bgGradient="linear-gradient(to right, #fca4ac, #f73d09)"
                  bgClip="text"
                >
                  I am Anandu.
                </Text>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color={isDark ? "gray.300" : "gray.600"}
                >
                  WebDev, UI/UX Designer, and Full Stack Developer.
                </Text>
                {/* <Button
                  mt={10}
                  colorScheme="blue"
                  onClick={() => {
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    });
                  }}
                >
                  Let&apos;s talk!
                </Button> */}
              </Box>
              <Image
                src="https://cdn.discordapp.com/attachments/978673047772991548/1009131393839808572/portfolio_image-removebg-preview.png"
                alt="Anandu"
                w="300px"
                h="auto"
                mt={isNotSmallerScreen ? "0" : "10"}
                mb={isNotSmallerScreen ? "0" : "10"}
                ml={isNotSmallerScreen ? "10" : "20"}
                backgroundColor="transparent"
              />
            </Flex>
            <Stack position="relative" display="flex" mt="5vh">
              <Text
                fontSize="xl"
                fontWeight="bold"
                color={isDark ? "gray.300" : "gray.600"}
              >
                Summary:{" "}
              </Text>
              <Text fontSize="xl" color={isDark ? "gray.300" : "gray.600"}>
                Full-stack web developer with a passion for creating beautiful
                and intuitive user experiences.
              </Text>
              <Text fontSize="xl" color={isDark ? "gray.300" : "gray.600"}>
              &quot;Do one thing at a Time, and while doing it put your whole soul into it to the exclusion of all else.&quot;
              - <strong>Swami Vivekananda</strong>
              </Text>
            </Stack>
          </Stack>
          <Stack
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            w="60%"
            pl={5}
            pr={5}
            position="relative"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              w="100%"
              h="100%"
              mt={10}
              mb={10}
              position="relative"
              top="5vh"
            >
              <Button
                onClick={(e) => {
                  handleOpenSkills(e);
                }}
                border={isDark ? "1px solid white" : "1px solid black"}
                mr={2}
              >
                Skills
              </Button>
              <Button
                onClick={(e) => {
                  handleOpenEducation(e);
                }}
                border={isDark ? "1px solid white" : "1px solid black"}
              >
                Education
              </Button>
            </Flex>
            <Flex>
              <Box position="relative" w="100%" h="100%">
                <Stack
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                  position="relative"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  w="50vw"
                  h="70vh"
                  mt={5}
                >
                  {openSkills && (
                    <>
                      <Skills isDark={isDark} />
                    </>
                  )}
                  {OpenEducation && (
                    <>
                      <Education isDark={isDark} />
                    </>
                  )}
                  {!openSkills && !OpenEducation && (
                    <Stack>
                      <Text fontSize="xl" fontWeight="bold">
                        Hey there!🤠
                      </Text>
                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color={isDark ? "gray.300" : "gray.600"}
                      >
                        Please select a section to see more.
                      </Text>
                    </Stack>
                  )}
                </Stack>
              </Box>
            </Flex>
          </Stack>
        </Flex>
      </VStack>
      <footer className={styles.footer}>
        <HStack mt={2}>
          <Stack>
            <Flex>
              <IconButton
                ml="3"
                icon={<FaGithub />}
                // isRound="true"
                border={isDark ? "1px solid white" : "1px solid black"}
              />
              <IconButton
                ml="3"
                icon={<FaLinkedin />}
                // isRound="true"
                border={isDark ? "1px solid white" : "1px solid black"}
              />
              <IconButton
                ml="3"
                mr="5"
                icon={<FaTwitter />}
                // isRound="true"
                border={isDark ? "1px solid white" : "1px solid black"}
              />
            </Flex>
          </Stack>
          <Text>Portfolio made with love ❤️ by Anandu</Text>
        </HStack>
      </footer>
    </>
  );
};

export default Portfolio;
