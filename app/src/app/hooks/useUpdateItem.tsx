import useCart from "./useCart";
import { setLocalStorage } from "../utils";
import { CartItem as CartItemType } from "../type";

const useUpdateItem = () => {
  const { cartItems, setCartItems } = useCart();

  const updateItem = (product: CartItemType, action: "INCREASE" | "DECREASE") => {
    const currentCartItems = [...cartItems];
    const existingCartItem = currentCartItems.find(
      (item) => item.id === product.id
    );

    if (!existingCartItem) {
      throw new Error("updateCartItem: Product does not exist.");
    }
    if (action === "INCREASE") {
        existingCartItem.volume += 0.5;
    }

    if (action === "DECREASE") {
      existingCartItem.volume <= 0.5 ? currentCartItems.splice(currentCartItems.indexOf(existingCartItem), 1) : existingCartItem.volume -= 0.5;
    }
    setLocalStorage("cart", currentCartItems)
    setCartItems(currentCartItems);
  };

  return { updateItem };
};

export default useUpdateItem;