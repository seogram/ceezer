import React from "react";
import Link from 'next/link';
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


const StyledLink = styled(Link)(() => ({
  textDecoration: "none"
}));

const CustomeLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
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