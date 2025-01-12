import React from "react";
import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";

export default function EditContactPage() {
    return (
        <>
            <PageHeader title={"Editar John Doe"} />
            <ContactForm buttonLabel={"Salvar Alterações"} />
        </>
    );
}
