import React, { useEffect, useState, useMemo } from "react";
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
    const [searchTerm, setSearchTerm] = useState("");

    const filteredContacts = useMemo(
        () =>
            contacts.filter((contact) =>
                contact.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        [contacts, searchTerm]
    );

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

    function handleChangeSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <Container>
            <InputSearchContainer>
                <input
                    value={searchTerm}
                    type="text"
                    placeholder="Pesquise pelo nome..."
                    onChange={handleChangeSearchTerm}
                />
            </InputSearchContainer>
            <Header>
                <strong>
                    {filteredContacts.length}
                    {filteredContacts.length === 1 ? " contato" : " contatos"}
                </strong>
                <Link to="/new">Novo Contato</Link>
            </Header>
            {filteredContacts.length > 0 && (
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
            )}

            {filteredContacts.map((contact) => (
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
