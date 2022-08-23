import Spline from "@splinetool/react-spline";
import { Stack, VStack } from "@chakra-ui/react";

const SplineComponent = () => {
  return (
    <Stack h="85vh" w="100%"
    >
      <Spline scene="https://prod.spline.design/ys5vPcV6gtFKk0cN/scene.splinecode" />
    </Stack>
  );
};

export default SplineComponent;

