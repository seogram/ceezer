import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Button, Stack, InputBase } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import { useCartActions, useCart } from '@/app/hooks';
import CustomError from '../Error/Error';

type Volume = {
  volume: string;
}

const InputStyle = styled(InputBase)(({ theme }) => ({
  paddingLeft: "1rem",
  border: "1px solid",
  width: "10%",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));


function ProjectAction() {
  const { cartItems } = useCart();
  const { project } = useProjectCardContext();
  const { addItem } = useCartActions();
  const {
    control,
    setValue,
    handleSubmit,
    watch,
    setError,
    formState: { errors }
  } = useForm<Volume>({
    mode: "onTouched",
    defaultValues: {
      volume: "",
    },
  });

  const volume = Number(watch("volume"));
  const { id, name, offered_volume_in_tons, price_per_ton, image } = project;

  const addToCardHandler = () => {
    const existingCartItem = cartItems.find(
      (item) => item.id === id
    );
    if (existingCartItem) {
      const existingVolume = existingCartItem.volume;
      const possibleVolume = offered_volume_in_tons;
      if (existingVolume === possibleVolume || existingVolume + volume > possibleVolume) {
        setError("volume", { type: "value" });
        return;
      }
    }
    setValue("volume", "")
    addItem({
      id,
      name,
      volume,
      offeredVolume: offered_volume_in_tons,
      pricePerTon: price_per_ton,
      image
    })
  }
  return (
    <>
      <Stack direction="row" gap={2} sx={{ pt: 2 }} justifyContent={{
        xs: "center",
        sm: "flex-start"
      }}>
        <Controller
          name="volume"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputStyle
              {...field}
              type="number"
              inputProps={{
                min: 0,
                max: offered_volume_in_tons
              }}
              placeholder="Volume"
              error={Boolean(error)}
            />
          )}
        />

        <Button
          disabled={!volume || volume === 0 || volume > offered_volume_in_tons}
          variant="contained"
          onClick={
            handleSubmit(addToCardHandler)}
          name="search"
        >
          Add to Card
        </Button>
      </Stack>

      <Stack>
        {errors?.volume?.type === "value" && (
          <CustomError message="Volume amount is not possible to order" />
        )}
      </Stack>
    </>
  )
}

export default ProjectAction;
