import { useContext } from "react";
import { CartItemsContext } from "../context/CartItems";

const useCart = () => {
  const { cartItems, setCartItems } = useContext(CartItemsContext);

  return { cartItems, setCartItems };
};

export default useCart;
