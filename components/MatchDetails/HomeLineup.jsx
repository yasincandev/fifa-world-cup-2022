import { Box, Heading, Image, Circle, Flex, Text } from "@chakra-ui/react";

const HomeLineup = ({ homeLineup }) => {
  return (
    <Box>
      <Heading as='h3' size='md' mb='2' textAlign='left'>
        Home
      </Heading>
      <Flex
        mb='2'
        direction={"column"}
        justifyContent={"space-evenly"}
        textAlign={"center"}
        gap={3}
      >
        {homeLineup.map((player) => (
          <Flex
            key={player.name}
            alignItems={"center"}
            textAlign={"center"}
            gap={5}
          >
            <Circle w='40px' h='40px' bg='tomato' color='white'>
              {player.shirt_number}
            </Circle>
            <Text
              textTransform={"capitalize"}
              fontWeight={"medium"}
              fontSize={"lg"}
              textAlign={"center"}
              color={"gray.600"}
            >
              {player.position === "Goalkeeper"
                ? "GK"
                : player.position === "Defender"
                ? "DF"
                : player.position === "Midfielder"
                ? "MF"
                : "FW"}
            </Text>
            <Text
              textTransform={"capitalize"}
              fontWeight={"medium"}
              fontSize={"lg"}
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
