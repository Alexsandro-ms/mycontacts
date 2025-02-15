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
    async post(path, body) {
        const headers = new Headers({
            "Content-Type": "application/json",
        });

        const response = await fetch(`${this.baseUrl}${path}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers,
        }); // chamando a API
        await delay(500);

        let responseBody;
        const contentType = response.headers.get("content-type");

        if (contentType.includes("application/json")) {
            responseBody = await response.json();
        }

        if (response.ok) {
            return responseBody;
        }

        throw new APIError(response, responseBody);
    }
}

export default HttpClient;
