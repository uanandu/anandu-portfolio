import {
  VStack,
  Text,
  useColorMode,
  Flex,
  IconButton,
  Stack,
  Box,
  HStack,
  useMediaQuery,
  Link,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import NavBar from "../components/NavBar";
import SplineComponent from "../components/SplineComponent";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { WelcomeMessage } from "../components/WelcomeMessage";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  //states for toggle button
  const [openProject, setOpenProject] = useState(false);
  const [openTimeLine, setOpenTimeLine] = useState(false);

  // states for welcome message
  const [openWelcomeMessage, setOpenWelcomeMessage] = useState(false);

  const handleWelcomeMessage = (e) => {
    e.preventDefault();
    setOpenWelcomeMessage(!openWelcomeMessage);
  };

  const handleOpenProject = (e) => {
    e.preventDefault();
    setOpenProject(!openProject);
    setOpenTimeLine(false);
  };

  const handleOpenTimeLine = (e) => {
    e.preventDefault();
    setOpenTimeLine(!openTimeLine);
    setOpenProject(false);
  };

  const [phoneScreen] = useMediaQuery("(max-width: 400px)");
  const [ipadScreen] = useMediaQuery("(max-width: 768px)");
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 768px)");
  const [isNotSmallerScreen2] = useMediaQuery("(min-width: 1024px)");

  return (
    <div className={styles.container}>
      <Head>
        <title>Ananda Narayanan Udayakumar</title>
        <meta name="description" content="Portfolio of Anandu" />
        <link
          rel="icon"
          href="https://cdn.discordapp.com/attachments/978673047772991548/1010895573303427222/favicon.ico"
        />
      </Head>
      <VStack w="100%" h="95vh" top="10vh">
        <NavBar />
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          w="100%"
          h="100%"
          top="10vh"
        >
          {openWelcomeMessage && (
            <>
              <SplineComponent
                phoneScreen={phoneScreen}
                ipadScreen={ipadScreen}
                isNotSmallerScreen={isNotSmallerScreen}
                isNotSmallerScreen2={isNotSmallerScreen2}
                position="relative"
                w="90%"
                isDark={isDark}
              />
            </>
          )}
          {!openWelcomeMessage && (
            <>
              <WelcomeMessage isDark={isDark} openWelcomeMessage={openWelcomeMessage} setOpenWelcomeMessage={setOpenWelcomeMessage}/>
            </>
          )}
        </Stack>
      </VStack>
      <footer className={styles.footer}>
        <HStack>
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
    </div>
  );
}
