import HttpClient from "./utils/HttpClient";
const url = "http://localhost:3001/contacts";

class ContactsService {
    constructor() {
        this.httpClient = new HttpClient("http://localhost:3001"); // definindo uma instância do HttpClient
    }
    async listContact(orderBy = "asc") {
        return this.httpClient.get(`/contacts?orderBy=${orderBy}`); // chamando o método get do HttpClient
    }
}

export default new ContactsService();
