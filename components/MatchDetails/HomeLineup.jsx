import { Box, Heading, Image, Circle, Flex, Text } from "@chakra-ui/react";

const HomeLineup = ({ homeLineup }) => {
  return (
    <Box w={"100%"}>
      <Heading
        as='h3'
        size='md'
        mb='2'
        textAlign={{ base: "center", md: "left" }}
      >
        Home
      </Heading>
      <Flex
        border='1px solid #fff'
        borderRadius={"md"}
        p={4}
        mb='2'
        direction={"column"}
        justifyContent={"space-evenly"}
        textAlign={"center"}
        gap={3}
        bg={"gray.700"}
      >
        {homeLineup?.map((player) => (
          <Flex
            key={player.name}
            alignItems={"center"}
            p={2}
            border='1px solid #fff'
            borderRadius={"md"}
            gap={5}
          >
            <Flex
              alignItems={"center"}
              textAlign={"center"}
              direction={"row"}
              gap={5}
              fontSize={{ base: "xs", md: "md" }}
            >
              <Circle w='30px' h='30px' bg='tomato' color='white'>
                <span>{player.shirt_number}</span>
              </Circle>
              <Text
                textTransform={"capitalize"}
                fontWeight={"medium"}
                textAlign={"center"}
                color={"white"}
              >
                {player.position === "Goalkeeper"
                  ? "GK"
                  : player.position === "Defender"
                  ? "DF"
                  : player.position === "Midfielder"
                  ? "MF"
                  : "FW"}
              </Text>
            </Flex>
            <Text
              textTransform={"capitalize"}
              fontWeight={"medium"}
              textAlign={"center"}
            >
              {player.name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default HomeLineup;
