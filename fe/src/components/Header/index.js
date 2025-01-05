import { Container, ImageHeader, InputSearchContainer } from "./style";

import LogoSvg from "../../assets/images/logo.svg";

export default function Header() {
    return (
        <Container>
            <ImageHeader src={LogoSvg} alt="MyContacts" />
            <InputSearchContainer>
                <input type="text" placeholder="Pesquise pelo nome..." />
            </InputSearchContainer>
        </Container>
    );
}
