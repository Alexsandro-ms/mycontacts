import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import { useHistory, useParams } from "react-router-dom";
import ContactsService from "../../services/ContactsService";
import Loader from "../../components/Loader";
import toast from "../../utils/toast";

export default function EditContactPage() {
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        async function loadContact() {
            try {
                const contactData = await ContactsService.getContactById(id);
                console.log({ contactData });
                setIsLoading(false);
            } catch {
                history.push("/");
                toast({
                    type: "danger",
                    text: "Contato não encontrado",
                });
            }
        }

        loadContact();
    }, [id, history]);

    function handleSubmit(formdata) {}
    return (
        <>
            <Loader isLoading={isLoading} />
            <PageHeader title={"Editar John Doe"} />
            <ContactForm
                buttonLabel={"Salvar Alterações"}
                onSubmit={handleSubmit}
            />
        </>
    );
}
