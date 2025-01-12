import React from "react";
import PropTypes from "prop-types";

import { Container, Footer, Overlay } from "./styles";
import { Button } from "../Button";

export default function Modal({ danger }) {
    return (
        <Overlay>
            <Container danger={danger}>
                <h1>Titulo do modal</h1>
                <p>descrição</p>
                <Footer>
                    <button type="button" className="cancel-button">
                        Cancelar
                    </button>
                    <Button danger={danger}>Deletar</Button>
                </Footer>
            </Container>
        </Overlay>
    );
}

Modal.propTypes = {
    danger: PropTypes.bool,
};

Modal.defaultProps = {
    danger: false,
};
