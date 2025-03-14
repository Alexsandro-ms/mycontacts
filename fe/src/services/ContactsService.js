import HttpClient from "./utils/HttpClient";

class ContactsService {
    constructor() {
        this.httpClient = new HttpClient("http://localhost:3001"); // definindo uma instância do HttpClient
    }
    listContact(orderBy = "asc") {
        return this.httpClient.get(`/contacts?orderBy=${orderBy}`); // chamando o método get do HttpClient
    }
    getContactById(id) {
        return this.httpClient.get(`/contacts/${id}`); // chamando o método get do HttpClient
    }
    createContact(contact) {
        return this.httpClient.post("/contacts", {
            body: contact,
        }); // chamando o método post do HttpClient
    }
}

export default new ContactsService();
