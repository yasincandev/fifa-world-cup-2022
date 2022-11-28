import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Spinner,
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import Score from "./Score";
import Info from "./Info";
import Goals from "./Goals";
import Lineups from "./Lineups";

import Link from "next/link";
import Statistics from "./Statistics";

const MatchDetails = ({ match, isFetching }) => {
  const {
    home_team_country,
    away_team_country,
    home_team,
    away_team,
    away_team_events,
    home_team_events,
    datetime,
    venue,
    stage_name,
    weather,
    home_team_lineup,
    away_team_lineup,
    home_team_statistics,
    away_team_statistics,
  } = match;

  return (
    <Box
      bg={"#8D1B3D"}
      _dark={{
        bg: "#550065",
      }}
      color={"white"}
      mx={"auto"}
      py={5}
      px={{ base: 2, sm: 12, md: 17 }}
      mb={5}
      w={{ base: "100%", md: "90%" }}
      borderRadius={"md"}
    >
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
        <>
          <Link href='/'>
            <Button
              color={"black"}
              variant='outline'
              mb={5}
              bg={"white"}
              size='md'
            >
              Go Back
            </Button>
          </Link>
          <Score
            home_team={home_team}
            away_team={away_team}
            home_team_country={home_team_country}
            away_team_country={away_team_country}
          />
          <Info
            datetime={datetime}
            venue={venue}
            stage_name={stage_name}
            weather={weather}
          />
          <Goals
            home_team_events={home_team_events}
            away_team_events={away_team_events}
          />
          <Tabs color={"white"} align='center' colorScheme={"white"}>
            <TabList>
              <Tab>Lineups</Tab>
              <Tab>Statistics</Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={{ base: 2, sm: 12, md: 17 }}>
                <Lineups
                  home_team_lineup={home_team_lineup}
                  away_team_lineup={away_team_lineup}
                />
              </TabPanel>
              <TabPanel>
                <Statistics
                  home={home_team_statistics}
                  away={away_team_statistics}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </>
      )}
    </Box>
  );
};

export default MatchDetails;
