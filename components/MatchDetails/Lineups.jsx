import {
  Box,
  Container,
  Heading,
  Image,
  Circle,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import HomeLineup from "./HomeLineup";
import AwayLineup from "./AwayLineup";
import { Pitch } from "../Icons";

const Lineups = ({ home_team_lineup, away_team_lineup }) => {
  const homeLineup = home_team_lineup.starting_eleven;
  const awayLineup = away_team_lineup.starting_eleven;

  console.log("homeLineup", homeLineup);
  console.log("awayLineup", awayLineup);

  return (
    <Box>
      <Heading as='h3' size='md' mb='2'>
        Lineup
      </Heading>
      <Flex
        maxW='container.xl'
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        mx={"auto"}
        py={5}
        gap={5}
        px={{ base: 2, sm: 12, md: 17 }}
      >
        <HomeLineup homeLineup={homeLineup} />
        <Icon as={Pitch} w={250} h={250} />
        <AwayLineup awayLineup={awayLineup} />
      </Flex>
    </Box>
  );
};

export default Lineups;

/*
{homeLineup.map((player) =>
          player.position === "Goalkeeper" ? (
            <Circle
              key={player.name}
              position='absolute'
              size='40px'
              bg='tomato'
              color='white'
              left='240px'
              top='240px'
            >
              {player.shirt_number}
            </Circle>
          ) : player.position === "Defender" ? (
            <Circle
              position='absolute'
              size='40px'
              bg='blue'
              color='white'
              left='350px'
              top='350px'
            >
              {player.shirt_number}
            </Circle>
          ) : player.position === "Midfielder" ? (
            <Circle position='absolute' size='125px' bg='black' />
          ) : player.position === "Forward" ? (
            <Circle position='absolute' size='55px' bg='yellow' />
          ) : null
        )}
        */
