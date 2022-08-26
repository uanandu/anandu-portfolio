import { Text, VStack } from "@chakra-ui/react"

const UpcomingProjects = ({isDark}) => {

    return (
        <>
            <VStack>
                <Text fontSize="2xl" fontWeight="bold">
                    Upcoming Project
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
                            color: isDark ? "white" : "black",
                        }}
                    >
                        In Negotiation
                    </strong>
                </Text>
                <Text fontSize="lg">Description: Customer Relationship Management App</Text>
            </VStack>
        </>
    )
}

export default UpcomingProjects;