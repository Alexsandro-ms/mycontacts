module.exports = (request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Define a origem
    response.setHeader("Access-Control-Allow-Methods", "*"); // Define os métodos
    response.setHeader("Access-Control-Allow-Headers", "*"); // Define os cabeçalhos
    response.setHeader("Access-Control-Control-Max-Age", "10"); // Define o tempo de vida da requisição armazenando em cache
    next();
};
