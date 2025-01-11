import React from "react";
import { Container, ImageHeader } from "./style";

import LogoSvg from "../../assets/images/logo.svg";

export default function Header() {
    return (
        <Container>
            <ImageHeader src={LogoSvg} alt="MyContacts" />
        </Container>
    );
}
