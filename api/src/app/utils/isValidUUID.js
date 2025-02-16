function isValidUUID(string) {
    const regex =
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi; // Valida se é um UUID
    return regex.test(string); // Retorna true ou false
}

module.exports = isValidUUID;
