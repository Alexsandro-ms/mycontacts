import delay from "../../utils/delay";
import APIError from "../../errors/APIError";

class HttpClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl; // definindo a URL base da API
    }
    async get(path) {
        const response = await fetch(`${this.baseUrl}${path}`); // chamando a API
        await delay(500);

        let body;
        const contentType = response.headers.get("content-type");

        if (contentType.includes("application/json")) {
            body = await response.json();
        }

        if (response.ok) {
            return body;
        }

        throw new APIError(response, body);
    }
}

export default HttpClient;
