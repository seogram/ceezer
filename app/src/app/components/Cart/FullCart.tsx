
import { useRouter } from "next/navigation";
import { Typography, Button, Box, Stack, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useCartActions } from "@/app/hooks";
import { CartItem as CartItemType } from "@/app/type";
import CartItem from "./CartItem";
import { formatCurrency } from "@/app/utils";
import EmptyCart from "./EmptyCart";
import { memo } from "react";

const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

const FullCart = ({ totalCost, cartItems }: { totalCost: number, cartItems: CartItemType[] }) => {

    const router = useRouter();
    const { addItem, removeItem } = useCartActions();

    const handlePayNow = () => router.push("/");

    const hasCartItems = cartItems.length > 0;

    return (
        <StyledBox data-testid="cart">
            {
                hasCartItems ? (
                    <>
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                addToCart={addItem}
                                removeFromCart={removeItem}
                            />
                        ))}
                        <Divider />
                        <Stack sx={{ mt: 2 }} alignItems={{
                            sx: "center",
                            sm: "flex-start"
                        }}>
                            <Typography data-testid="total-cost">
                                Total Cost : {formatCurrency(totalCost)}
                            </Typography>
                        </Stack>


                        <Stack sx={{ mt: 2 }} alignItems={{
                            sx: "center",
                            sm: "flex-start"
                        }}>
                            <Button variant="contained" size="large" onClick={handlePayNow}>Pay Now</Button>
                        </Stack>
                    </>
                ) :
                    <EmptyCart />
            }
        </StyledBox>
    );
}

export default memo(FullCart);