import { Box, Heading } from "@chakra-ui/react";

const Lineups = ({ home_team_lineup, away_team_lineup }) => {
  const homeLineup = home_team_lineup.starting_eleven;
  const awayLineup = away_team_lineup.starting_eleven;

  return (
    <Box>
      <Heading as='h3' size='md' mb='2'>
        Lineup
      </Heading>
    </Box>
  );
};

export default Lineups;
