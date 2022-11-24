import { Box, Heading } from "@chakra-ui/react";
import SoccerLineUp from "react-soccer-lineup";

const Lineups = ({ home_team_lineup, away_team_lineup }) => {
  const homeLineup = home_team_lineup.starting_eleven;
  const awayLineup = away_team_lineup.starting_eleven;

  console.log("homeLineup", homeLineup);
  console.log("awayLineup", awayLineup);

  let homeTeam = {
    color: "red",
    squad: {
      gk: {
        name: homeLineup[0].name,
        number: homeLineup[0].shirt_number,
      },
      df: [
        {
          name: homeLineup[1].name,
          number: homeLineup[1].shirt_number,
        },
        {
          name: homeLineup[2].name,
          number: homeLineup[2].shirt_number,
        },
        {
          name: homeLineup[3].name,
          number: homeLineup[3].shirt_number,
        },
        {
          name: homeLineup[4].name,
          number: homeLineup[4].shirt_number,
        },
      ],
      mf: [
        {
          name: homeLineup[5].name,
          number: homeLineup[5].shirt_number,
        },
        {
          name: homeLineup[6].name,
          number: homeLineup[6].shirt_number,
        },
        {
          name: homeLineup[7].name,
          number: homeLineup[7].shirt_number,
        },
      ],
      fw: [
        {
          name: homeLineup[8].name,
          number: homeLineup[8].shirt_number,
        },
        {
          name: homeLineup[9].name,
          number: homeLineup[9].shirt_number,
        },
        {
          name: homeLineup[10].name,
          number: homeLineup[10].shirt_number,
        },
      ],
    },
  };
  let awayTeam = {
    color: "blue",
    squad: {
      gk: {
        name: awayLineup[0].name,
        number: awayLineup[0].shirt_number,
      },
      df: [
        {
          name: awayLineup[1].name,
          number: awayLineup[1].shirt_number,
        },
        {
          name: awayLineup[2].name,
          number: awayLineup[2].shirt_number,
        },
        {
          name: awayLineup[3].name,
          number: awayLineup[3].shirt_number,
        },
        {
          name: awayLineup[4].name,
          number: awayLineup[4].shirt_number,
        },
      ],
      mf: [
        {
          name: awayLineup[5].name,
          number: awayLineup[5].shirt_number,
        },
        {
          name: awayLineup[6].name,
          number: awayLineup[6].shirt_number,
        },
        {
          name: awayLineup[7].name,
          number: awayLineup[7].shirt_number,
        },
      ],
      fw: [
        {
          name: awayLineup[8].name,
          number: awayLineup[8].shirt_number,
        },
        {
          name: awayLineup[9].name,
          number: awayLineup[9].shirt_number,
        },
        {
          name: awayLineup[10].name,
          number: awayLineup[10].shirt_number,
        },
      ],
    },
  };

  return (
    <Box>
      <Heading as='h3' size='md' mb='2'>
        Lineup
      </Heading>
      <SoccerLineUp
        size={"responsive"}
        pattern={"lines"}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
      />
    </Box>
  );
};

export default Lineups;
