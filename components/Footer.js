// components/Footer.js
import React from "react";
import { Box, chakra, Flex, Link, Text, Stack, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <chakra.footer
      bgGradient="linear(to-r, teal.500, cyan.500)"
      color="white"
      py="4"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px="4"
      >
        {/* Social Links */}
        <HStack spacing="4">
          <Link href="#" target="_blank">
            <Box as="img" src="/twitter-icon.png" alt="Twitter" boxSize="8" />
          </Link>
          <Link href="#" target="_blank">
            <Box as="img" src="/linkedin-icon.png" alt="LinkedIn" boxSize="8" />
          </Link>
          <Link href="#" target="_blank">
            <Box as="img" src="/github-icon.png" alt="GitHub" boxSize="8" />
          </Link>
        </HStack>

        {/* Copyright */}
        <Text fontSize="sm" opacity="0.8">
          © 2023{" "}
          <Link href="https://acodernamedsubhro.vercel.app" target="_blank">
            ACNS
          </Link>
          . All rights reserved.
        </Text>
      </Flex>
    </chakra.footer>
  );
};

export default Footer;
