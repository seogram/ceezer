"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/app/hooks";
import MiniCart from "./MiniCart";
import FullCart from "./FullCart";


const Cart = ({ full = false }: { full?: boolean }) => {
    const [totalCost, setTotalCost] = useState(0);
    const { cartItems } = useCart();

    useEffect(() => {
        const totalCost = cartItems?.reduce((result, item) => {
            return item.pricePerTon * item.volume + result;
        }, 0);

        setTotalCost(totalCost);
    }, [cartItems]);


    const payload = {
        totalCost,
        cartItems
    }

    if (full) return <FullCart {...payload} />
    return <MiniCart {...payload} />
}

export default Cart;