import GlobalStyles from "./styles/global";

import { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default";
import { Container } from "./styles";
import Header from "./components/Header";
import ContactList from "./components/ContactsList";

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Container>
                <Header />
                <ContactList />
            </Container>
        </ThemeProvider>
    );
}
