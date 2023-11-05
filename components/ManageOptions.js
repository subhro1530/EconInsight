import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Flex,
  Heading,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ManageOptions = () => {
  return (
    <Flex
      bg="url('https://wallpapers.com/images/hd/pure-white-1920-x-1080-background-1y2u3xopp63ifx7z.jpg') center / cover fixed"
      py="50"
      position="relative"
    >
      <VStack spacing={8} align="center" justify="center" w="100%">
        <Heading color="black" textAlign="center" fontSize="6xl" fontWeight="300">
          E-learning Management System
        </Heading>

        <Flex p="5" flexDirection={{ base: "column", md: "row" }}>
          <Box flex="1" p="4">
            <Text color="black" fontSize="lg">
              Embark on a transformative financial education journey with our
              E-learning Management System. Explore curated courses covering
              money management, transactions, financial planning, retirement,
              and investments. Our dynamic platform merges engaging content with
              practical insights, fostering financial literacy. Navigate
              personal finance intricacies and contribute to economic growth.
              Join us in revolutionizing learning, where knowledge transforms
              into actionable decisions for a financially empowered future.
            </Text>
            <Button colorScheme="pink" mt="4">
              Click here to know more
            </Button>
          </Box>

          <VStack
            flex="1"
            p="4"
            align="flex-start"
            display="flex"
            w="100"
            flexDirection="row"
            flexWrap="wrap"
          >
            <Dropdown label="Money and Transaction" />
            <Dropdown label="Financial Planning" />
            <Dropdown label="Retirement Planning" />
            <Dropdown label="Renting" />
            <Dropdown label="Smart Trading" />
            <Dropdown label="Intraday" />
            <Dropdown label="Investment" />
            <Dropdown label="Drop Services" />
            <Dropdown label="Post Office Norms" />
            <Dropdown label="Bank Structure" />
            {/* Add other dropdowns as needed */}
          </VStack>
        </Flex>
      </VStack>
    </Flex>
  );
};

const Dropdown = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu>
      <MenuButton
        as={Button}
        color="black"
        fontSize="lg"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </MenuButton>
      <MenuList>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ManageOptions;
