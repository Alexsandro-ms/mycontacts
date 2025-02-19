import { Container } from "./styles";
import ToastMessage from "../ToastMessage";
import { useEffect, useState } from "react";

export default function ToastContainer() {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        function handleAddToast(event) {
            const { type, text } = event.detail;

            setMessage((prevState) => [
                ...prevState,
                { id: Math.random(), type, text },
            ]);
        }
        document.addEventListener("addtoast", handleAddToast);

        return () => {
            document.removeEventListener("addtoast", handleAddToast);
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
