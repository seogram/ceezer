import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  children?: React.ReactNode;
};

const RootStyle = styled(Box)(({ theme }) => ({
  maxHeight: "100vh",
  padding: "1rem",
  borderRadius: 0,
}));

const Wrapper = ({ children }: Props) => <RootStyle>{children}</RootStyle>;

export default Wrapper;