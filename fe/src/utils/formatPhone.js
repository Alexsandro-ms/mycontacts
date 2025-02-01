export default function formatPhone(phoneNumber) {
    return phoneNumber
        .replace(/\D/g, "") // Remove todos os caracteres que não são dígitos
        .replace(/^(\d{2})\B/, "($1) ") // Coloca parênteses em volta dos dois primeiros dígitos
        .replace(/(\d{1})?(\d{4})(\d{4})/, "$1$2-$3"); // Coloca hífen entre o quarto e o quinto dígitos
}
