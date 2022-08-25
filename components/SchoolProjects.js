import { VStack, Stack, Text, Image, Link, IconButton } from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa";

const SchoolProjects = ({ isDark }) => {
  const projectList = [
    {
      name: "Project #1",
      title: "Coding Cat",
      description:
        "Coding Sandbox environment to help beginners to code and learn",
      image:
        "https://cdn.discordapp.com/attachments/978673047772991548/1008758286109130803/readme-site.gif",
      github: "https://github.com/uanandu/Coding_Cat",
      youtube: "",
    },
    {
      name: "Project #2",
      title: "E-Commerce",
      description: "E-Commerce website to sell wearables",
      image:
        "https://cdn.discordapp.com/attachments/978673047772991548/1011642261299273800/group-project.gif",
      github: "https://github.com/uanandu/project-GROUP-e-commerce",
      youtube: "",
    },
    {
      name: "Project #3",
      title: "IssueBot",
      description:
        "Web app to keep track of user's issues and remind them to fix them based on priority",
      image:
        "https://cdn.discordapp.com/attachments/978673047772991548/1011333620243370155/issue_bot.png",
      github: "https://github.com/uanandu/Issue-Tracker",
      youtube: "",
    },
  ];

  return (
    <>
      <VStack>
        {" "}
        <Text
          fontSize="4xl"
          fontWeight="bold"
          color={isDark ? "white" : "black"}
        >
          Finished Projects
        </Text>
        <Stack display="grid" gridGap={20} gridTemplateColumns="auto auto auto">
          {projectList.map((project, index) => {
            return (
              <Stack
                key={index}
                alignItems="center"
                justifyContent="space-around"
                w={250}
                h="auto"
                p={5}
                boxShadow={
                  isDark ? "2px 2px 4px 2px white" : "2px 2px 4px 2px black"
                }
                borderRadius={2}
                cursor="pointer"
                transition="all 0.3s ease-in-out"
                _hover={{
                  boxShadow: isDark
                    ? "2px 4px 8px 4px white"
                    : "2px 4px 8px 4px black",
                }}
              >
                <Text fontSize="xl" fontWeight="800">
                  {project.name}
                </Text>
                <Text fontSize="lg">{project.title}</Text>
                <Image src={project.image} w="100%" h="auto" />
                <Link href={project.github}>
                  <IconButton
                    ml="3"
                    icon={<FaGithub />}
                    // isRound="true"
                    border={isDark ? "1px solid white" : "1px solid black"}
                  />
                </Link>
                <Text fontSize="md">{project.description}</Text>
              </Stack>
            );
          })}
        </Stack>
      </VStack>
    </>
  );
};

export default SchoolProjects;
