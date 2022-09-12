import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

export const WelcomeMessage = ({ isDark }) => {
  return (
    <Stack
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <Text fontSize="9xl" color={isDark ? "white" : "black"}>
        Ananda Narayanan Udayakumar
      </Text>
    </Stack>
  );
};
