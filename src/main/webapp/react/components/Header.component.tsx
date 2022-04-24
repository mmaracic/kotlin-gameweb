import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import { Props } from "../utils/Props.interface";
import React from "react";
import { backgroundLightGrayStyle, greenStyle } from "./Header.css";

export function Header(props: Props): JSX.Element {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ display:"flex", flexGrow: 1 }} css={[backgroundLightGrayStyle, greenStyle]}>
                    <Typography variant="h6" component="div" sx={{ mr: 2 }} >
                        Articles
                    </Typography>
                    <Typography className="greenColor" variant="h6" component="div" sx={{flexGrow: 1 }}>
                        Games
                    </Typography>
                </Box>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            </Box>    
    );
}