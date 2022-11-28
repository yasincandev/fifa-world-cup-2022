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
  const homeLineup = home_team_lineup?.starting_eleven;
  const awayLineup = away_team_lineup?.starting_eleven;

  return (
    <Box zIndex={1} position='relative'>
      <Heading as='h3' size='md' mb='2' textAlign={"center"}>
        Lineup
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        p={{ base: 5, sm: 12, md: 17 }}
        gap={5}
      >
        <HomeLineup homeLineup={homeLineup} />

        <AwayLineup awayLineup={awayLineup} />
      </Flex>
    </Box>
  );
};

export default Lineups;
