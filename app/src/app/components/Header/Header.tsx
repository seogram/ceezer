"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Cart } from "..";

const Header = ({noCart = false} :{noCart?: boolean}) => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    CEEZER
                </Typography>

                <Box sx={{ flexGrow: 1 }} />
                {!noCart && (
                <Box sx={{ display: { xs: "flex" } , pt:3 }}>
                    <Cart />
                </Box>

                )}
            </Toolbar>
        </AppBar>
    </Box>
);


export default Header;

