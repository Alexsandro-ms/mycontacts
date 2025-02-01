import React, { useState } from "react";
import PropTypes from "prop-types";

import isEmailValid from "../../utils/isEmailValid";
import formatPhone from "../../utils/formatPhone";
import useErrors from "../../hooks/useErrors";

import FormGroup from "../FormGroup";
import { Form, ButtonContainer } from "./styles";
import { Input } from "../Input";
import { Select } from "../Select";
import { Button } from "../Button";

export default function ContactForm({ buttonLabel }) {
    const [isName, setIsName] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isPhone, setIsPhone] = useState("");
    const [isCategory, setIsCategory] = useState("");
    const { getErrorMessageByFieldName, removeError, setError } = useErrors();

    function handleNameChange(e) {
        setIsName(e.target.value);
        if (!e.target.value) {
            setError({ field: "name", message: "Nome é obrigatório." });
        } else {
            removeError("name");
        }
    }
    function handleEmailChange(e) {
        setIsEmail(e.target.value);
        if (e.target.value && !isEmailValid(e.target.value)) {
            setError({ field: "email", message: "E-mail inválido." });
        } else {
            removeError("email");
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log({
            name: isName,
            email: isEmail,
            phone: isPhone.replace(/\D/g, ""),
            category: isCategory,
        });
    }
    function handlePhoneChange(e) {
        setIsPhone(formatPhone(e.target.value));
    }

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <FormGroup error={getErrorMessageByFieldName("name")}>
                <Input
                    error={getErrorMessageByFieldName("name")}
                    placeholder="Nome"
                    value={isName}
                    onChange={handleNameChange}
                />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName("email")}>
                <Input
                    error={getErrorMessageByFieldName("email")}
                    placeholder="E-mail"
                    value={isEmail}
                    onChange={handleEmailChange}
                    type="email"
                />
            </FormGroup>
            <FormGroup>
                <Input
                    maxLength="15"
                    placeholder="Telefone"
                    value={isPhone}
                    onChange={handlePhoneChange}
                />
            </FormGroup>
            <FormGroup>
                <Select
                    value={isCategory}
                    onChange={(e) => setIsCategory(e.target.value)}
                >
                    <option value={""}>Categoria</option>
                    <option value={"instagram"}>Instagram</option>
                    <option value={"discord"}>Discord</option>
                </Select>
            </FormGroup>
            <ButtonContainer>
                <Button type="submit">{buttonLabel}</Button>
            </ButtonContainer>
        </Form>
    );
}

ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
};
