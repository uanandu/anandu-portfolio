import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

export const Header = () => {
  // dark/light mode hook
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <Stack position="relative">
      <Flex
        as={motion.div}
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
            type: "spring",
            duration: "2s",
        }}
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing={isNotSmallerScreen ? "2" : "0"}
        p={isNotSmallerScreen ? "20" : "0p"}
        alignItems="center"
        border={isNotSmallerScreen ? "1px solid white" : "none"}
        borderRadius={isNotSmallerScreen ? "lg" : "none"}
        h="38vh"
      >
         <Image
          src="https://cdn.discordapp.com/attachments/978673047772991548/1009131393839808572/portfolio_image-removebg-preview.png"
          alt="Anandu"
            w="30%"
            h="auto"
            mt={isNotSmallerScreen ? "0" : "10"}
            mb={isNotSmallerScreen ? "0" : "10"}
            ml={isNotSmallerScreen ? "10" : "20"}
            backgroundColor="transparent"
            borderRadius="50%"
        />
        <Box mt={isNotSmallerScreen ? "0" : "20"} alignSelf="flex-start">
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
          <Button
            mt={10}
            colorScheme="blue"
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            Let's talk!
          </Button>
        </Box>
      </Flex>
    </Stack>
  );
};
