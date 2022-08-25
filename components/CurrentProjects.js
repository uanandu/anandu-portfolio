import { Image, ListItem, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react"

const CurrentProjects = () => {
    return (
        <>
            <VStack>
                <Text fontSize="3xl" fontWeight="bold">Current Projects</Text>
                <Stack>
                    <Text fontSize="xl" fontWeight="bold">Construction Code 2.0</Text>
                    <Text fontSize="xl" fontWeight="bold">Client: Michael Belanger, Contractor</Text>
                    <Text fontSize="xl" fontWeight="bold">Field: Construction</Text>
                    <Text fontSize="lg" fontWeight="bold">Status: In Progress</Text>
                    <Image src="https://cdn.discordapp.com/attachments/979724631172849685/1012400782907277322/Screen_Shot_2022-08-25_at_12.39.12_PM.png" />
                    <Text fontSize="lg" fontWeight="bold">Description: Construction company website</Text>
                    <UnorderedList>
                        <Text fontSize="lg" fontWeight="bold">It features the following:</Text>
                        <ListItem>Company landing page</ListItem>
                        <ListItem>Company contact page</ListItem>
                        <ListItem>Previous works</ListItem>
                    </UnorderedList>
                </Stack>
            </VStack>
        </>
    )
}

export default CurrentProjects;