import useCart from "./useCart";
import { setLocalStorage } from "../utils";
import { cartItem } from "../type";

const useAddItem = () => {
  const { cartItems, setCartItems } = useCart();

  const addItem = (cartItem: cartItem) => {
    const currentCartItems = [...cartItems];
    const existingCartItem = currentCartItems.find(
      (item) => item.id === cartItem.id
    );

    if (existingCartItem) {
      existingCartItem.volume += cartItem.volume;
    } else {
      currentCartItems.push(
        cartItem,
      );
    }

    setLocalStorage("cart", currentCartItems)
    setCartItems(currentCartItems);

  };

  return { addItem };
};

export default useAddItem;