
"use client";

import { createContext, ReactNode } from "react";
import { useState, useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "../utils";
import { cartItem } from "../type";

type CartItemsContext = {
  cartItems: cartItem[],
  setCartItems: (cartItems: cartItem[]) => void
}

export const CartItemsContext = createContext<CartItemsContext>({
  cartItems: [],
  setCartItems: () => { },
});

export const CartItemsProvider = ({ children }: { children: ReactNode }) => {

  const [cartItems, setCartItems] = useState<any[]>([]);
  useEffect(() => {
    const currentCartItems = getLocalStorage("cart");
    if (currentCartItems) {
      setCartItems(currentCartItems)
      setLocalStorage("cart", currentCartItems)
    }
  }, [])

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
};