import { Flex, Text, Icon } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import { StopWatch, Stadium } from "../Icons";

const Info = ({ datetime, venue, stage_name, weather }) => {
  return (
    <Flex
      gap={2}
      direction={"column"}
      align={"center"}
      justify={"center"}
      p={5}
    >
      <Text color={"white"} textAlign={"center"} fontSize={"lg"}>
        {stage_name}
      </Text>
      <Flex
        direction={"row"}
        align={"center"}
        color={"white"}
        textAlign={"center"}
        fontSize={"lg"}
      >
        <Icon
          as={StopWatch}
          w={{
            base: "20px",
            md: "30px",
          }}
          h={{
            base: "20px",
            md: "30px",
          }}
          fill={"white"}
        />

        <Text ml={2}>{dayjs(datetime).format("DD MMMM YYYY, HH:mm")}</Text>
      </Flex>

      <Flex
        direction={"row"}
        align={"center"}
        color={"white"}
        textAlign={"center"}
        fontSize={"lg"}
      >
        <Icon
          w={{
            base: "20px",
            md: "30px",
          }}
          h={{
            base: "20px",
            md: "30px",
          }}
          as={Stadium}
          fill={"white"}
        />
        <Text ml={2}>{venue}</Text>
      </Flex>
    </Flex>
  );
};

export default Info;
