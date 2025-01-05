"use client";
import GlobalStyles from "../styles/global";

import { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/themes/default";
import { Container } from "./styles";
import Header from "@/components/Header";

export default function Home() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Container>
                <Header />
            </Container>
        </ThemeProvider>
    );
}
