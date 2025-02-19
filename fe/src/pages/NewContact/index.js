import React from "react";
import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import ContactsService from "../../services/ContactsService";
import toast from "../../utils/toast";

export default function NewContactPage() {
    async function handleSubmit(formData) {
        try {
            const contact = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.categoryId,
            };
            const response = await ContactsService.createContact(contact).catch(
                (e) => console.log("Erro:", e)
            );

            toast({
                type: "success",
                text: "Contato cadastrado com sucesso!",
            });
        } catch {
            toast({
                type: "danger",
                text: "Erro ao cadastrar contato!",
            });
        }
    }

    return (
        <>
            <PageHeader title={"Novo Contato"} />
            <ContactForm onSubmit={handleSubmit} buttonLabel={"Cadastrar"} />
        </>
    );
}
