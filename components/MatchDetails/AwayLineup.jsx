import { Box, Heading, Image, Circle, Flex, Text } from "@chakra-ui/react";

const AwayLineup = ({ awayLineup }) => {
  const defenders = awayLineup.filter(
    (player) => player.position === "Defender"
  );
  const midfielders = awayLineup.filter(
    (player) => player.position === "Midfielder"
  );
  const forwards = awayLineup.filter((player) => player.position === "Forward");
  const goalkeeper = awayLineup.filter(
    (player) => player.position === "Goalkeeper"
  );

  return (
    <>
      {goalkeeper.map((player) => (
        <Circle
          key={player.name}
          position='absolute'
          size='40px'
          bg='blue'
          color='white'
          right='240px'
          top='240px'
        >
          {player.shirt_number}
        </Circle>
      ))}
      <Flex
        position='absolute'
        right='350px'
        top='30px'
        height='450px'
        direction='column'
        align='center'
        gap='12'
        justify='between'
      >
        {defenders.map((player) => (
          <Circle key={player.name} size='40px' bg='blue' color='white' mb='2'>
            <Text fontSize='lg'> {player.shirt_number}</Text>
          </Circle>
        ))}
      </Flex>
      <Flex
        position='absolute'
        top='50%'
        right='40%'
        transform='translate(-50%, -50%)'
        direction='column'
        align='center'
        gap='20'
        justify='between'
      >
        {midfielders.map((player) => (
          <Circle key={player.name} size='40px' bg='blue' color='white' mb='2'>
            <Text fontSize='lg'> {player.shirt_number}</Text>
          </Circle>
        ))}
      </Flex>
      <Flex
        position='absolute'
        top='50%'
        right='48%'
        transform='translate(-50%, -50%)'
        direction='column'
        align='center'
        gap='12'
        justify='between'
      >
        {forwards.map((player) => (
          <Circle key={player.name} size='40px' bg='blue' color='white' mb='2'>
            <Text fontSize='lg'> {player.shirt_number}</Text>
          </Circle>
        ))}
      </Flex>
    </>
  );
};

export default AwayLineup;
