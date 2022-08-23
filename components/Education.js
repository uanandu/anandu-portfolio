import { Flex, Image, Stack, VStack, Text, scaleFadeConfig } from "@chakra-ui/react";

const Education = ({ isDark }) => {
  return (
    <>
      <VStack
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        w="100%"
        h="100%"
      >
        <Flex
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          w="80%"
          //   h="80%"
          border={isDark ? "1px solid white" : "1px solid black"}
          borderRadius="lg"
          p={5}
          transition="all 0.3s ease-in-out"
          cursor="pointer"
          _hover={{
            backgroundColor: "gray.100",
            color: "gray.800",
            boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
            transform: "scale(1.1)"
            }}
        >
          {" "}
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Concordia_University_logo.svg/1920px-Concordia_University_logo.svg.png"
            alt="Keep"
            w="30%"
            mr={5}
          />
          <Stack display="flex" justifyContent="space-around" w="100%" h="100%">
            <Text fontSize="2xl" fontWeight="bold">
              Diploma in Full-stack Web Development
            </Text>
            <Text fontSize="xl">
              Concordia University, Montreal, QC
            </Text>
            <Text fontSize="lg">
              May 2022 - August, 2022
            </Text>
          </Stack>
        </Flex>
        <Flex
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          w="80%"
          //   h="80%"
          border={isDark ? "1px solid white" : "1px solid black"}
          borderRadius="lg"
          p={5}
          transition="all 0.3s ease-in-out"
          cursor="pointer"
          _hover={{
            backgroundColor: "gray.100",
            color: "gray.800",
            boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
            transform: "scale(1.1)"
            }}
        >
          {" "}
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Concordia_University_logo.svg/1920px-Concordia_University_logo.svg.png"
            alt="Keep"
            w="30%"
            mr={5}
          />
          <Stack display="flex" justifyContent="space-around" w="100%" h="100%">
            <Text fontSize="2xl" fontWeight="bold">
              Masters in Civil Engineering (Environmental Engineering)
            </Text>
            <Text fontSize="xl">
              Concordia University, Montreal, QC
            </Text>
            <Text fontSize="lg">
              May 2017 - December, 2019
            </Text>
          </Stack>
        </Flex>

        <Flex
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          w="80%"
          //   h="80%"
          border={isDark ? "1px solid white" : "1px solid black"}
          borderRadius="lg"
          p={5}
          transition="all 0.3s ease-in-out"
          cursor="pointer"
          _hover={{
            backgroundColor: "gray.100",
            color: "gray.800",
            boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
            transform: "scale(1.1)"
            }}
        >
          {" "}
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Concordia_University_logo.svg/1920px-Concordia_University_logo.svg.png"
            alt="Keep"
            w="30%"
            mr={5}
          />
          <Stack display="flex" justifyContent="space-around" w="100%" h="100%">
            <Text fontSize="2xl" fontWeight="bold">
              Bachelors in Civil Engineering
            </Text>
            <Text fontSize="xl">
              NI University, India
            </Text>
            <Text fontSize="lg">
              August 2012 - May 2016
            </Text>
          </Stack>
        </Flex>
      </VStack>
    </>
  );
};

export default Education;
