import React from "react";
import { ArrowUp, NotePencil, TrashSimple } from "@phosphor-icons/react";
import {
    Card,
    Container,
    Header,
    ListContainer,
    InputSearchContainer,
} from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Container>
            <InputSearchContainer>
                <input type="text" placeholder="Pesquise pelo nome..." />
            </InputSearchContainer>
            <Header>
                <strong>3 contatos</strong>
                <Link to="/new">Novo Contato</Link>
            </Header>
            <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <ArrowUp size={16} />
                    </button>
                </header>
                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>John Doe</strong>
                            <small>Instagram</small>
                        </div>
                        <span>johndoe@example.com</span>
                        <span>(00) 9 9999-9999</span>
                    </div>

                    <div className="actions">
                        <Link to="/edit/123">
                            <NotePencil size={24} color="#5061fc" />
                        </Link>
                        <button type="button">
                            <TrashSimple size={24} color="red" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
