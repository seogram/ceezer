
"use client";

import { createContext, ReactNode } from "react";

import { useState, useEffect } from "react";
// import { ICartItem } from "../external/cart";
import { setLocalStorage, getLocalStorage } from "../utils";

interface ICartItemsContext {
  cartItems: any[];
  setCartItems: (cartItems: any[]) => void;
}

export const CartItemsContext = createContext<ICartItemsContext>({
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