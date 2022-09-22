import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useShoppingCart } from "../../helpers/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";

interface StoreItem {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export default function StoreItem({ id, name, price, imgUrl }: StoreItem) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity: number = getItemQuantity(id);

  return (
    <Box shadow="md" h="full" bg="white" overflow="hidden" rounded="md">
      <Image src={imgUrl} height="200px" w="full" objectFit="cover" />
      <Flex flexDirection="column" p={4}>
        <Flex justify="space-between" alignItems="baseline" mb={4}>
          <Text fontWeight="bold" fontSize="2xl">
            {name}
          </Text>
          <Text fontWeight="semibold" fontSize="lg">
            {formatCurrency(price)}
          </Text>
        </Flex>
        <Box mt="auto">
          {quantity === 0 ? (
            <Button colorScheme="pink" onClick={() => increaseCartQuantity(id)}>
              + Add to Cart
            </Button>
          ) : (
            <Flex alignItems="center" flexDir="column" gap=".5rem">
              <Flex
                justify="center"
                alignItems="center"
                gap=".5rem"
                style={{ gap: ".5rem" }}
              >
                <Button
                  colorScheme="pink"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <Box>
                  <Text fontWeight="semibold">{quantity}</Text>
                </Box>
                <Button
                  colorScheme="pink"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </Flex>
              <Button colorScheme="red" onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </Flex>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
