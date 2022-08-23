import {
  Stack,
  VStack,
  HStack,
  Flex,
  IconButton,
  Text,
  useColorMode,
  Box,
  Image,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const projectList = [
    {
      name: "Project #1",
      title: "Coding Cat",
      description:
        "Coding Sanbox environment to help beginners to code and learn",
      image: "https://cdn.discordapp.com/attachments/978673047772991548/1008758286109130803/readme-site.gif",
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
      <Head>
        <title>Ananda Narayanan Udayakumar</title>
        <meta name="description" content="Portfolio of Anandu" />
        <link
          rel="icon"
          href="https://cdn.discordapp.com/attachments/978673047772991548/1010895573303427222/favicon.ico"
        />
      </Head>
      <VStack w="100%" h="95vh">
        <NavBar />
        <Text
          fontSize="4xl"
          fontWeight="bold"
          color={isDark ? "white" : "black"}
        >
          Finished Projects
        </Text>
        <Stack display="grid" gridGap={4} gridTemplateColumns="auto auto auto">
          {projectList.map((project, index) => {
            return (
              <Stack
                key={index}
                alignItems="center"
                justifyContent="space-around"
                w={300}
                h="auto"
              >
                <Text fontSize="xl">{project.name}</Text>
                <Text fontSize="xl">{project.title}</Text>
                <Image src={project.image} w="100%" h="auto" />
                <Link href={project.github}>
                  <IconButton
                    ml="3"
                    icon={<FaGithub />}
                    // isRound="true"
                    border={isDark ? "1px solid white" : "1px solid black"}
                  />
                </Link>
                <Text fontSize="lg">{project.description}</Text>
              </Stack>
            );
          })}
        </Stack>
      </VStack>
      <footer className={styles.footer}>
        <HStack mt={2}>
          <Stack>
            <Flex>
              <IconButton
                ml="3"
                icon={<FaGithub />}
                // isRound="true"
                border={isDark ? "1px solid white" : "1px solid black"}
              />
              <IconButton
                ml="3"
                icon={<FaLinkedin />}
                // isRound="true"
                border={isDark ? "1px solid white" : "1px solid black"}
              />
              <IconButton
                ml="3"
                mr="5"
                icon={<FaTwitter />}
                // isRound="true"
                border={isDark ? "1px solid white" : "1px solid black"}
              />
            </Flex>
          </Stack>
          <Text>Portfolio made with love ❤️ by Anandu</Text>
        </HStack>
      </footer>
    </>
  );
};

export default Projects;
