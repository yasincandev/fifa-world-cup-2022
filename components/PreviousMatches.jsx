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
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { MdOutlinePlace } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import dayjs from "dayjs";
import { useRef, useState } from "react";
import MatchDetails from "./MatchDetails/MatchDeatils";

const PreviousMatches = ({ previous }) => {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [country, setCountry] = useState(null);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMatchClick = (match) => {
    setLoading(true);
    setSelectedMatch(match);
    setCountry(match.home_team_country);
    setId(match.id);
    setLoading(false);
    console.log(match);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

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
        Previous Matches And Results
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
                  roundedTop={"md"}
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
                  roundedTop={"md"}
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
                  roundedTop={"md"}
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

                <Button
                  colorScheme='blue'
                  //double on click in a single click
                  onClick={() => {
                    handleMatchClick(match);
                    onOpen();
                  }}
                  mx={"auto"}
                  my={5}
                >
                  Match Details
                </Button>
                {selectedMatch && (
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    size={{ base: "xs", md: "xl" }}
                    motionPreset='slideInBottom'
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                          Match Details
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          <MatchDetails
                            selectedMatch={selectedMatch}
                            country={country}
                            id={id}
                            setSelectedMatch={setSelectedMatch}
                            setCountry={setCountry}
                            setId={setId}
                            loading={loading}
                            setLoading={setLoading}
                          />
                        </AlertDialogBody>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                )}
              </SimpleGrid>
            </Box>
          )
      )}
    </Container>
  );
};

export default PreviousMatches;

/*
 */
