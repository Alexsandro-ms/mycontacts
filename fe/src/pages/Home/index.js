import React, { useEffect, useState } from "react";
import {
    ArrowDown,
    ArrowUp,
    NotePencil,
    TrashSimple,
} from "@phosphor-icons/react";
import {
    Card,
    Container,
    Header,
    ListHeader,
    InputSearchContainer,
} from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState("asc");
    useEffect(() => {
        fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
            .then(async (response) => {
                const json = await response.json();
                setContacts(json);
            })
            .catch((error) => {
                console.error("Erro", error);
            });
    }, [orderBy]);

    function handleToggleOrderBy() {
        setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
    }

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
            <ListHeader>
                <button type="button" onClick={handleToggleOrderBy}>
                    <span>Nome</span>
                    {orderBy === "asc" ? (
                        <ArrowUp size={16} color="#5061fc" />
                    ) : (
                        <ArrowDown size={16} color="#5061fc" />
                    )}
                </button>
            </ListHeader>

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
        </Container>
    );
}
