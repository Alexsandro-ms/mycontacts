import React from "react";
import { Container, Footer, Overlay } from "./styles";
import { Button } from "../Button";

export default function Modal() {
    return (
        <Overlay>
            <Container>
                <h1>Titulo do modal</h1>
                <p>descrição</p>
                <Footer>
                    <button type="button" className="cancel-button">
                        Cancelar
                    </button>
                    <Button>Deletar</Button>
                </Footer>
            </Container>
        </Overlay>
    );
}
