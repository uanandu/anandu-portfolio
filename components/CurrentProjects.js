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
                <Text fontSize="lg">
                    Tool: <strong>Figma</strong>
                </Text>
                <Text fontSize="lg">Description: Portfolio website</Text>
                <Image src="https://cdn.discordapp.com/attachments/978673047772991548/1018918215008653382/Screen_Shot_2022-09-12_at_12.16.52_PM.png" 
                alt="Marie-France Binette, Psychologist" w="50%"/>
            </VStack>
    </>
  );
};

export default CurrentProjects;
