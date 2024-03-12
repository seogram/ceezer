import Image from "next/image";
import { Typography, Button, Box, Stack, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import { formatCurrency } from "@/app/utils";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { cartItem } from "@/app/type";
import useUpdateItem from "@/app/hooks/useUpdateItem";

type Props = {
    item: cartItem;
    addToCart: (clickedItem: cartItem) => void;
    removeFromCart: (item: cartItem) => void;
};

const Wrapper = styled(Stack)(() => ({
    padding: "1rem",
    flex: 1
}));

const InfoWrapper = styled(Box)(() => ({
    textAlign: "justify",
    paddingBottom: "20px"
}));

const ButtonWrapper = styled(Stack)(() => ({
    display: "flex", pt: 2
}));

const CartItem = ({ item, addToCart, removeFromCart }: Props) => {
    const { updateItem } = useUpdateItem();

    return (
        <Wrapper direction="row" gap={2} justifyContent="space-between" >
            <Box >
                <InfoWrapper>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography>Price per ton: {formatCurrency(item.pricePerTon)}</Typography>
                    <Typography>Volume(ton): {item.volume}</Typography>
                    <Typography>Total Price: {formatCurrency(item.pricePerTon * item.volume)}</Typography>
                </InfoWrapper>
                <ButtonWrapper direction="row" spacing={2} >
                    <Button
                        size="small"
                        disableElevation
                        variant="contained"
                        onClick={() => updateItem(item, "DECREASE")}
                    >
                        -
                    </Button>
                    <Box>
                        {item.volume}
                    </Box>
                    <Button
                        size="small"
                        disableElevation
                        variant="contained"
                        onClick={() => updateItem(item, "INCREASE")}
                    >
                        +
                    </Button>
                </ButtonWrapper>
            </Box>
            <Image
                src={item.image ?? ""}
                alt={item.name}
                width={150}
                height={160}
            />
            <Box>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls="Cart"
                    aria-haspopup="true"
                    onClick={() => removeFromCart(item)}
                    color="inherit"
                >
                    <DeleteOutlineIcon />
                </IconButton>
            </Box>
        </Wrapper>
    );
};

export default CartItem;
