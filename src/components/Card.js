import React from "react";
import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <ChakraCard maxW="sm">
      <CardBody>
        <Image
          src={imageSrc}
       
          borderRadius="lg"
        />
        <VStack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>
            {description}
          </Text>
        </VStack>
      </CardBody>
      <Divider />
      <CardFooter>
        <a href="#">
          Read More  <FontAwesomeIcon icon={faArrowRight} size="1x" style={{ marginLeft: '8px', marginTop:'7px' }} />
        </a>
      </CardFooter>
    </ChakraCard>
  );
};

export default Card;
