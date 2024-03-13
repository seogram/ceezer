
import { memo, useCallback, useState } from "react";
import { Typography, Box, Paper, Badge, Popover, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useCartActions } from "@/app/hooks";
import { CustomeLink } from "..";
import { CartItem as CartItemType } from "@/app/type";
import CartItem from "./CartItem";
import { formatCurrency } from "@/app/utils";
import EmptyCart from "./EmptyCart";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    ...theme.typography.body2,
}));

type Props = {
    totalCost: number,
    cartItems: CartItemType[]
};

const MiniCart = ({ totalCost, cartItems }:Props) => {
    const { removeItem, addItem } = useCartActions();

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const isCartShown = Boolean(anchorEl);

    const handleCartOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleCartClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <Box sx={{ pt: 2 }}>
            <Badge badgeContent={cartItems.length} color="secondary">
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="show cart items"
                    aria-controls="mini-cart"
                    aria-haspopup="true"
                    onClick={handleCartOpen}
                    color="inherit"
                    data-testid="mini-cart-icon"
                >
                    <ShoppingBagOutlinedIcon />
                </IconButton>
            </Badge>
            <Popover
                open={isCartShown}
                anchorEl={anchorEl}
                onClose={handleCartClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <StyledPaper>
                    {cartItems.length < 1 ? (
                        <EmptyCart />
                    ) : (
                        <>
                            {cartItems.map(item => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    addToCart={addItem}
                                    removeFromCart={removeItem}
                                />
                            ))}
                            <Typography data-testid="total-cost">Total Cost: {formatCurrency(totalCost)}</Typography>
                            <Box m={2}>
                                <CustomeLink href="/checkout">
                                    <Typography color="primary" variant="body1">Proceed to Checkout</Typography>
                                </CustomeLink>
                            </Box>
                        </>
                    )}
                </StyledPaper>
            </Popover>
        </Box>
    );
}

export default memo(MiniCart);