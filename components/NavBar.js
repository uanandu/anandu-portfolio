import {
  IconButton,
  Flex,
  useMediaQuery,
  Heading,
  useColorMode,
  Link,
  Button,
  HStack,
  Stack,
} from "@chakra-ui/react";

import { FaSun, FaMoon, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";


import NextLink from "next/link";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const isNotSmallerScreen = useMediaQuery("(min-width: 768px)");

  return (
    <HStack
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      mb={10}
      pb={2}
      pt={2}
      borderBottom={isDark ? "1px solid white" : "1px solid lightgray"}
      position="relative"
      zIndex={5}
    >
      <Flex>
        <NextLink href="/">
          <Heading
            ml="4"
            fontStyle="italic"
            fontWeight="bold"
            fontFamily={["monospace"]}
            size="2xl"
            color={isDark ? "white" : "black"}
            cursor="pointer"
          >
            au
          </Heading>
        </NextLink>
      </Flex>
      <Stack
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        w="100%"
      >
        {
          isNotSmallerScreen ? (
            <>
          <Flex
          w="40%"
          alignItems="center"
          justifyContent="space-around"
          position="relative"
        >
          <Button>
            <NextLink href="/">
              <Link
                fontSize="lg"
                fontWeight="bold"
                color={isDark ? "white" : "black"}
                cursor="pointer"
              >
                Home
              </Link>
            </NextLink>
          </Button>

          <Button pr={5} mr={5}>
            <NextLink href="/profile">
              <Link color={isDark ? "white" : "black"}>Portfolio</Link>
            </NextLink>
          </Button>
          <Button pr={5} mr={5}>
            <NextLink href="/projects">
              <Link color={isDark ? "white" : "black"}>Projects</Link>
            </NextLink>
          </Button>
          <Button>
            <NextLink href="/talk">
              <Link color={isDark ? "white" : "black"}>Let&apos;s Talk</Link>
            </NextLink>
          </Button>
        </Flex>    
            </>
          ) : (
            <>
            
            </>
            )
        }
        
        <IconButton
          ml="4"
          mr="2"
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
          isRound="true"
          border={isDark ? "1px solid white" : "1px solid black"}
        />
      </Stack>
    </HStack>
  );
};

export default NavBar;
