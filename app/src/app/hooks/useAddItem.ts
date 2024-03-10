import useCart from "./useCart";
// import { IProduct } from "../external/product";
import { setLocalStorage } from "../utils";

const useAddItem = () => {
  const { cartItems, setCartItems } = useCart();

  const addItem = (product: any) => {
    const currentCartItems = [...cartItems];
    const existingCartItem = currentCartItems.find(
      (item) => item.product.id === product.id
    );

    // If the product is already in the cart, update the quantity
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      currentCartItems.push({
        product,
        quantity: 1,
      });
    }

    // Update the cart items
    setLocalStorage("cart" , currentCartItems)
    setCartItems(currentCartItems);

  };

  return { addItem };
};

export default useAddItem;