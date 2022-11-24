import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Image,
  Container,
  Text,
  useColorModeValue,
  Icon,
  Button,
} from "@chakra-ui/react";
import { MdOutlinePlace } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import dayjs from "dayjs";
import { useState } from "react";
import MatchDetails from "./MatchDetails/MatchDeatils";

const PreviousMatches = ({ previous }) => {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [id, setId] = useState(null);
  const [country, setCountry] = useState(null);

  const getDetails = async (match, id, country) => {
    const res = await fetch(
      `https://worldcupjson.net/matches/country/${country}?details=true`
    );
    const data = await res.json();
    //the data comes from api is so long, so we need to filter it to get the match we want to show. We can use filter method to do that. For example id= 11 is the match we want to show, so we can use filter method to get the match with id=11.
    const matchDetails = data.filter((match) => match.id === id);
    setSelectedMatch(matchDetails[0]);
  };

  return (
    <Box
      color={"white"}
      maxW='7xl'
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
    >
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
        color={"black"}
        _dark={{
          color: "white",
        }}
      >
        Previous Matches And Results
        {selectedMatch && (
          <MatchDetails
            selectedMatch={selectedMatch}
            setSelectedMatch={setSelectedMatch}
          />
        )}
      </chakra.h1>

      {previous?.map(
        (match) =>
          match.status === "completed" && (
            <Box
              key={match.id}
              maxW='7xl'
              mx={"auto"}
              py={5}
              px={{ base: 2, sm: 12, md: 17 }}
            >
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 5, lg: 8 }}
              >
                <Stat
                  px={{ base: 2, md: 4 }}
                  py={"5"}
                  shadow={"xl"}
                  bg={"#8D1B3D"}
                  _dark={{
                    bg: "#550065",
                  }}
                  rounded={"lg"}
                >
                  <Flex
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    textAlign={"center"}
                    gap={3}
                  >
                    <Box my={"auto"} alignContent={"center"}>
                      <Image
                        src={`/assets/images/${match.home_team.country}.jpg`}
                        alt={match.home_team.country}
                        boxSize='150px'
                        objectFit='cover'
                      />
                    </Box>
                    <Box pl={{ base: 2, md: 4 }}>
                      <StatLabel fontSize={"2xl"} fontWeight={"medium"}>
                        {match.home_team.name}
                      </StatLabel>
                      <StatLabel fontWeight={"medium"}>
                        {match.home_team.country}
                      </StatLabel>
                    </Box>
                  </Flex>
                </Stat>
                <Flex
                  direction='column'
                  px={{ base: 2, md: 4 }}
                  py={5}
                  shadow={"xl"}
                  bg={"#8D1B3D"}
                  _dark={{
                    bg: "#550065",
                  }}
                  rounded={"lg"}
                  textAlign={"center"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  gap={3}
                >
                  <Text fontSize={"4xl"} fontWeight={"medium"}>
                    {match.home_team.goals} - {match.away_team.goals}
                  </Text>

                  <Flex
                    direction='column'
                    px={{ base: 2, md: 4 }}
                    py={5}
                    gap={3}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Flex
                      gap={3}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Icon as={BsStopwatch} w={6} h={6} />
                      <Text fontWeight={"medium"}>
                        {match.status === "in_progress"
                          ? `${match.time}`
                          : match.status === "completed"
                          ? "Completed"
                          : dayjs(match.datetime).format("hh:mm A")}
                      </Text>
                    </Flex>
                    <Flex
                      gap={3}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Icon as={MdOutlinePlace} w={6} h={6} />
                      <Text fontWeight={"medium"}>{match.venue}</Text>
                    </Flex>
                    <Button
                      colorScheme='red'
                      variant='solid'
                      onClick={() => {
                        getDetails(match, match.id, match.home_team.country);
                        setId(match.id);
                        setCountry(match.home_team.country);
                      }}
                    >
                      View Details
                    </Button>
                  </Flex>
                </Flex>
                <Stat
                  px={{ base: 2, md: 4 }}
                  py={"5"}
                  shadow={"xl"}
                  bg={"#8D1B3D"}
                  _dark={{
                    bg: "#550065",
                  }}
                  rounded={"lg"}
                >
                  <Flex
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    textAlign={"center"}
                    gap={3}
                  >
                    <Box my={"auto"} alignContent={"center"}>
                      <Image
                        src={`/assets/images/${match.away_team.country}.jpg`}
                        alt={match.away_team.country}
                        boxSize='150px'
                        objectFit='cover'
                      />
                    </Box>
                    <Box pl={{ base: 2, md: 4 }}>
                      <StatLabel fontSize={"2xl"} fontWeight={"medium"}>
                        {match.away_team.name}
                      </StatLabel>
                      <StatLabel fontWeight={"medium"}>
                        {match.away_team.country}
                      </StatLabel>
                    </Box>
                  </Flex>
                </Stat>
              </SimpleGrid>
            </Box>
          )
      )}
    </Box>
  );
};

export default PreviousMatches;

/*
   <Image src={`/assets/${match.home_team.country}.jpg`} alt={match.home_team.country} />
   <Image src={`/assets/${match.away_team.country}.jpg`} alt={match.away_team.country} />
  */
