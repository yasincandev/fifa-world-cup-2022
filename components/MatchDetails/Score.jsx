import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Score = ({
  home_team,
  away_team,
  home_team_country,
  away_team_country,
}) => {
  return (
    <HStack p={5} rounded={"lg"} spacing={"30px"}>
      <Flex
        direction={"column"}
        gap={5}
        align={"center"}
        justify={"space-evenly"}
        w={{ base: "100px", md: "250px" }}
        h={{ base: "100px", md: "250px" }}
        rounded={"lg"}
      >
        <Image
          rounded={"lg"}
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
          src={`/assets/images/${home_team_country}.jpg`}
          alt={home_team_country}
        />
        <Text fontSize={"lg"} color={"white"}>
          {home_team.name}
        </Text>
      </Flex>
      <Flex
        direction={"row"}
        align={"center"}
        justify={"space-evenly"}
        flex={1}
      >
        <Text fontSize={"4xl"} color={"white"}>
          {home_team.goals}
        </Text>
        <Text fontSize={"4xl"} color={"white"}>
          -
        </Text>
        <Text fontSize={"4xl"} color={"white"}>
          {away_team.goals}
        </Text>
      </Flex>
      <Flex
        direction={"column"}
        gap={5}
        align={"center"}
        justify={"space-evenly"}
        w={{ base: "100px", md: "250px" }}
        h={{ base: "100px", md: "250px" }}
        rounded={"lg"}
      >
        <Image
          rounded={"lg"}
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
          src={`/assets/images/${away_team_country}.jpg`}
          alt={away_team_country}
        />
        <Text fontSize={"lg"} color={"white"}>
          {away_team.name}
        </Text>
      </Flex>
    </HStack>
  );
};

export default Score;
