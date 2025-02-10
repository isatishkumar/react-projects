import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack 
      backgroundColor="white" 
      borderRadius="xl"
      cursor="pointer"
      spacing={0}
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="xl"
        objectFit="cover"
        width="100%"
      />
      <VStack 
        alignItems="flex-start" 
        p={5} 
        spacing={4}
        width="100%"
      >
        <Heading 
          as="h2" 
          size="md" 
          color="black"
        >
          {title}
        </Heading>
        <Text 
          color="gray.500"
          fontSize="md"
        >
          {description}
        </Text>
        <HStack 
          spacing={2}
          color="black"
          fontSize="md"
        >
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
