import { Text, VStack } from "@chakra-ui/react";

const UpcomingProjects = ({ isDark }) => {
  return (
      <VStack
        display="flex"
        justifyContent="space-between"
        w="50%"
        h="70%"
      >
        <Text fontSize="6xl">I am doing the following:</Text>
        <Text fontSize="2xl">1. Dockerizing all my applications</Text>
        <Text fontSize="2xl">2. Learning about Kubernetes</Text>
        <Text fontSize="2xl">
          3. Deploying applications with the use of docker one by one from
          github
        </Text>
        <Text fontSize="2xl">
          4. Waiting for a Hackathon event in September 16,2022
        </Text>
      </VStack>
  );
};

export default UpcomingProjects;
