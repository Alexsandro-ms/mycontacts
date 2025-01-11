import React from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function PageHeader({ title }) {
    return (
        <Container>
            <Link to="/">
                <ArrowLeft size={24} /> <span>Voltar</span>
            </Link>
            <h1>{title}</h1>
        </Container>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
};
