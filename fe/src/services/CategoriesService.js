import HttpClient from "./utils/HttpClient";

class CategoriesService {
    constructor() {
        this.httpClient = new HttpClient("http://localhost:3001"); // definindo uma instância do HttpClient
    }
    listCategories() {
        return this.httpClient.get("/categories"); // chamando o método get do HttpClient
    }
}

export default new CategoriesService();
