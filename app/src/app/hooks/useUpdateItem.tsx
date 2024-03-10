import useCart from "./useCart";
import { setLocalStorage } from "../utils";

// import { IProduct } from "../external/product";

const useUpdateItem = () => {
  const { cartItems, setCartItems } = useCart();

  const updateItem = (product: any) => {
    const currentCartItems = [...cartItems];
    const existingCartItem = currentCartItems.find(
      (item) => item.product.id === product.id
    );

    // if the product exists in the cart
    if (existingCartItem) {
      if (existingCartItem.product.volume > 1) {
        // minus quantity by one
        existingCartItem.quantity -= 1;
      } else {
        // remove the whole cart item
        currentCartItems.splice(currentCartItems.indexOf(existingCartItem), 1);
      }
    } else {
      throw new Error("removeFromCart: Product does not exist.");
    }

    setLocalStorage("cart" , currentCartItems)
    setCartItems(currentCartItems);
  };

  return { updateItem };
};

export default useUpdateItem;