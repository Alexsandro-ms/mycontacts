/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import {
    ArrowDown,
    ArrowUp,
    DropboxLogo,
    Empty,
    NotePencil,
    TrashSimple,
} from "@phosphor-icons/react";
import {
    Card,
    Container,
    Header,
    ListHeader,
    InputSearchContainer,
    ErrorContainer,
    EmptyListContainer,
    SearchNotFoundContainer,
} from "./styles";
import ContactsService from "../../services/ContactsService";
import { Button } from "../../components/Button";

export default function Home() {
    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const filteredContacts = useMemo(
        () =>
            contacts.filter((contact) =>
                contact.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        [contacts, searchTerm]
    );

    const loadContacts = useCallback(async () => {
        try {
            setIsLoading(true);
            const contactsList = await ContactsService.listContact(orderBy);
            setHasError(false);
            setContacts(contactsList);
        } catch (error) {
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    }, [orderBy]);

    useEffect(() => {
        loadContacts();
    }, [orderBy, loadContacts]);

    function handleToggleOrderBy() {
        setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
    }

    function handleChangeSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    function handleTryAgain() {
        loadContacts();
    }

    return (
        <Container>
            <Loader isLoading={isLoading} />
            {contacts.length > 0 && (
                <InputSearchContainer>
                    <input
                        value={searchTerm}
                        type="text"
                        placeholder="Pesquise pelo nome..."
                        onChange={handleChangeSearchTerm}
                    />
                </InputSearchContainer>
            )}

            <Header
                $justifyContent={
                    hasError
                        ? "flex-end"
                        : contacts.length > 0
                        ? "space-between"
                        : "center"
                }
            >
                {!!(!hasError && contacts.length > 0) && (
                    <strong>
                        {filteredContacts.length}
                        {filteredContacts.length === 1
                            ? " contato"
                            : " contatos"}
                    </strong>
                )}
                <Link to="/new">Novo Contato</Link>
            </Header>

            {hasError && (
                <ErrorContainer>
                    <h1>
                        Ocorreu um erro, ao tentar carregar seus contatos :(
                    </h1>
                    <Button type="button" onClick={handleTryAgain}>
                        Tentar Novamente
                    </Button>
                </ErrorContainer>
            )}

            {!hasError && (
                <>
                    {contacts.length < 1 && !isLoading && (
                        <EmptyListContainer>
                            <DropboxLogo size={128} color="#5061fc" />
                            <p>
                                Você ainda não tem nenhum contato cadastrado!
                                Clique no botão <strong>"Novo Contato"</strong>à
                                cima para cadastrar o seu primeiro!
                            </p>
                        </EmptyListContainer>
                    )}
                    {contacts.length > 0 && filteredContacts.length < 1 && (
                        <SearchNotFoundContainer>
                            <div>
                                <Empty
                                    size={72}
                                    weight="fill"
                                    color="#5061fc"
                                />
                                <p>Nenhum resultado foi encontrado</p>
                            </div>
                            <span>
                                Não conseguimos encontrar o resultado para{" "}
                                <strong>"{searchTerm}"</strong>
                            </span>
                        </SearchNotFoundContainer>
                    )}
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
                </>
            )}
        </Container>
    );
}
