import { Box, Heading, Image, Circle, Flex, Text } from "@chakra-ui/react";

const AwayLineup = ({ awayLineup }) => {
  return (
    <Box>
      <Heading as='h3' size='md' mb='2' textAlign='right'>
        Away
      </Heading>
      <Flex
        mb='2'
        direction={"column"}
        justifyContent={"space-evenly"}
        textAlign={"center"}
        gap={3}
      >
        {awayLineup?.map((player) => (
          <Flex
            key={player.name}
            alignItems={"center"}
            direction={"column"}
            px={2}
          >
            <Flex
              alignItems={"center"}
              textAlign={"center"}
              direction={"row"}
              gap={5}
            >
              <Circle w='20px' h='20px' bg='tomato' color='white'>
                <span>{player.shirt_number}</span>
              </Circle>
              <Text
                textTransform={"capitalize"}
                fontWeight={"medium"}
                fontSize={"lg"}
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

export default AwayLineup;
