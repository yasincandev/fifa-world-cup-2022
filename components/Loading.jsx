import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
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
  );
};

export default Loading;
