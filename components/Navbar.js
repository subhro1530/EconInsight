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
} from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex align="center" justify="space-between" p="4">
      {/* Logo */}
      <Image src="/vert.png" alt="Logo" w="220px" mr="5" />

      {/* Links */}
      <Box display={["none", "none", "flex"]}>
        <NextLink href="/" passHref>
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
          >
            Home
          </ChakraLink>
        </NextLink>
        <NextLink href="/gallery" passHref>
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
          >
            Gallery
          </ChakraLink>
        </NextLink>
        <NextLink href="/services" passHref>
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
          >
            Services
          </ChakraLink>
        </NextLink>
        <NextLink href="/contact" passHref>
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
          >
            Contact
          </ChakraLink>
        </NextLink>
      </Box>

      {/* Spacer */}
      <Spacer />

      {/* Dropdown */}
      <Menu>
        <MenuButton fontWeight="400" as={Button} mx="2">
          Links
        </MenuButton>
        <MenuList>
          <MenuItem>
            <NextLink href="/team" passHref>
              <ChakraLink
                as="a"
                _hover={{
                  textDecoration: "none",
                  transition: "color 0.3s, text-decoration 0.3s",
                  color: "teal.500",
                }}
              >
                Our Team
              </ChakraLink>
            </NextLink>
          </MenuItem>
          <MenuItem>
            <NextLink href="/location" passHref>
              <ChakraLink
                as="a"
                _hover={{
                  textDecoration: "none",
                  transition: "color 0.3s, text-decoration 0.3s",
                  color: "teal.500",
                }}
              >
                Our Location
              </ChakraLink>
            </NextLink>
          </MenuItem>
          <MenuItem>
            <NextLink href="/subscribe" passHref>
              <ChakraLink
                as="a"
                _hover={{
                  textDecoration: "none",
                  transition: "color 0.3s, text-decoration 0.3s",
                    color: "teal.500",
                }}
              >
                Subscribe to Our Newsletter
              </ChakraLink>
            </NextLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
