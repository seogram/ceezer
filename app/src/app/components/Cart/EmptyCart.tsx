import React from "react";
import { usePathname } from 'next/navigation'
import { Stack, Typography } from "@mui/material";
import CustomeLink from "../Link/CustomeLink";


const EmptyCart = () => {
  const pathname = usePathname()
  return (
    <Stack direction="column">
      <Typography>
        There is no item in shopping cart.
      </Typography>
      {pathname !=="/" && (
        <CustomeLink href="/">
          <Typography color="primary">
            Back
          </Typography>
        </CustomeLink>
      )}
    </Stack>
  );
}

export default EmptyCart;