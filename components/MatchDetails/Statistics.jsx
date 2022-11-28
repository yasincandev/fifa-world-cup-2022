import React from "react";
import { Heading, Image, Flex, Text } from "@chakra-ui/react";

const Statistics = ({ home, away }) => {
  const headers = [
    "Attempts on Goal",
    "Attempts on Goal Against",
    "On Target Shots",
    "Off Target",
    "Block Shots",
    "Corners",
    "Offsides",
    "Passes",
    "Completed Passes",
    "Tackles",
    "Free Kicks",
    "Goal Kicks",
    "Penalties",
    "Scored Penalties",
    "Throw Ins",
    "Yellow Cards",
    "Red Cards",
    "Fouls",
  ];

  return (
    <Flex direction={"column"} gap={5} mt={5} mb={5}>
      <Heading as='h3' size='md' mb='2' textAlign={"center"}>
        Statistics
      </Heading>
      <Flex justifyContent={"space-evenly"}>
        <Image
          src={`/assets/images/${home.country}.jpg`}
          alt={home.country}
          w={{ base: "50px", md: "100px" }}
          objectFit={"cover"}
          borderRadius={"md"}
        />
        <Text
          textTransform={"capitalize"}
          fontWeight={"medium"}
          textAlign={"center"}
          color={"white"}
        >
          TEAM STATS
        </Text>
        <Image
          src={`/assets/images/${away.country}.jpg`}
          alt={away.country}
          w={{ base: "50px", md: "100px" }}
          objectFit={"cover"}
          borderRadius={"md"}
        />
      </Flex>
      <Flex justifyContent={"space-evenly"} p={{ base: 5, sm: 12, md: 17 }}>
        <Flex
          direction={"column"}
          gap={5}
          textAlign={"center"}
          alignItems={"center"}
        >
          {Object.values(home).map((stat, index) => (
            <Text
              key={index}
              textTransform={"capitalize"}
              fontWeight={"medium"}
              textAlign={"center"}
              color={"white"}
            >
              {stat}
            </Text>
          ))}
        </Flex>
        <Flex
          gap={5}
          direction={"column"}
          textAlign={"center"}
          alignItems={"center"}
          mt={"3em"}
        >
          {headers.map((header, index) => (
            <Text
              key={index}
              textTransform={"capitalize"}
              fontWeight={"medium"}
              textAlign={"center"}
              color={"white"}
            >
              {header}
            </Text>
          ))}
        </Flex>
        <Flex
          direction={"column"}
          gap={5}
          textAlign={"center"}
          alignItems={"center"}
        >
          {Object.values(away).map((stat, index) => (
            <Text
              key={index}
              textTransform={"capitalize"}
              fontWeight={"medium"}
              textAlign={"center"}
              color={"white"}
            >
              {stat}
            </Text>
          ))}
        </Flex>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        p={{ base: 5, sm: 12, md: 17 }}
      ></Flex>
    </Flex>
  );
};

export default Statistics;
