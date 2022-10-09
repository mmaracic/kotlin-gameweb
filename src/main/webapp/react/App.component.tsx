import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { createRoot } from "react-dom/client";
import { theme } from "./App.css";
import { Header } from "./components/Header.component";

export function App(): JSX.Element {

    return (
        <React.StrictMode>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <div>
                        <Header>

                        </Header>
                    </div>
                </ThemeProvider>
            </StyledEngineProvider>
        </React.StrictMode>
    )
}

const rootElement = document.getElementById('react-mountpoint');
if (rootElement != null) {
    const root = createRoot(rootElement);
    root.render(<App />);
}
