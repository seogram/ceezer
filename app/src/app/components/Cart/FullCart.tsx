"use client";

import { useRouter } from "next/navigation";
import { Typography, Button, Box, Stack, Paper, IconButton } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { styled } from '@mui/material/styles';
import { useAddItem, useRemoveItem } from "../../hooks";
import { formatCurrency } from "../../utils";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CustomeLink } from "..";

const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

const FullCart = ({ totalCost, cartItems }: any) => {
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
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Project name</TableCell>
                                        <TableCell align="right">Price/ton</TableCell>
                                        <TableCell align="right">Volume(ton)</TableCell>
                                        <TableCell align="right">Total Cost</TableCell>
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
                                                <TableCell align="right" data-testid={`item-total-cost-${product.id}`}>{product?.volume}</TableCell>
                                                <TableCell align="right" data-testid={`item-total-cost-${product.id}`}>{formatCurrency(item.product.pricePerTon * item.product.volume)}</TableCell>
                                                <TableCell align="right">
                                                    <IconButton
                                                        size="large"
                                                        edge="end"
                                                        data-testid={`remove-button-${product.id}`}
                                                        aria-label="remove item from cart"
                                                        aria-controls="remove"
                                                        aria-haspopup="true"
                                                        onClick={() => {
                                                            removeItem(product);
                                                        }}
                                                    >
                                                        <DeleteOutlineIcon />
                                                    </IconButton>

                                                    <Button
                                                        data-testid={`remove-button-${product.id}`}
                                                        aria-label="remove 1 item"
                                                        onClick={() => {
                                                            removeItem(product);
                                                        }}
                                                    >
                                                        -
                                                    </Button>
                                                    <span
                                                        className="action quantity"
                                                        data-testid={`item-quantity-${product.id}`}
                                                    >
                                                        {item.quantity}
                                                    </span>
                                                    <Button
                                                        className="action addButton"
                                                        data-testid={`add-button-${product.id}`}
                                                        aria-label="add 1 item"
                                                        onClick={() => {
                                                            addItem(product);
                                                        }}
                                                    >
                                                        +
                                                    </Button>
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
                        <Box sx={{ mt: 2 }}>
                            <Button variant="contained" size="large" onClick={() => router.push("/")}>Pay Now</Button>
                        </Box>
                    </>
                )
            }
        </StyledBox>
    );
}

export default FullCart;