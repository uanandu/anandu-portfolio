import Spline from "@splinetool/react-spline";
import { Stack, Text, VStack } from "@chakra-ui/react";

const SplineComponent = ({ isDark }) => {
  return (
    <Stack h="90vh" w="100%" alignItems="center">
      {/* <Spline scene="https://prod.spline.design/ys5vPcV6gtFKk0cN/scene.splinecode" /> */}
      <iframe
        loading="eager"
        src="https://my.spline.design/untitled-7468cee9eec15f5d54a3ff3ed2793adc/"
        width="100%"
        height="100%"
      ></iframe>
      <Text fontSize="3xl">Instructions:</Text>
      <Text fontSize="md">
        - You may interact by clicking on each object to reveal my portfolio.
      </Text>
      <Text fontSize="md">
        NOTE: If you like music, you can click on the music icon to hear my
        music.❤️
      </Text>
    </Stack>
  );
};

export default SplineComponent;
