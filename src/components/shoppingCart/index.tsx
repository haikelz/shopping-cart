import {
  Box,
  CloseButton,
  Drawer,
  DrawerContent,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useShoppingCart } from "../../helpers/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "../cartItem";
import storeItems from "../../utils/data.json";

type ShoppingCart = {
  isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCart) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Box minH="100vh">
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="right"
        onClose={closeCart}
        returnFocusOnClose={false}
        onOverlayClick={closeCart}
        size="md"
      >
        <DrawerContent minH="100vh">
          <Box p={4}>
            <CloseButton colorScheme="pink" onClick={closeCart} />
            <Stack divider={<StackDivider />} gap={4} mt={4}>
              {cartItems.map((value) => (
                <CartItem key={value.id} {...value} />
              ))}
              <Text fontWeight="bold" fontSize="xl">
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find(
                      (value) => value.id === cartItem.id
                    );
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </Text>
            </Stack>
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
