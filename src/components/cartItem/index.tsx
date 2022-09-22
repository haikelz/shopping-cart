import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useShoppingCart } from "../../helpers/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import storeItems from "../../utils/data.json";

type CartItem = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItem) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((value) => value.id === id);

  if (item == null) return null;

  return (
    <Stack
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      w="full"
      gap={2}
    >
      <Box>
        <Image src={item.imgUrl} w="200px" h="100px" objectFit="cover" />
        <Box mt={2}>
          <Text>{item.name}</Text>
          <Text fontSize="lg">Jumlah: {quantity}</Text>
        </Box>
      </Box>
      <Flex justify="center" gap={2} alignItems="center">
        <Box>
          <Text fontWeight="bold">{formatCurrency(item.price * quantity)}</Text>
        </Box>
        <Button onClick={() => removeFromCart(item.id)}>&times;</Button>
      </Flex>
    </Stack>
  );
}
