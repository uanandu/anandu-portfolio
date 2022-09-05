import { Text, VStack } from "@chakra-ui/react"

const UpcomingProjects = ({isDark}) => {

    return (
        <>
            <VStack>
                <Text>I am doing the following:</Text>
                <Text>1. Dockerizing all my applications</Text>
                <Text>2. Learning about Kubernetes</Text>
                <Text>3. Deploying applications with the use of docker one by one from github</Text>
                <Text>4. Waiting for a Hackathon event in September 16,2022</Text>
            </VStack>
        </>
    )
}

export default UpcomingProjects;