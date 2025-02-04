import delay from "../../utils/delay";

class HttpClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl; // definindo a URL base da API
    }
    async get(path) {
        const response = await fetch(`${this.baseUrl}${path}`); // chamando a API
        await delay(500);

        if (response.ok) {
            return response.json(); // retornando o JSON da resposta
        }

        throw new Error(`${response.status} - ${response.statusText}`); // lançando um erro caso a resposta não seja OK
    }
}

export default HttpClient;
