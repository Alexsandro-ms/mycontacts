import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import isEmailValid from "../../utils/isEmailValid";
import formatPhone from "../../utils/formatPhone";
import useErrors from "../../hooks/useErrors";
import CategoriesService from "../../services/CategoriesService";

import FormGroup from "../FormGroup";
import { Form, ButtonContainer } from "./styles";
import { Input } from "../Input";
import { Select } from "../Select";
import { Button } from "../Button";

export default function ContactForm({ buttonLabel, onSubmit }) {
    const [isName, setIsName] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isPhone, setIsPhone] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);
    const [isLoadingCategory, setIsLoadingCategory] = useState(true);

    const { getErrorMessageByFieldName, removeError, setError, errors } =
        useErrors();
    const isFormValid = isName && errors.length === 0;

    useEffect(() => {
        async function loadCategories() {
            try {
                const categoriesList = await CategoriesService.listCategories();

                setCategories(categoriesList);
            } catch {
            } finally {
                setIsLoadingCategory(false);
            }
        }

        loadCategories();
    }, []);

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
        onSubmit({
            name: isName,
            email: isEmail,
            phone: isPhone.replace(/\D/g, ""),
            category: categoryId,
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
                    placeholder="Nome *"
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
            <FormGroup isLoading={isLoadingCategory}>
                <Select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    disabled={isLoadingCategory}
                >
                    <option value={""}>Categoria</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </Select>
            </FormGroup>
            <ButtonContainer>
                <Button type="submit" disabled={!isFormValid}>
                    {buttonLabel}
                </Button>
            </ButtonContainer>
        </Form>
    );
}

ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
