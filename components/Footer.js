// components/Footer.js
import React from "react";
import { Box, chakra, Flex, Link, Text, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <chakra.footer bg="gray.800" color="white" py="4">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px="4"
      >
        {/* Social Links */}
        <Stack spacing={{ base: "2", md: "0" }} mb={{ base: "4", md: "0" }}>
          <Link mx="2" href="#" target="_blank">
            Twitter
          </Link>
          <Link mx="2" href="#" target="_blank">
            LinkedIn
          </Link>
          <Link mx="2" href="#" target="_blank">
            GitHub
          </Link>
        </Stack>

        {/* Copyright */}
        <Text fontSize="sm" opacity="0.8">
          © 2023 <Link href="https://acodernamedsubhro.vercel.app" target="_blank">ACNS</Link>.
          All rights reserved.
        </Text>
      </Flex>
    </chakra.footer>
  );
};

export default Footer;
