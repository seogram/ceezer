import Image from "next/image";
import { Typography, Box, Stack, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import { formatCurrency } from "@/app/utils";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CartItem as CartItemType } from "@/app/type";
import { useCartActions } from "@/app/hooks";

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (item: CartItemType) => void;
};

const Wrapper = styled(Stack)(() => ({
    padding: "1rem 0",
}));

const InfoWrapper = styled(Box)(() => ({
    textAlign: "left",
    paddingBottom: "1.5rem"
}));



const CartItem = ({ item, removeFromCart }: Props) => {
    const { updateItem } = useCartActions();

    const cartUpdateHandler = (item: CartItemType, action: "DECREASE" | "INCREASE") => {
        
        if (item && action === "INCREASE") {
            const existingVolume = item.volume;
            const { offeredVolume } = item
            if (existingVolume === offeredVolume || existingVolume + 0.5 > offeredVolume) {
                return;
            }
        }

        updateItem(item, action)
    }

    return (
        <Wrapper direction="row" gap={2} >
            <Box sx={{ flex: 1 }}>
                <InfoWrapper>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography>Price per ton: {formatCurrency(item.pricePerTon)}</Typography>
                    <Typography>Volume(ton): {item.volume}</Typography>
                    <Typography>Total Price: {formatCurrency(item.pricePerTon * item.volume)}</Typography>
                </InfoWrapper>
                <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton
                        data-testid="decrease-volume"
                        size="large"
                        onClick={() => cartUpdateHandler(item, "DECREASE")}
                    >
                        -
                    </IconButton>
                    <Box>
                        {item.volume}
                    </Box>
                    <IconButton
                        data-testid="increase-volume"
                        size="large"
                        onClick={() => cartUpdateHandler(item, "INCREASE")}
                    >
                        +
                    </IconButton>
                    <Box
                        sx={{
                            display: {
                                xs: "flex",
                                sm: "none"
                            }
                        }}
                    >
                        <IconButton
                            data-testid="remove-item"
                            size="large"
                            edge="end"
                            onClick={() => removeFromCart(item)}
                            color="inherit"
                        >
                            <DeleteOutlineIcon />
                        </IconButton>
                    </Box>
                </Stack>
            </Box>
            <Box>
                <Image
                    src={item.image ?? ""}
                    alt={item.name}
                    width={150}
                    height={160}
                />
            </Box>
            <Box
                sx={{
                    display: {
                        xs: "none",
                        sm: "block"
                    }
                }}
            >
                <IconButton
                    size="large"
                    edge="end"
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
