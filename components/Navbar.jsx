import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  ButtonProps,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const Links = ["Matches", "Groups", "Playoffs", "Players"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("#96405a", "#380342"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

function Switcher(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex h='100vh' justifyContent='center' alignItems='center'>
      <Button
        aria-label='Toggle Color Mode'
        onClick={toggleColorMode}
        _focus={{ boxShadow: "none" }}
        w='fit-content'
        {...props}
      >
        {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  );
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("#8D1B3D", "#550065")}
      px={8}
      color={useColorModeValue("#fff0f0", "#fff")}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          bg={useColorModeValue("#96405a", "#380342")}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Image
              src='/assets/logo.svg'
              alt='logo'
              boxSize='50px'
              objectFit='cover'
              ml={4}
            />
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Switcher color={useColorModeValue("#8D1B3D", "#ffffff")} />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
