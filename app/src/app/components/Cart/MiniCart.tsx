
import { useState } from "react";
import { Typography, Box, Paper, Badge, Popover, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useAddItem, useRemoveItem } from "@/app/hooks";
import { CustomeLink } from "..";
import { cartItem } from "@/app/type";
import CartItem from "./CartItem";
import { formatCurrency } from "@/app/utils";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

type Props = {
    totalCost: number,
    cartItems: cartItem[]
};

const MiniCart = ({ totalCost, cartItems }: Props) => {
    const { removeItem } = useRemoveItem();
    const { addItem } = useAddItem();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isCartShown = Boolean(anchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderCartItems = (
        <Popover
            open={isCartShown}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
        >
            <StyledPaper data-testid="cart">
                {
                    cartItems?.length < 1 ? (
                        <Typography>
                            There is no item in shopping cart.
                        </Typography>
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
                            <Typography>
                                Total Cost : {formatCurrency(totalCost)}
                            </Typography>
                            <Box>
                                <CustomeLink href="/checkout">
                                    <Typography color="primary">
                                        Proceed to Checkout
                                    </Typography>
                                </CustomeLink>
                            </Box>
                        </>
                    )
                }
            </StyledPaper>
        </Popover>
    );

    return (
        <>
            <Badge badgeContent={cartItems?.length} color="secondary">
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls="Cart"
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <ShoppingBagOutlinedIcon />
                </IconButton>
            </Badge>
            {renderCartItems}
        </>
    );
}

export default MiniCart;