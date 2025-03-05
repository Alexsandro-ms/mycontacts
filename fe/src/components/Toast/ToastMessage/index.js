import PropTypes from "prop-types";
import { Container } from "./styles";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

export default function ToastMessage({ message, onRemoveMessage }) {
    function handleRemoveToast() {
        onRemoveMessage(message.id);
    }
    return (
        <Container
            tabIndex={0}
            role="button"
            type={message.type}
            onClick={handleRemoveToast}
        >
            {message.type === "danger" && <XCircle size={20} weight="bold" />}
            {message.type === "success" && (
                <CheckCircle size={20} weight="bold" />
            )}
            <strong>{message.text}</strong>
        </Container>
    );
}

ToastMessage.propTypes = {
    message: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["default", "danger", "success"]),
    }).isRequired,
    onRemoveMessage: PropTypes.func.isRequired,
};
