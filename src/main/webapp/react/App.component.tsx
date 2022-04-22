import React from "react";
import ReactDOM from 'react-dom';
import { Header } from "./components/Header.component";

export function App(): JSX.Element {

    return (
    <div>
        <Header>

        </Header>
    </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('react-mountpoint')
);