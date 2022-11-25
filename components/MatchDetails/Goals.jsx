import { Flex, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { SoccerBall } from "../Icons";

const Goals = ({ home_team_events, away_team_events }) => {
  return (
    <Flex align={"center"} justify={"space-between"} p={5} rounded={"lg"}>
      <Flex direction={"column"} gap={2} rounded={"lg"}>
        {home_team_events?.map(
          (event) =>
            event.type_of_event === "goal" && (
              <Flex
                direction={"row"}
                align={"center"}
                justify={"center"}
                rounded={"lg"}
                key={event.id}
              >
                <Flex direction={"row"} align={"center"} gap={2}>
                  <Text fontSize={"lg"} color={"white"}>
                    {event.player}
                  </Text>
                  <Text fontSize={"lg"} color={"white"}>
                    {event.time}
                  </Text>
                </Flex>
              </Flex>
            )
        )}
      </Flex>
      <Icon as={SoccerBall} w={10} h={10} />
      <Flex direction={"column"} gap={2} rounded={"lg"}>
        {away_team_events?.map(
          (event) =>
            event.type_of_event === "goal" && (
              <Flex
                direction={"row"}
                align={"center"}
                justify={"center"}
                rounded={"lg"}
                key={event.id}
              >
                <Flex direction={"row"} align={"center"} gap={2}>
                  <Text fontSize={"lg"} color={"white"}>
                    {event.player}
                  </Text>
                  <Text fontSize={"lg"} color={"white"}>
                    {event.time}
                  </Text>
                </Flex>
              </Flex>
            )
        )}
      </Flex>
    </Flex>
  );
};

export default Goals;
