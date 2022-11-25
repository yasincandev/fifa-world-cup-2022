import { Box, Heading, Image, Circle, Flex, Text } from "@chakra-ui/react";

const HomeLineup = ({ homeLineup }) => {
  const defenders = homeLineup.filter(
    (player) => player.position === "Defender"
  );
  const midfielders = homeLineup.filter(
    (player) => player.position === "Midfielder"
  );
  const forwards = homeLineup.filter((player) => player.position === "Forward");
  const goalkeeper = homeLineup.filter(
    (player) => player.position === "Goalkeeper"
  );

  return (
    <>
      {goalkeeper.map((player) => (
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
      ))}
      <Flex
        position='absolute'
        left='350px'
        top='30px'
        height='450px'
        direction='column'
        align='center'
        gap='12'
        justify='between'
      >
        {defenders.map((player) => (
          <Circle
            key={player.name}
            size='40px'
            bg='tomato'
            color='white'
            mb='2'
          >
            <Text fontSize='lg'> {player.shirt_number}</Text>
          </Circle>
        ))}
      </Flex>
      <Flex
        position='absolute'
        top='50%'
        left='40%'
        transform='translate(-50%, -50%)'
        direction='column'
        align='center'
        gap='20'
        justify='between'
      >
        {midfielders.map((player) => (
          <Circle
            key={player.name}
            size='40px'
            bg='tomato'
            color='white'
            mb='2'
          >
            <Text fontSize='lg'> {player.shirt_number}</Text>
          </Circle>
        ))}
      </Flex>
      <Flex
        position='absolute'
        top='50%'
        left='48%'
        transform='translate(-50%, -50%)'
        direction='column'
        align='center'
        gap='12'
        justify='between'
      >
        {forwards.map((player) => (
          <Circle
            key={player.name}
            size='40px'
            bg='tomato'
            color='white'
            mb='2'
          >
            <Text fontSize='lg'> {player.shirt_number}</Text>
          </Circle>
        ))}
      </Flex>
    </>
  );
};

export default HomeLineup;
