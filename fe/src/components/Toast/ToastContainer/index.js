import { Container } from "./styles";
import ToastMessage from "../ToastMessage";
import { useState } from "react";

export default function ToastContainer() {
    const [message] = useState([
        { id: Math.random(), type: "default", text: "Default toast" },
        { id: Math.random(), type: "danger", text: "Danger toast" },
        { id: Math.random(), type: "success", text: "Success toast" },
    ]);
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
