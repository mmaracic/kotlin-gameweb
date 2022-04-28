import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import { Props } from "../utils/Props.interface";
import React, { useState } from "react";
import { backgroundBlueStyle } from "./Header.css";
import { Page } from "../Page.component";

export enum PageType { "Article", "Editor", "Game" }

export function Header(props: Props): JSX.Element {

    let defaultPageType: PageType = PageType.Editor;
    const [currentPageType, setPageType] = useState<PageType>(defaultPageType);

    function handleBarClick(pageType: PageType) {
        setPageType(pageType);
    }

    return (
        <div>
            <div>
                <Box component="div" sx={{ flexGrow: 1 }}>
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
                            <Typography variant="h6" component="div" sx={{ mr: 2 }} onClick={(event: React.MouseEvent<HTMLElement>) => { handleBarClick(PageType.Editor) }}>
                                Articles
                            </Typography>
                            <Typography className="greenColor" variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={(event: React.MouseEvent<HTMLElement>) => { handleBarClick(PageType.Game) }}>
                                Games
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
            <div>
                <Page pageType={currentPageType} />
            </div>
        </div>
    );
}