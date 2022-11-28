import {
  Box,
  chakra,
  Flex,
  Spinner,
  Image,
  Text,
  Icon,
  Grid,
  Container,
} from "@chakra-ui/react";
import { MdOutlinePlace } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import dayjs from "dayjs";
import { Weather } from "../Icons";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Today = () => {
  const { isLoading, error, data, isFetching } = useQuery(
    ["todayMatches"],
    () =>
      axios
        .get("https://worldcupjson.net/matches/today")
        .then((res) => res.data)
  );

  return (
    <Container
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
        {dayjs().format(" D MMMM, YYYY")} Matches And Results
      </chakra.h1>
      {isLoading ? (
        <Flex align={"center"} justify={"center"}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='lg'
            mx={"auto"}
          />
        </Flex>
      ) : (
        data?.map((match) => (
          <Flex key={match.id} direction={"column"}>
            <Grid
              templateColumns='repeat(3, 1fr)'
              gap={2}
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
                <Text
                  fontWeight='semibold'
                  textAlign={"center"}
                  mb={5}
                  fontSize={{ base: "xs", md: "md" }}
                  w={"100%"}
                  mt={2}
                >
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
                <Text
                  fontWeight='semibold'
                  textAlign={"center"}
                  mb={5}
                  fontSize={{ base: "xs", md: "md" }}
                  w={"100%"}
                  mt={2}
                >
                  {match.away_team.country}
                </Text>
              </Box>
            </Grid>
            <Grid
              borderBottom={"2px"}
              templateColumns='repeat(3, 1fr)'
              gap={2}
              py={5}
              color={"white"}
            >
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
                  {match.status === "in_progress"
                    ? `${match.time}`
                    : match.status === "completed"
                    ? "Completed"
                    : dayjs(match.datetime).format("hh:mm A")}
                </Text>
              </Flex>
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
                p={4}
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
    </Container>
  );
};

export default Today;
