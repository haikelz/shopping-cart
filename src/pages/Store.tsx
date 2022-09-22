import { Grid, Heading } from "@chakra-ui/react";
import { Row } from "react-bootstrap";
import StoreItem from "../components/storeItem";
import storeItems from "../utils/data.json";

export default function Store() {
  return (
    <>
      <Heading>Store</Heading>
      <Grid
        mt={4}
        templateColumns={{
          base: "repeat(1, minmax(0,1fr))",
          md: "repeat(2, minmax(0,1fr))",
          lg: "repeat(3, minmax(0,1fr))",
        }}
        templateRows="repeat(1, minmax(0,1fr))"
        gap={4}
      >
        {storeItems.map((value, index) => (
          <StoreItem key={index} {...value} />
        ))}
      </Grid>
    </>
  );
}
