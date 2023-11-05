import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";

const Programmes = () => {
  // Sample data for generating multiple ProgrammeBlocks
  const programmeData = [
    {
      imageUrl: "/fepa_frame.png",
      paraText:
        "Empower your financial future with our adult financial education course. Gain essential skills for managing money, making informed decisions, and achieving economic stability. Start your journey today!",
    },
    {
      imageUrl: "fetp_frame.png",
      paraText:
        "Embark on our Financial Education Training Program, tailored for comprehensive learning. Equip yourself with vital financial skills, decision-making strategies, and a solid foundation for lifelong economic empowerment. Join us now!",
      reverse: true,
    },
    // Add more data as needed
  ];

  return (
    <Box mt="12">
      <Heading textAlign="center" fontWeight={300} fontSize="5xl" mb="8">
        Our Programmes
      </Heading>

      <VStack spacing="8" align="center">
        {programmeData.map((programme, index) => (
          <ProgrammeBlock key={index} {...programme} />
        ))}
      </VStack>
    </Box>
  );
};

const ProgrammeBlock = ({ imageUrl, paraText, reverse }) => {
  return (
    <Flex
      direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
      justifyContent="center"
      mb="8"
      w="70%"
    >
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Image
          src={imageUrl}
          alt="Programme Image"
          mb="4"
          w={{ base: "100%", md: "40%" }}
        />
        <VStack flex="1">
          <Text mx={5}>{paraText}</Text>
          <Button colorScheme="teal" mt="4">
            Start Journey
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};


export default Programmes;
