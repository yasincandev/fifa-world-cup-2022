import {
  Box,
  Container,
  Heading,
  Image,
  Circle,
  Flex,
  Text,
} from "@chakra-ui/react";
import HomeLineup from "./HomeLineup";
import AwayLineup from "./AwayLineup";

const Lineups = ({ home_team_lineup, away_team_lineup }) => {
  const homeLineup = home_team_lineup.starting_eleven;
  const awayLineup = away_team_lineup.starting_eleven;

  return (
    <Box>
      <Heading as='h3' size='md' mb='2'>
        Lineup
      </Heading>
      <Container
        position='relative'
        height='500px'
        width='100%'
        bg='url(/assets/pitch.jpg)'
        bgSize='cover'
        bgRepeat='no-repeat'
        bgPosition='center'
        borderRadius='lg'
        overflow='hidden'
      >
        <HomeLineup homeLineup={homeLineup} />
        <AwayLineup awayLineup={awayLineup} />
      </Container>
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
