import { useEffect, useState, useCallback } from "react";
import { Container } from "./styles";
import ToastMessage from "../ToastMessage";
import { toastEventManager } from "../../../utils/toast";

export default function ToastContainer() {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        function handleAddToast({ type, text }) {
            console.log("Tipo:", type);
            console.log("Texto:", text);
            setMessage((prevState) => [
                ...prevState,
                { id: Math.random(), type, text },
            ]);
        }
        toastEventManager.on("addtoast", handleAddToast);

        return () => {
            toastEventManager.removeListener("addtoast", handleAddToast);
        };
    }, []);

    const handleRemoveMessage = useCallback((id) => {
        setMessage((prevState) =>
            prevState.filter((message) => message.id !== id)
        );
    }, []);

    return (
        <Container>
            {message.map((message) => (
                <ToastMessage
                    key={message.id}
                    message={message}
                    onRemoveMessage={handleRemoveMessage}
                />
            ))}
        </Container>
    );
}
