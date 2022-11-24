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
  Container,
} from "@chakra-ui/react";
import { MdOutlinePlace } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import dayjs from "dayjs";

const CurrentMatch = ({ current }) => {
  return (
    <Box mb={10} maxW='7xl' mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
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
        Now Playing
      </chakra.h1>

      {current.length === 0 ? (
        <Flex
          justifyContent={"space-evenly"}
          alignItems={"center"}
          maxW={"7xl"}
          py={10}
          px={{ base: 2, sm: 12, md: 17 }}
          bg={"#8D1B3D"}
          rounded={"xl"}
          shadow={"xl"}
          _dark={{
            bg: "#550065",
          }}
          color={"white"}
        >
          <Image boxSize={"200px"} src='/assets/heroicon.gif' alt='heroicon' />
          <Text fontSize='2xl' fontWeight={"bold"} textAlign='center'>
            No matches are currently being played. Please check back later.
          </Text>
        </Flex>
      ) : (
        current?.map((match) => (
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
                  <Flex gap={3} alignItems={"center"} justifyContent={"center"}>
                    <Icon as={BsStopwatch} w={6} h={6} />
                    <Text fontWeight={"medium"}>
                      {match.status === "in_progress"
                        ? `${match.time}`
                        : match.status === "completed"
                        ? "Completed"
                        : dayjs(match.datetime).format("hh:mm A")}
                    </Text>
                  </Flex>
                  <Flex gap={3} alignItems={"center"} justifyContent={"center"}>
                    <Icon as={MdOutlinePlace} w={6} h={6} />
                    <Text fontWeight={"medium"}>{match.venue}</Text>
                  </Flex>
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
        ))
      )}
    </Box>
  );
};

export default CurrentMatch;
