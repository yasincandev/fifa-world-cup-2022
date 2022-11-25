import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import Score from "./Score";
import Info from "./Info";
import Goals from "./Goals";
import Lineups from "./Lineups";

const MatchDetails = ({ selectedMatch, setSelectedMatch }) => {
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
  } = selectedMatch;

  return (
    <Container
      maxW={"7xl"}
      bg={"#8D1B3D"}
      _dark={{
        bg: "#550065",
      }}
    >
      {selectedMatch ? (
        <>
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
              <TabPanel>
                <Lineups
                  home_team_lineup={home_team_lineup}
                  away_team_lineup={away_team_lineup}
                />
              </TabPanel>
              <TabPanel>
                <p>2</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </>
      ) : (
        <Skeleton height='100vh' />
      )}
    </Container>
  );
};

export default MatchDetails;
