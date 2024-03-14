import React from "react";
import Link from 'next/link';
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


const StyledLink = styled(Link)(() => ({
  textDecoration: "none"
}));

type Props = {
  children: React.ReactNode, href: string};

const CustomeLink = ({ children, href }: Props) => {
  return (
    <StyledLink href={href}
    >
      <Typography color="primary">
        {children}
      </Typography>
    </StyledLink>
  );
}

export default CustomeLink;