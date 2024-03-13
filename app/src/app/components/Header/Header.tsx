"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Cart } from "..";
import styled from "@emotion/styled";

const StyledBox = styled(Box)(() => ({
    display: "flex", pt: 3
}));

const Header = ({ noCart = false }: { noCart?: boolean }) => (
    <Box sx={{ flex: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    
                >
                    CEEZER
                </Typography>

                <Box sx={{ flexGrow: 1 }} />
                {!noCart && (
                    <StyledBox >
                        <Cart />
                    </StyledBox>

                )}
            </Toolbar>
        </AppBar>
    </Box>
);


export default Header;

