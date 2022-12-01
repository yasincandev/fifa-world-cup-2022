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
  Grid,
} from "@chakra-ui/react";
import { MdOutlinePlace } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";

import { Weather } from "../Icons";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CurrentMatch = () => {
  const { isLoading, error, data, isFetching } = useQuery(
    ["currentMatches"],
    () =>
      axios
        .get("https://worldcupjson.net/matches/current")
        .then((res) => res.data)
  );

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

      {!data ? (
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
          <Image
            boxSize={{
              base: "100px",
              md: "200px",
              lg: "300px",
            }}
            src='/assets/current.gif'
            alt='heroicon'
          />
          <Text fontSize='2xl' fontWeight={"bold"} textAlign='center'>
            No matches are currently being played.
          </Text>
        </Flex>
      ) : (
        data?.map((match) => (
          <Flex key={match.id} direction={"column"}>
            <Grid
              templateColumns='repeat(3, 1fr)'
              gap={6}
              py={5}
              color={"white"}
            >
              <Box
                maxW={{ base: "xl", md: "2xl" }}
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                bg={"#8D1B3D"}
                _dark={{
                  bg: "#550065",
                }}
                px={{ base: 3, sm: 12, md: 17 }}
                py={{ base: 3, md: 4 }}
              >
                <Image
                  src={`/assets/images/${match.home_team.country}.jpg`}
                  alt={match.home_team.country}
                  objectFit='cover'
                  mx={"auto"}
                />

                <Box
                  mt='1'
                  fontWeight='semibold'
                  textAlign={"center"}
                  as='h4'
                  lineHeight='tight'
                  display={{ base: "none", md: "block" }}
                >
                  {match.home_team.name}
                </Box>
                <Text mt='1' fontWeight='semibold' textAlign={"center"}>
                  {match.home_team.country}
                </Text>
              </Box>
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                gap={3}
                bg={"#8D1B3D"}
                _dark={{
                  bg: "#550065",
                }}
                maxW={{ base: "xl", md: "2xl" }}
                borderWidth='1px'
                borderRadius='lg'
              >
                <Text
                  bg={"#8D1B3D"}
                  _dark={{
                    bg: "#550065",
                  }}
                  color={"white"}
                  rounded={"xl"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={{ base: "lg", md: "3xl" }}
                >
                  {match.home_team.goals} - {match.away_team.goals}
                </Text>
              </Flex>
              <Box
                maxW={{ base: "xl", md: "2xl" }}
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                bg={"#8D1B3D"}
                _dark={{
                  bg: "#550065",
                }}
                px={{ base: 3, sm: 12, md: 17 }}
                py={{ base: 3, md: 4 }}
              >
                <Image
                  src={`/assets/images/${match.away_team.country}.jpg`}
                  alt={match.away_team.country}
                  objectFit='cover'
                  mx={"auto"}
                />

                <Box
                  mt='1'
                  fontWeight='semibold'
                  textAlign={"center"}
                  as='h4'
                  lineHeight='tight'
                  display={{ base: "none", md: "block" }}
                >
                  {match.away_team.name}
                </Box>
                <Text mt='1' fontWeight='semibold' textAlign={"center"}>
                  {match.home_team.country}
                </Text>
              </Box>
            </Grid>
            <Grid templateColumns='repeat(3, 1fr)' py={5} color={"white"}>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                gap={3}
                bg={"#8D1B3D"}
                _dark={{
                  bg: "#550065",
                }}
                maxW={{ base: "xl", md: "2xl" }}
                borderWidth='1px'
                borderRadius='lg'
              >
                <Icon
                  as={MdOutlinePlace}
                  w={{ base: "20px", md: "30px" }}
                  h={{ base: "20px", md: "30px" }}
                />
                <Text
                  fontSize={{
                    base: "12px",
                    md: "md",
                  }}
                  fontWeight={"medium"}
                >
                  {match.venue}
                </Text>
              </Flex>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                gap={3}
                bg={"#8D1B3D"}
                _dark={{
                  bg: "#550065",
                }}
                maxW={{ base: "xl", md: "2xl" }}
                borderWidth='1px'
                borderRadius='lg'
              >
                <Icon
                  as={BsStopwatch}
                  w={{ base: "20px", md: "30px" }}
                  h={{ base: "20px", md: "30px" }}
                />
                <Text
                  fontSize={{
                    base: "12px",
                    md: "md",
                  }}
                  fontWeight={"medium"}
                >
                  {match.status === "in_progress" && `${match.time}`}
                </Text>
              </Flex>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                gap={3}
                bg={"#8D1B3D"}
                _dark={{
                  bg: "#550065",
                }}
                maxW={{ base: "xl", md: "2xl" }}
                borderWidth='1px'
                borderRadius='lg'
              >
                <Icon
                  as={Weather}
                  w={{ base: "20px", md: "30px" }}
                  h={{ base: "20px", md: "30px" }}
                />
                <Text
                  fontSize={{
                    base: "12px",
                    md: "md",
                  }}
                  fontWeight={"medium"}
                >
                  {match.weather.description}
                </Text>
              </Flex>
            </Grid>
          </Flex>
        ))
      )}
    </Box>
  );
};

export default CurrentMatch;
