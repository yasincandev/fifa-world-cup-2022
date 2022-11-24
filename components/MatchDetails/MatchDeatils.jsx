import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
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
      position={"absolute"}
      mx={"auto"}
      top={"40%"}
      left={"50%"}
      transform={"translate(-50%, -50%)"}
      zIndex={100}
      bg={"#8D1B3D"}
      _dark={{
        bg: "#550065",
      }}
    >
      <Button
        onClick={() => setSelectedMatch(null)}
        top={"0"}
        right={"0"}
        color={"black"}
      >
        Close
      </Button>
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
      <Tabs align='center' colorScheme={"white"} variant={"enclosed"}>
        <TabList color={"white"}>
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
    </Container>
  );
};

export default MatchDetails;
