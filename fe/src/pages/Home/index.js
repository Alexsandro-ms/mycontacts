import React, { useEffect, useState } from "react";
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
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/contacts")
            .then(async (response) => {
                const json = await response.json();
                setContacts(json);
            })
            .catch((error) => {
                console.error("Erro", error);
            });
    }, []);

    return (
        <Container>
            <InputSearchContainer>
                <input type="text" placeholder="Pesquise pelo nome..." />
            </InputSearchContainer>
            <Header>
                <strong>
                    {contacts.length}
                    {contacts.length === 1 ? " contato" : " contatos"}
                </strong>
                <Link to="/new">Novo Contato</Link>
            </Header>
            <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <ArrowUp size={16} />
                    </button>
                </header>
                {contacts.map((contact) => (
                    <Card key={contact.id}>
                        <div className="info">
                            <div className="contact-name">
                                <strong>{contact.name}</strong>
                                {contact.category_name && (
                                    <small>{contact.category_name}</small>
                                )}
                            </div>
                            <span>{contact.email}</span>
                            <span>{contact.phone}</span>
                        </div>

                        <div className="actions">
                            <Link to={`/edit/${contact.id}`}>
                                <NotePencil size={24} color="#5061fc" />
                            </Link>
                            <button type="button">
                                <TrashSimple size={24} color="red" />
                            </button>
                        </div>
                    </Card>
                ))}
            </ListContainer>
        </Container>
    );
}
