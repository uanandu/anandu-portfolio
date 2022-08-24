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

import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaHamburger,
} from "react-icons/fa";

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
        {isNotSmallerScreen ? (
          <>
            <Flex
              w="40%"
              alignItems="center"
              justifyContent="space-around"
              position="relative"
            >
              <NextLink href="/" passHref>
                <Link
                  fontSize="lg"
                  fontWeight="bold"
                  color={isDark ? "white" : "black"}
                  cursor="pointer"
                  href="/"
                >
                  <Button pr={5} mr={5}>
                    Home
                  </Button>
                </Link>
              </NextLink>
              <NextLink href="/profile" passHref>
                <Link
                  fontSize="lg"
                  fontWeight="bold"
                  color={isDark ? "white" : "black"}
                  cursor="pointer"
                >
                  {" "}
                  <Button pr={5} mr={5}>
                    Portfolio
                  </Button>
                </Link>
              </NextLink>

              <NextLink href="/projects" passHref>
                <Link
                  fontSize="lg"
                  fontWeight="bold"
                  color={isDark ? "white" : "black"}
                  cursor="pointer"
                >
                  {" "}
                  <Button pr={5} mr={5}>
                    Projects
                  </Button>
                </Link>
              </NextLink>
              <NextLink href="/talk" passHref>
                <Link
                  fontSize="lg"
                  fontWeight="bold"
                  color={isDark ? "white" : "black"}
                  cursor="pointer"
                >
                  {" "}
                  <Button pr={5} mr={5}>
                    Let&apos;s Talk
                  </Button>
                </Link>
              </NextLink>
            </Flex>
          </>
        ) : (
          <>
            <IconButton icon={FaHamburger} onClick={() => {}} />
          </>
        )}

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
