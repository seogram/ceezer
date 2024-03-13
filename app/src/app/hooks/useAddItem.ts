import useCart from "./useCart";
import { setLocalStorage } from "../utils";
import { CartItem as CartItemType } from "../type";

const useAddItem = () => {
  const { cartItems, setCartItems } = useCart();

  const addItem = (cartItem: CartItemType) => {
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