import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Flex,
  Spinner,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Groups = () => {
  const { isLoading, error, data, isFetching } = useQuery(["groups"], () =>
    axios.get("https://worldcupjson.net/teams").then((res) => res.data)
  );

  const groups = data?.groups;

  return (
    <Flex
      p={5}
      rounded={"lg"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      shadow={"xl"}
      bg={"#fafafa"}
      _dark={{
        bg: "#1A202C",
      }}
    >
      <Heading as='h1' size='2xl' mb={5}>
        Groups
      </Heading>
      {isFetching ? (
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
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 5, lg: 8 }}
          mb={5}
        >
          {groups?.map((team, idx) => (
            <TableContainer p={"1rem"} rounded={"lg"} key={idx} color={"black"}>
              <Table
                bg={"#8D1B3D"}
                _dark={{
                  bg: "#550065",
                }}
                color={"white"}
                variant='simple'
                rounded={"lg"}
                shadow={"xl"}
              >
                <TableCaption
                  placement='top'
                  color={"black"}
                  _dark={{
                    color: "white",
                  }}
                  fontWeight={"bold"}
                  fontSize={"2xl"}
                >
                  GROUP {team.letter}
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th color={"white"}>Flag</Th>
                    <Th color={"white"}>Team</Th>
                    <Th color={"white"}>W</Th>
                    <Th color={"white"}>D</Th>
                    <Th color={"white"}>L</Th>
                    <Th color={"white"}>P</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {team.teams.map((team, index) => (
                    <Tr key={index}>
                      <Td>
                        <Image
                          boxSize='25px'
                          objectFit='cover'
                          rounded={"full"}
                          src={`/assets/images/${team.country}.jpg`}
                          alt={team.country}
                        />
                      </Td>
                      <Td>{team.name}</Td>
                      <Td>{team.wins}</Td>
                      <Td>{team.draws}</Td>
                      <Td>{team.losses}</Td>
                      <Td>{team.group_points}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
};

export default Groups;
/*   */
