import React from "react";
import Routes from "../../Routes";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "../../styles/global";

import { ThemeProvider } from "styled-components";

import defaultTheme from "../../themes/default";
import { Container } from "./styles";
import Header from "../Header";

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles />
                <Container>
                    <Header />
                    <Routes />
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
}
