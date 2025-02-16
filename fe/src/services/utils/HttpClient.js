import delay from "../../utils/delay";
import APIError from "../../errors/APIError";

class HttpClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl; // definindo a URL base da API
    }
    get(path, options) {
        return this.makeRequest(path, {
            method: "GET",
            headers: options?.headers,
        });
    }
    post(path, options) {
        return this.makeRequest(path, {
            method: "POST",
            body: options?.body,
            headers: options?.headers,
        });
    }

    async makeRequest(path, options) {
        await delay(500);

        const headers = new Headers();

        if (options.body) {
            // Percorre as chaves do objeto "headers" presente em "options"
            // e adiciona cada cabeçalho ao objeto "headers" usado na requisição.
            Object.keys(options.headers).forEach((name) => {
                headers.append(name, options.headers[name]);
            });
        } // Adicionando os headers quando há um corpo na requisição

        if (options.headers) {
            Object.entries(options.headers).forEach(([name, value]) => {
                headers.append(name, value);
            });
        }

        const response = await fetch(`${this.baseUrl}${path}`, {
            method: options.method,
            body: JSON.stringify(options.body),
            headers,
        });

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
