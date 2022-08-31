import {
  Stack,
  VStack,
  HStack,
  Flex,
  IconButton,
  Text,
  useColorMode,
  Button,
  Box,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import {FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import SchoolProjects from "../components/SchoolProjects";
import CurrentProjects from "../components/CurrentProjects";
import UpcomingProjects from "../components/UpcomingProjects";

const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  // states for toggle button
  const [schoolProjecst, setSchoolProjecst] = useState(false);
  const [currentProjects, setCurrentProjects] = useState(false);
  const [upcomingProjects, setUpcomingProjects] = useState(false);

  const handleOpenSchoolProjects = (e) => {
    e.preventDefault();
    setSchoolProjecst(!schoolProjecst);
    setCurrentProjects(false);
    setUpcomingProjects(false);
  };

  const handleOpenCurrentProjects = (e) => {
    e.preventDefault();
    setCurrentProjects(!currentProjects);
    setSchoolProjecst(false);
    setUpcomingProjects(false);
  };

  const handleOpenUpcomingProjects = (e) => {
    e.preventDefault();
    setUpcomingProjects(!upcomingProjects);
    setCurrentProjects(false);
    setSchoolProjecst(false);
  };

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
      <VStack w="100%" h="95vh" top="20vh">
        <NavBar />
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
              mb={20}
              position="relative"
              top="3vh"
            >
              <Button
                onClick={(e) => {
                  handleOpenSchoolProjects(e);
                }}
                border={isDark ? "1px solid white" : "1px solid black"}
                mr={20}
                cursor="pointer"
              >
                Projects
              </Button>
              <Button
                onClick={(e) => {
                  handleOpenCurrentProjects(e);
                }}
                border={isDark ? "1px solid white" : "1px solid black"}
                mr={20}
                cursor="pointer"
              >
                Current Projects
              </Button>
              <Button
                onClick={(e) => {
                  handleOpenUpcomingProjects(e);
                }}
                border={isDark ? "1px solid white" : "1px solid black"}
                cursor="pointer"
              >
                Upcoming Projects
              </Button>
            </Flex>
            <Flex
              position="relative"
              top="-3vh"
            >
              <Box position="relative" w="100%" h="100%">
                <Stack
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                  position="relative"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  w="70vw"
                  h="70vh"
                  mt={5}
                >
                  {schoolProjecst && (
                    <>
                      <SchoolProjects isDark={isDark} />
                    </>
                  )}
                  {currentProjects && (
                    <>
                      <CurrentProjects isDark={isDark} />
                    </>
                  )}
                  {
                    upcomingProjects && (
                      <>
                      <UpcomingProjects isDark={isDark} />
                      </>
                    )
                  }
                  {!schoolProjecst && !currentProjects && !upcomingProjects && (
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
      </VStack>
      <footer className={styles.footer}>
        <HStack mt={2}>
          <Stack>
          <Flex>
              <Link href="https://github.com/uanandu">
              <IconButton
                ml="3"
                icon={<FaGithub />}
                // isRound="true"
                border={isDark ? "1px solid white" : "1px solid black"}
              />
              </Link>
              <Link href="https://www.linkedin.com/in/uanandu">
              <IconButton
                ml="3"
                icon={<FaLinkedin />}
                // isRound="true"
                border={isDark ? "1px solid white" : "1px solid black"}
              />
              </Link>
              <Link href="https://twitter.com/AnandaUdaykumar">
              <IconButton
                ml="3"
                mr="5"
                icon={<FaTwitter />}
                // isRound="true"
                border={isDark ? "1px solid white" : "1px solid black"}
              />
              </Link>
            </Flex>
          </Stack>
          <Text>Portfolio made with love ❤️ by Anandu</Text>
        </HStack>
      </footer>
    </>
  );
};

export default Projects;
