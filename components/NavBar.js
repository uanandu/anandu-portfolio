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
  Switch,
} from "@chakra-ui/react";

import { useState } from "react";

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

  const [displayMenu, setDisplayMenu] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setDisplayMenu(!displayMenu);
  };

  return (
    <>
      <HStack
        position="fixed"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg={isDark ? "black" : "white"}
        w="100%"
        mb={10}
        pb={2}
        pt={2}
        pl={3}
        pr={3}
        borderBottom={isDark ? "2px solid white" : "2px solid lightgray"}
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
          <Flex
            display={["none", "none", "flex", "flex"]}
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
                <Button
                  pr={5}
                  mr={5}
                  border={isDark ? "2px solid white" : "2px solid black"}
                >
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
                <Button
                  pr={5}
                  mr={5}
                  border={isDark ? "2px solid white" : "2px solid black"}
                >
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
                <Button
                  pr={5}
                  mr={5}
                  border={isDark ? "2px solid white" : "2px solid black"}
                >
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
                <Button
                  pr={5}
                  mr={5}
                  border={isDark ? "2px solid white" : "2px solid black"}
                >
                  Let&apos;s Talk
                </Button>
              </Link>
            </NextLink>
          </Flex>
          <IconButton
            display={["flex", "flex", "none", "none"]}
            icon={<FaHamburger />}
            onClick={handleOpen}
          />
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
      {displayMenu && (
        <Stack alignItems="center" w="100vw">
          <NextLink href="/" passHref>
            <Link
              fontSize="lg"
              fontWeight="bold"
              color={isDark ? "white" : "black"}
              cursor="pointer"
              href="/"
              w="100vw"
              border="1px solid lightgray"
              alignItems="center"
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
        </Stack>
      )}
    </>
  );
};

export default NavBar;
