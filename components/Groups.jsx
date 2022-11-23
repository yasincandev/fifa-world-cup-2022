import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card,
  Text,
  Image,
  Flex,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";

const Groups = ({ teams }) => {
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
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 5, lg: 8 }}
        mb={5}
      >
        {teams.map((team) => (
          <TableContainer
            p={"1rem"}
            rounded={"lg"}
            key={team.id}
            color={"black"}
          >
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
                {team.teams.map((team) => (
                  <Tr key={team.id}>
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
    </Flex>
  );
};

export default Groups;
/*   */
