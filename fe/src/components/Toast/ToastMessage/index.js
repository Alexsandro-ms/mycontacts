import PropTypes from "prop-types";
import { Container } from "./styles";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

export default function ToastMessage({ text, type }) {
    return (
        <Container type={type}>
            {type === "danger" && <XCircle size={20} weight="bold" />}
            {type === "success" && <CheckCircle size={20} weight="bold" />}
            <strong>{text}</strong>
        </Container>
    );
}

ToastMessage.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["default", "danger", "success"]),
};

ToastMessage.defaultProps = {
    type: "default",
};
