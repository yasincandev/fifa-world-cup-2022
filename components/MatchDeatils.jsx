import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import { MdOutlinePlace } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import dayjs from "dayjs";

const MatchDetails = ({ selectedMatch }) => {
  return (
    <Box
      bg='gray.100'
      w='100%'
      h='100%'
      p={4}
      borderRadius='lg'
      boxShadow='lg'
      color='gray.800'
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify='space-between'
        align='center'
      >
        <Flex align='center'>
          <Image
            src={`/assets/images/${selectedMatch.home_team.country}.jpg`}
            alt={selectedMatch.home_team.country}
            w='50px'
            h='50px'
            borderRadius='full'
            mr={2}
          />
          <Text fontWeight='bold'>{selectedMatch.home_team.country}</Text>
        </Flex>
        <Text fontWeight='bold' fontSize='2xl'>
          {selectedMatch.home_team.goals} - {selectedMatch.away_team.goals}
        </Text>
        <Flex align='center'>
          <Image
            src={`/assets/images/${selectedMatch.away_team.country}.jpg`}
            alt={selectedMatch.away_team.country}
            w='50px'
            h='50px'
            borderRadius='full'
            mr={2}
          />
          <Text fontWeight='bold'>{selectedMatch.away_team.country}</Text>
        </Flex>
      </Flex>
      <SimpleGrid columns={2} spacing={4} mt={4}>
        <Stat>
          <StatLabel>
            <Icon as={MdOutlinePlace} mr={2} />
            Venue
          </StatLabel>
          <chakra.span fontWeight='bold'>
            {selectedMatch.venue}, {selectedMatch.location}
          </chakra.span>
        </Stat>
        <Stat>
          <StatLabel>
            <Icon as={BsStopwatch} mr={2} />
            Date
          </StatLabel>
          <chakra.span fontWeight='bold'>
            {dayjs(selectedMatch.datetime).format("dddd, MMMM D, YYYY")}
          </chakra.span>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default MatchDetails;
