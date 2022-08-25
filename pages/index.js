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
} from "@chakra-ui/react";

import { lazy, Suspense } from "react";

import { motion, isValidMotionProp } from "framer-motion";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import NavBar from "../components/NavBar";
import SplineComponent from "../components/SplineComponent";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  //states for toggle button
  const [openProject, setOpenProject] = useState(false);
  const [openTimeLine, setOpenTimeLine] = useState(false);

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
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          h="100%"
          top="10vh"
        >
          <SplineComponent
            phoneScreen={phoneScreen}
            ipadScreen={ipadScreen}
            isNotSmallerScreen={isNotSmallerScreen}
            isNotSmallerScreen2={isNotSmallerScreen2}
            position="relative"
            w="90%"
          />
          <Stack
            display="flex"
            direction={isNotSmallerScreen ? "column" : "row"}
            justifyContent="space-evenly"
            position="relative"
            w="20%"
          >
            <Text fontSize="2xl">Hi there! 🤠</Text>
            <Text fontSize="lg">I am</Text>
            <Text fontSize="4xl" fontWeight="bold">
              Ananda Narayanan Udayakumar
            </Text>
            <Text fontSize="2xl">Long name, huh? Call me</Text>
            <Text fontSize="2xl" fontWeight="bold">
              &apos;Anandu&apos; 😎
            </Text>
            <Text fontSize="xl">Now, where were we?.. oh..</Text>
            <Text fontSize="3xl">Instructions:</Text>
            <Text fontSize="md">
              - You may interact by clicking on each object to reveal my
              portfolio.
            </Text>
            <Text fontSize="md">
              NOTE: If you like music, you can click on the music icon to hear
              my music.❤️
            </Text>
          </Stack>
        </Stack>
      </VStack>
      <footer className={styles.footer}>
        <HStack>
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
    </div>
  );
}
