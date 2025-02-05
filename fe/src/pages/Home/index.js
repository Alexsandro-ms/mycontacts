import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
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
import ContactsService from "../../services/ContactsService";
import APIError from "../../Errors/APIError";

export default function Home() {
    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const filteredContacts = useMemo(
        () =>
            contacts.filter((contact) =>
                contact.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        [contacts, searchTerm]
    );

    useEffect(() => {
        async function loadContacts() {
            try {
                setIsLoading(true);
                const contactsList = await ContactsService.listContact(orderBy);
                setContacts(contactsList);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        loadContacts();
    }, [orderBy]);

    function handleToggleOrderBy() {
        setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
    }

    function handleChangeSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <Container>
            <Loader isLoading={isLoading} />
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
