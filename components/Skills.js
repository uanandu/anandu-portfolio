import {
  Flex,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import { FcSettings } from "react-icons/fa";

const Skills = ({ isDark }) => {
  return (
    <>
      <Stack
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        w="100%"
        h="100%"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Coding Skills
        </Text>
        <Flex
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          w="100%"
          h="100%"
          border="1px solid #eaeaea"
        >
          <Stack mr={20}>
            <Stack display="flex" alignItems="center" >
              <Text fontSize="xl" fontWeight="bold">
                Frontend
              </Text>
              <UnorderedList listStyleType="none">
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  <Text fontSize="lg">React</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">React Native</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">HTML</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">CSS</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">SASS</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">JavaScript</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">TypeScript</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">Next.js</Text>
                </ListItem>{" "}
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">VueJS</Text>
                </ListItem>
              </UnorderedList>
            </Stack>
            <Stack display="flex" alignItems="center" >
              <Text fontSize="xl" fontWeight="bold">
                Backend
              </Text>
              <UnorderedList listStyleType="none">
              <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">Node.js</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">Express</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">MongoDB</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">NoSQL</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">Firebase</Text>
                </ListItem>
              </UnorderedList>
            </Stack>
          </Stack>
          <Stack display="flex" alignItems="center" >
            <Text fontSize="xl" fontWeight="bold">
                Tools
            </Text>
            <UnorderedList listStyleType="none">
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  <Text fontSize="lg">Bash</Text>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={isDark ? "1px solid white" : "1px solid black"}
                  borderRadius="lg"
                  p={1}
                  m={1}
                  w={150}
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: isDark ? "0px 0px 10px rgba(255, 255, 255, 0.5)" : "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    transform: "scale(1.1)",
                  }}
                >
                  {" "}
                  <Text fontSize="lg">AWS</Text>
                </ListItem>
              </UnorderedList>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};

export default Skills;
