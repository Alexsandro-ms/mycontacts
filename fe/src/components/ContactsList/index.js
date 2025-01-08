import React from "react";
import { ArrowUp, NotePencil, TrashSimple } from "@phosphor-icons/react";
import { Card, Container, Header, ListContainer } from "./styles";

export default function ContactList() {
    return (
        <Container>
            <Header>
                <strong>3 contatos</strong>
                <a href="/">Novo Contato</a>
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
                        <a href="/">
                            <NotePencil size={24} color="#5061fc" />
                        </a>
                        <button type="button">
                            <TrashSimple size={24} color="red" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
