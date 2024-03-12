
import { useRouter } from "next/navigation";
import { Typography, Button, Box, Stack, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useAddItem, useRemoveItem } from "@/app/hooks";
import { CustomeLink } from "..";
import { cartItem } from "@/app/type";
import CartItem from "./CartItem";

const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

const FullCart = ({ totalCost, cartItems }: { totalCost: number, cartItems: cartItem[] }) => {

    const router = useRouter();
    const { removeItem } = useRemoveItem();
    const { addItem } = useAddItem();

    return (
        <StyledBox data-testid="cart">
            {
                cartItems?.length < 1 ? (
                    <Stack direction="column">
                        <Typography>
                            There is no item in shopping cart.
                        </Typography>
                        <CustomeLink href="/">
                            <Typography color="primary">
                                Back
                            </Typography>
                        </CustomeLink>

                    </Stack>
                ) : (
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
                            <Typography>
                                Total Cost : {totalCost}
                            </Typography>
                        </Stack>


                        <Stack sx={{ mt: 2 }} alignItems={{
                            sx: "center",
                            sm: "flex-start"
                        }}>
                            <Button variant="contained" size="large" onClick={() => router.push("/")}>Pay Now</Button>
                        </Stack>
                    </>
                )
            }
        </StyledBox>
    );
}

export default FullCart;