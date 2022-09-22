import { Box, Heading, Tag, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Box>
      <Heading>About</Heading>
      <Text mt={4}>
        Contoh shopping cart dengan ReactJS. Pergi ke{" "}
        <Tag>
          <Link to="/store">Store</Link>
        </Tag>{" "}
        untuk melihatnya.
      </Text>
    </Box>
  );
}
