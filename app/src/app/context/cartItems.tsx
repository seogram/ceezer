
"use client";

import { createContext } from "react";

import { useState } from "react";
// import { ICartItem } from "../external/cart";

interface ICartItemsContext {
  cartItems: any[];
  setCartItems: (cartItems: any[]) => void;
}

export const CartItemsContext = createContext<ICartItemsContext>({
  cartItems: [],
  setCartItems: () => {},
});

export const CartItemsProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
};