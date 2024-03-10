import * as React from 'react';
import { useProjectCardContext } from './ProjectCardContext';
import { Button, Stack, InputBase } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import { useAddItem } from '../../hooks';

type Volume = {
  volume: number | string;
}

const InputStyle = styled(InputBase)(({ theme }) => ({
  paddingLeft: "10px",
  border: "1px solid",
  width: "10%",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));


function ProductAction() {
  const { project } = useProjectCardContext();
  const { addItem } = useAddItem();
  const {
    control,
    setValue,
    handleSubmit,
    watch,
  } = useForm<Volume>({
    mode: "onTouched",
    defaultValues: {
      volume: "",
    },
  });
  
  const volume = Number(watch("volume"));

  const addToCardHandler = () => {
    setValue("volume", "")
    addItem({
      id: project.id,
      name : project.name,
      volume,
      pricePerTon : project.price_per_ton
    })
  }

  return (
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
            autoFocus
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
        data-testid="addToCard"
        disabled={!volume || volume === 0}
        variant="contained"
        onClick={
          handleSubmit(addToCardHandler)}
        name="search"
      >
        Add to Card
      </Button>
    </Stack>
  )
}

export default ProductAction;
