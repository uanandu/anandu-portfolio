import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

export const WelcomeMessage = ({
  isDark,
  openWelcomeMessage,
  setOpenWelcomeMessage,
}) => {
  // states for welcome message

  const handleWelcomeMessage = (e) => {
    e.preventDefault();
    setOpenWelcomeMessage(!openWelcomeMessage);
  };
  return (
    <Flex
      w="80%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack
        position="relative"
      >
        <Text fontSize="9xl" color={isDark ? "white" : "black"}>
          Ananda Narayanan Udayakumar
        </Text>
      </Stack>
      <Stack
        display="flex"
        justifyContent="space-evenly"
        position="relative"
        w="60%"
        right
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
        <Text fontSize="xl">So, You have two options to view my portfolio.</Text>
        <Text fontSize="xl"> You may take the red pill or the blue pill.</Text>
        <Text fontWeight="bold" fontSize="xl">
          The red pill: You will see the interactive version of my portfolio.
        </Text>
        <Text fontWeight="bold" fontSize="xl">
          The blue pill: You will see the static version of my portfolio.
        </Text>
        <Flex width="100%" alignItems="center" justifyContent="space-around">
          <Button
            onClick={(e) => {
              handleWelcomeMessage(e);
            }}
            border={isDark ? "2px solid white" : "2px solid black"}
            position="relative"
            right="1vw"
            bg="red"
            color="whitesmoke"
            transition="all 0.3s ease-in-out"
            borderRadius={["20px", "20px", "20px", "20px"]}
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            Choose me
          </Button>
          <Link href="/profile">
            <Button
              border={isDark ? "2px solid white" : "2px solid black"}
              borderRadius={["20px", "20px", "20px", "20px"]}
              position="relative"
              right="1vw"
              bg="blue"
              color="whitesmoke"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              Choose me
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Flex>
  );
};
