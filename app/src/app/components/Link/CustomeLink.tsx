import React from "react";
import Link from 'next/link';
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";


const CustomeLink = ({children , href}:{children: React.ReactNode, href: string}) => {
  const theme = useTheme();
  return (
    <Link href={href}
      style={{ textDecoration: "none" }}
    >
      <Typography color="primary">
        {children}
      </Typography>
    </Link>
  );
}

export default CustomeLink;