import delay from "../../utils/delay";

class HttpClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl; // definindo a URL base da API
    }
    async get(path) {
        const response = await fetch(`${this.baseUrl}${path}`); // chamando a API
        await delay(500);
        return response.json(); // retornando o JSON da resposta
    }
}

export default HttpClient;
