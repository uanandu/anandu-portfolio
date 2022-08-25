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
        <Text fontSize="3xl" fontWeight="bold">
          Current Projects
        </Text>
        <Stack
          display="flex"
          position="relative"
          boxShadow={isDark ? "2px 2px 4px 2px white" : "2px 2px 4px 2px black"}
          borderRadius="lg"
          w="70%"
          h="60%"
          p={20}
          transition="all 0.2s ease-in-out"
          _hover={{
            boxShadow: isDark
              ? "2px 4px 8px 4px white"
              : "2px 4px 8px 4px black",
          }}
        >
          <Text fontSize="xl" fontWeight="bold">
            Construction Code 2.0
          </Text>
          <Text fontSize="xl">Client: Michael Belanger, Contractor</Text>
          <Text fontSize="xl">Field: Construction</Text>
            <Text fontSize="lg">Status: <strong style={{padding: "5px", backgroundColor: "green", border: "1px solid lightgray"}}>In Progress</strong></Text>
            <Image src="https://cdn.discordapp.com/attachments/979724631172849685/1012400782907277322/Screen_Shot_2022-08-25_at_12.39.12_PM.png" />

          <Text fontSize="lg">Description: Construction company website</Text>
          <UnorderedList>
            <Text fontSize="lg">It features the following:</Text>
            <ListItem>Company landing page</ListItem>
            <ListItem>Company contact page</ListItem>
            <ListItem>Previous works</ListItem>
          </UnorderedList>
        </Stack>
      </VStack>
    </>
  );
};

export default CurrentProjects;
