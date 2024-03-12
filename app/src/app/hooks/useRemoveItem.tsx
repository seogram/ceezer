import useCart from "./useCart";
import { setLocalStorage } from "../utils";
import { cartItem } from "../type";

const useRemoveItem = () => {
  const { cartItems, setCartItems } = useCart();

  const removeItem = (product: cartItem) => {
    const currentCartItems = [...cartItems];
    const existingCartItem = currentCartItems.find(
      (item) => item.id === product.id
    );

    if (!existingCartItem) {
      throw new Error("removeFromCart: Product does not exist.");
    }

    currentCartItems.splice(currentCartItems.indexOf(existingCartItem), 1);

    setLocalStorage("cart", currentCartItems)
    setCartItems(currentCartItems);
  };

  return { removeItem };
};

export default useRemoveItem;