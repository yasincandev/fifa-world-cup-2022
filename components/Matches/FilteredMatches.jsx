import {
  Box,
  chakra,
  Flex,
  Image,
  Text,
  Icon,
  Grid,
  Button,
} from "@chakra-ui/react";
import { MdOutlinePlace } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import dayjs from "dayjs";
import { useRouter } from "next/router";

const FilteredMatches = ({ match }) => {
  const router = useRouter();
  return (
    <Flex
      key={match.id}
      direction={"column"}
      bg={"#8D1B3D"}
      _dark={{
        bg: "#550065",
        borderColor: "#8D1B3D",
      }}
      borderBottom={"2px"}
      p={5}
      borderColor={"#550065"}
      borderRadius={"md"}
    >
      <Grid templateColumns='repeat(3, 1fr)' gap={2} py={5} color={"white"}>
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
            {match.away_team.country}
          </Text>
        </Box>
      </Grid>
      <Grid templateColumns='repeat(2, 1fr)' gap={2} py={5} color={"white"}>
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
      </Grid>

      <Button
        mb={2}
        variant={"solid"}
        color={"black"}
        bg={"#f3dde4"}
        onClick={() => {
          router.push(`/matches/${match.id}`);
        }}
      >
        View Match Details
      </Button>
    </Flex>
  );
};

export default FilteredMatches;
