// Navbar.js
import React from "react";
import {
  Box,
  Button,
  Image,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex align="center" justify="space-between" p="4">
      {/* Logo */}
      <Image src="/vert.png" alt="Logo" w="220px" mr="5" />

      {/* Links */}
      <Box display={["none", "none", "flex"]}>
        <Button mx="2" color="black" bg="none" fontSize="16px">
          Home
        </Button>
        <Button mx="2" color="black" bg="none" fontSize="16px">
          About
        </Button>
        <Button mx="2" color="black" bg="none" fontSize="16px">
          Services
        </Button>
        <Button mx="2" color="black" bg="none" fontSize="16px">
          Contact
        </Button>
      </Box>

      {/* Spacer */}
      <Spacer />

      {/* Dropdown */}
      <Menu>
        <MenuButton as={Button} mx="2">
          Links
        </MenuButton>
        <MenuList>
          <MenuItem>Link 1</MenuItem>
          <MenuItem>Link 2</MenuItem>
          <MenuItem>Link 3</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
