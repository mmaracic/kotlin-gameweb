import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from 'react-dom';
import { theme } from "./App.css";
import { Header } from "./components/Header.component";

export function App(): JSX.Element {

    return (
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
        <div>
            <Header>

            </Header>
        </div>
        </ThemeProvider>
    </StyledEngineProvider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('react-mountpoint')
);