import {
  Stack,
  VStack,
  HStack,
  Flex,
  IconButton,
  Text,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import NavBar from "../components/NavBar";

import styles from "../styles/Home.module.css";
import Head from "next/head";

const Talk = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
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
      <VStack w="100%" h="95vh" top="10vh">
        <NavBar />
          <Stack
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="100%"
            h="100%"
          >
            <Text fontSize="9xl">Hello.</Text>
            <Text fontSize="5xl">Questions?</Text>
            <Text fontSize="3xl">Drop an Email here:</Text>
            <Link href="mailto:ananduun@icloud.com">
              <IconButton
                variant="outline"
                colorScheme="red"
                size="lg"
                icon={<FiMail />}
              />
            </Link>

            <Text fontSize="3xl">Or</Text>
            <Text fontSize="3xl">Connect with me on:</Text>
            <Link href="https://www.linkedin.com/in/ananduun/">
              <IconButton
                variant="outline"
                colorScheme="red"
                size="lg"
                icon={<FaLinkedin />}
              />
            </Link>
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
export default Talk;
