"use client";

import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/app/hooks";
import MiniCart from "./MiniCart";
import FullCart from "./FullCart";

const Cart = ({ full = false }) => {
    const [totalCost, setTotalCost] = useState(0);
    const { cartItems } = useCart();

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.pricePerTon * item.volume, 0);
        setTotalCost(total);
    }, [cartItems]);

    const payload = useMemo(() => ({
        totalCost,
        cartItems
    }), [totalCost, cartItems]);

    if (full) {
        return <FullCart {...payload} />;
    }
    return <MiniCart {...payload} />;
};

export default Cart;