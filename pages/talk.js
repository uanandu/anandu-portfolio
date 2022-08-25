import { Stack, VStack, HStack, Flex, IconButton, Text, Link,useColorMode } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import NavBar from "../components/NavBar";

import styles from "../styles/Home.module.css";
import Head from "next/head";

const Talk = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
  return (
    <>
      <VStack
        w="100%"
        h="95vh"
        top="10vh"
      >
        <NavBar />
        <Flex>
          <Stack
        position="relative"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          top="10vh"
        >
        <Text fontSize="9xl">Hello.</Text>
        <Text fontSize="5xl">Questions?</Text>
        <Text fontSize="3xl">Drop an Email here:</Text>
          <Link href="mailto:ananduun@icloud.com">
        <IconButton   variant='outline'
  colorScheme='red'
 size="lg" icon={<FiMail />}/>
          </Link>

        <Text fontSize="3xl">Or</Text>
        <Text fontSize="3xl">Connect with me on:</Text>
        <Link href="https://www.linkedin.com/in/ananduun/">
          <IconButton
            variant='outline'
            colorScheme='red'
            size="lg" icon={<FaLinkedin />}
          />
        </Link>

        </Stack>
        <iframe src="https://cdn.discordapp.com/attachments/979724631172849685/1012143130105102386/Anandu_Resume.pdf" width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </Flex>
        

      </VStack>
      <footer className={styles.footer}>
        <HStack
            mt={2}
        >
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
export default Talk;
