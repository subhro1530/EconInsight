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
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <Flex
      className={styles.navbar}
      align="center"
      justify="space-between"
      p="4"
    >
      {/* Logo */}
      <Image src="/vert.png" alt="Logo" boxSize="40px" mr="2" />

      {/* Links */}
      <Box display={["none", "none", "flex"]}>
        <Button mx="2">Home</Button>
        <Button mx="2">About</Button>
        <Button mx="2">Services</Button>
        <Button mx="2">Contact</Button>
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
