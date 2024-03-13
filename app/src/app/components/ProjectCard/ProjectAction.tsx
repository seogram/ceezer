import * as React from 'react';
import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Button, Stack, InputBase, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import { useCartActions, useCart } from '@/app/hooks';

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

  const addToCardHandler = () => {
    const existingCartItem = cartItems.find(
      (item) => item.id === project.id
    );
    if (existingCartItem) {
      const existingVolume = existingCartItem.volume;
      const possibleVolume = project.offered_volume_in_tons;
      if (existingVolume === possibleVolume || existingVolume + volume > possibleVolume) {
        setError("volume", { type: "value" });
        return;
      }
    }
    setValue("volume", "")
    addItem({
      id: project.id,
      name: project.name,
      volume,
      pricePerTon: project.price_per_ton,
      image: project.image
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
                max: project.offered_volume_in_tons
              }}
              placeholder="Volume"
              error={Boolean(error)}
            />
          )}
        />

        <Button
          disabled={!volume || volume === 0}
          variant="contained"
          onClick={
            handleSubmit(addToCardHandler)}
          name="search"
        >
          Add to Card
        </Button>
      </Stack>
      <Stack>
        {errors?.volume?.type === "value" ? (
          <Typography color="red">
            Volume amount is not possible to order
          </Typography>
        ) : errors.volume?.message}
      </Stack>
    </>

  )
}

export default ProjectAction;
