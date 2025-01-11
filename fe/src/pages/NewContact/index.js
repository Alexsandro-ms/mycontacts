import React from "react";
import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";

export default function NewContactPage() {
    return (
        <>
            <PageHeader title={"Novo Contato"} />
            <ContactForm buttonLabel={"Cadastrar"} />
        </>
    );
}
