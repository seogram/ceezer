import useCart from "./useCart";
import { setLocalStorage } from "../utils";
import { CartItem as CartItemType } from "../type";

const useCartAction = () => {
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

    const removeItem = (product: CartItemType) => {
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

    const removeAllItems = () => {
       
        setLocalStorage("cart", [])
        setCartItems([]);
    };

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
    return { addItem, removeItem, updateItem , removeAllItems };
}

export default useCartAction;