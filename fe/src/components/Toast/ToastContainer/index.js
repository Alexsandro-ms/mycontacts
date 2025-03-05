import { Container } from "./styles";
import ToastMessage from "../ToastMessage";
import { useEffect, useState } from "react";
import { toastEventManager } from "../../../utils/toast";

export default function ToastContainer() {
    const [message, setMessage] = useState([]);

    console.log("Mensagem:", message);

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

    return (
        <Container>
            {message.map((message) => (
                <ToastMessage
                    key={message.id}
                    type={message.type}
                    text={message.text}
                />
            ))}
        </Container>
    );
}
