"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAddItem, useRemoveItem, useCart } from "../../hooks";
import MiniCart from "./MiniCart";
import FullCart from "./fullCart";


const Cart = ({ full = false }: { full?: boolean }) => {
    const [totalCost, setTotalCost] = useState(0);
    const { cartItems } = useCart();

    useEffect(() => {
        const totalCost = cartItems.reduce((result, item) => {
            return item.product.pricePerTon * item.quantity + result;
        }, 0);

        setTotalCost(totalCost);
    }, [cartItems]);


  const payload = {
    totalCost,
    cartItems
  }
 
console.log("payload", payload)
 if (full) return <FullCart {...payload} />
 return <MiniCart {...payload}/>

}

export default Cart;