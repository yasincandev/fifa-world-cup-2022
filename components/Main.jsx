import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import Groups from "./Matches/Groups";
import PreviousMatches from "./Matches/PreviousMatches";
import Today from "./Matches/Today";

const Main = ({ matches, teams, previous }) => {
  return (
    <Container maxW='container.xl' mt={"10"} mb={"10"}>
      <Tabs>
        <TabList
          color={"#8D1B3D"}
          _dark={{
            color: "#550065",
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Tab
            _selected={{
              bg: useColorModeValue("#8D1B3D", "#550065"),
              color: "white",
            }}
            color={useColorModeValue("#8D1B3D", "#fff")}
          >
            Groups
          </Tab>
          <Tab
            _selected={{
              bg: useColorModeValue("#8D1B3D", "#550065"),
              color: "white",
            }}
            color={useColorModeValue("#8D1B3D", "#fff")}
          >
            Today&#39;s Matches
          </Tab>
          <Tab
            _selected={{
              bg: useColorModeValue("#8D1B3D", "#550065"),
              color: "white",
            }}
            color={useColorModeValue("#8D1B3D", "#fff")}
          >
            Previous Matches
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Groups teams={teams} />
          </TabPanel>
          <TabPanel>
            <Today matches={matches} />
          </TabPanel>
          <TabPanel>
            <PreviousMatches previous={previous} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Main;
