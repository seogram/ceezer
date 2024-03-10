"use client";

import { useState } from "react";
import { Typography, Box, Stack, Paper, Badge, Popover, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useRemoveItem } from "../../hooks";
import { formatCurrency } from "../../utils";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CustomeLink } from "..";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

const MiniCart = ({ totalCost, cartItems }: any) => {
    const { removeItem } = useRemoveItem();
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
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Project name</TableCell>
                                            <TableCell align="right">Price per ton</TableCell>
                                            <TableCell align="right">Total Cost&nbsp;(g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cartItems?.map((item) => {
                                            const product = item.product;
                                            return (
                                                <TableRow
                                                    key={item.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" data-testid={`item-${product.id}`}>
                                                        {product.name}
                                                    </TableCell>
                                                    <TableCell align="right" data-testid={`item-unit-cost-${product.id}`}> {formatCurrency(product.pricePerTon)}</TableCell>
                                                    <TableCell align="right" data-testid={`item-total-cost-${product.id}`}>{formatCurrency(item.product.pricePerTon * item.product.volume)}</TableCell>
                                                    <TableCell align="right">
                                                        <button
                                                            className="action removeButton"
                                                            data-testid={`remove-button-${product.id}`}
                                                            aria-label="remove 1 item"
                                                            onClick={() => {
                                                                removeItem(product);
                                                            }}
                                                        >
                                                            Remove
                                                        </button>

                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                        <Stack direction="row" spacing={4} sx={{ px: 2, py: 4 }}>
                                            <Box id="totalLabel" >
                                                Total to pay:
                                            </Box>
                                            <Box id="total" data-testid={`total-amount`}>
                                                <b>{formatCurrency(totalCost)}</b>
                                            </Box>
                                        </Stack>
                                    </TableBody>
                                </Table>
                            </TableContainer>
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