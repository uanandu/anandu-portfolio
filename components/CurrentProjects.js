import {
  Flex,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

const CurrentProjects = ({ isDark }) => {
  return (
    <>
       <VStack>
                <Text fontSize="2xl" fontWeight="bold">
                    Current Project
                </Text>
                <Text fontSize="xl" fontWeight="bold">
                    Client: Marie-France Binette, Psychologist
                </Text>
                <Text fontSize="xl">Field: Psychology</Text>
                <Text fontSize="lg">
                    Status:{" "}
                    <strong
                        style={{
                            padding: "5px",
                            backgroundColor: "yellow",
                            border: "1px solid lightgray",
                            color: "black",
                        }}
                    >
                        In Progress
                    </strong>
                </Text>
                <Text fontSize="lg">Description: Customer Relationship Management App</Text>
            </VStack>
    </>
  );
};

export default CurrentProjects;
