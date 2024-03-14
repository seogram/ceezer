import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Props = {
  message?: String
}
const CustomError = ({ message }: Props) => {
  const theme = useTheme();
  const errorMessage = message ?? "Something went wrong...";

  return (
    <Typography sx={{ color: theme.palette.error.main }}>
      {errorMessage}
    </Typography>
  );
}

export default CustomError;