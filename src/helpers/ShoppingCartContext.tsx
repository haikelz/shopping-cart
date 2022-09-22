import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/shoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Children {
  children: ReactNode[] | JSX.Element;
}

interface CartItem {
  id: number;
  quantity: number;
}

interface ShoppingCartContext {
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: Children) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartItems.reduce(
    (quantity, value) => value.quantity + quantity,
    0
  );

  // get item
  function getItemQuantity(id: number) {
    return cartItems.find((value) => value.id === id)?.quantity || 0;
  }

  // increase
  function increaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((value) => value.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((value) => {
          if (value.id === id) {
            return { ...value, quantity: value.quantity + 1 };
          } else {
            return value;
          }
        });
      }
    });
  }

  // decrease
  function decreaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((value) => value.id === id)?.quantity === 1) {
        return currentItems.filter((value) => value.id !== id);
      } else {
        return currentItems.map((value) => {
          if (value.id === id) {
            return { ...value, quantity: value.quantity - 1 };
          } else {
            return value;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((value) => value.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
