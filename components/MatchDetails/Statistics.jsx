import React from "react";
import { Box, Container, Heading, Flex, Text, Icon } from "@chakra-ui/react";

const Statistics = ({ home, away }) => {
  return (
    <Box zIndex={1} position='relative'>
      <Heading as='h3' size='md' mb='2' textAlign={"center"}>
        Statistics
      </Heading>
    </Box>
  );
};

export default Statistics;
