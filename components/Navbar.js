// Navbar.js
import React from "react";
import {
  Box,
  Link as ChakraLink,
  Button,
  Image,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex align="center" justify="space-between" p="4">
      {/* Mobile Drawer Button (move to right in mobile mode) */}
      <Box display={["flex", "flex", "none"]} ml="auto" mr="4">
        <IconButton
          icon={<HamburgerIcon />}
          bgColor="transparent"
          aria-label="Open mobile menu"
          onClick={onOpen}
        />
      </Box>
      {/* Logo */}
      <Image src="/vert.png" alt="Logo" w="220px" mr="5" />

      {/* Links (visible in desktop mode) */}
      <Box display={["none", "none", "flex"]} alignItems="center">
        <NavLinks />
      </Box>

      {/* Spacer */}
      <Spacer />

      {/* Dropdown (visible in desktop mode) */}
      <Menu display={["flex", "flex", "none"]}>
        <MenuButton
          borderRadius="100px"
          p="3"
          as={Button}
          bgColor="transparent"
          mx="2"
        >
          <Image src="/user.png" height={30} width={30} />
        </MenuButton>
        <MenuList flexDirection="column">
          <NavLinks2 />
        </MenuList>
      </Menu>

      {/* Mobile Drawer (visible in mobile mode) */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            <NavLinks my="2" onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const NavLinks = ({ onClose }) => (
  <>
    <NavItem href="/" onClose={onClose}>
      Home
    </NavItem>
    <NavItem href="/gallery" onClose={onClose}>
      Gallery
    </NavItem>
    <NavItem href="/services" onClose={onClose}>
      Services
    </NavItem>
    <NavItem href="/contact" onClose={onClose}>
      Contact
    </NavItem>
  </>
);
const NavLinks2 = ({ onClose }) => (
  <Box display="flex" flexDirection="column">
    <NavItem my="2" href="/about" onClose={onClose}>
      About Us
    </NavItem>
    <NavItem my="2" href="/team" onClose={onClose}>
      Our Team
    </NavItem>
    <NavItem my="2" href="/products" onClose={onClose}>
      Our Products
    </NavItem>
  </Box>
);

const NavItem = ({ href, onClose, children }) => (
  <NextLink href={href} passHref>
    <ChakraLink
      as="a"
      mx="2"
      color="black"
      fontSize="16px"
      _hover={{
        textDecoration: "none",
        transition: "color 0.3s, text-decoration 0.3s",
        color: "teal.500",
      }}
      onClick={onClose}
    >
      {children}
    </ChakraLink>
  </NextLink>
);

export default Navbar;
