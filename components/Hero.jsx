import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function CallToActionWithVideo() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }} mr={10}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: useColorModeValue("#8D1B3D", "#550065"),
                zIndex: -1,
              }}
            >
              Live Results For
            </Text>
            <br />
            <Text as={"span"} textAlign={"center"} color={"#8D1B3D"}>
              2022 FIFA World Cup
            </Text>
          </Heading>
          <Text fontSize={"xl"} color={useColorModeValue("black", "white")}>
            World Cup 2022 scores, live results, standings
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              py={10}
              px={3}
              color={"white"}
              bg={useColorModeValue("#8D1B3D", "#550065")}
              _hover={{ bg: "#550065" }}
              _dark={{
                _hover: {
                  bg: "#8D1B3D",
                },
              }}
              onClick={handleScrollDown}
            >
              <Image
                alt={"Hero Image"}
                src={"/assets/heroicon.gif"}
                objectFit={"cover"}
                boxSize={"100px"}
              />{" "}
              Get Started
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1}>
          <Image
            alt={"Hero Image"}
            src={useColorModeValue(
              "/assets/heroLight.svg",
              "/assets/heroDark.svg"
            )}
            objectFit={"cover"}
            boxSize={{ base: "250px", md: "400px" }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
