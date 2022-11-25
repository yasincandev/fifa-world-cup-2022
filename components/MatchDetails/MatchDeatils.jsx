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
  Spinner,
} from "@chakra-ui/react";
import Score from "./Score";
import Info from "./Info";
import Goals from "./Goals";
import Lineups from "./Lineups";
import { useState, useEffect } from "react";
import axios from "axios";

const MatchDetails = ({
  selectedMatch,
  setSelectedMatch,
  country,
  id,
  loading,
  setLoading,
}) => {
  const getMatchDetails = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://worldcupjson.net/matches/country/${country}?details=true`
      );
      const match = data.filter((match) => match.id === id);
      console.log(match);
      await setSelectedMatch(match[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMatchDetails();
  }, []);

  /*  useEffect(() => {
    
          setLoading(true);
          const getDetails = async () => {
            const { data } = await axios.get(
           
            );
            const match = data.find((match) => match.id === id);
            setSelectedMatch(match);
          };
      
          setLoading(false);
          getDetails();
        }, []); */
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
      maxW='container.xl'
      bg={"#8D1B3D"}
      _dark={{
        bg: "#550065",
      }}
      color={"white"}
      mx={"auto"}
      py={5}
      px={{ base: 2, sm: 12, md: 17 }}
    >
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </Container>
  );
};

export default MatchDetails;
