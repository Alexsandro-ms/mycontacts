const { v4 } = require("uuid");
let contacts = [
    {
        id: v4(),
        name: "John Doe",
        email: "johndoe@email.com",
        phone: "123456789",
        category_id: v4(),
    },
    {
        id: v4(),
        name: "Jona Doe",
        email: "jonadoe@email.com",
        phone: "123456789",
        category_id: v4(),
    },
];
class ContactRepository {
    findAll() {
        return new Promise((resolve) => resolve(contacts));
    }
    findById(id) {
        return new Promise((resolve) =>
            resolve(contacts.find((contact) => contact.id === id))
        );
    }
    findByEmail(email) {
        return new Promise((resolve) =>
            resolve(contacts.find((contact) => contact.email === email))
        );
    }
    create({ name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const newContact = {
                id: v4(),
                name,
                email,
                phone,
                category_id,
            };

            contacts.push(newContact);

            resolve(newContact);
        });
    }
    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id != id);
            resolve();
        });
    }
    update(id, { name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const updatedContact = {
                id,
                name,
                email,
                phone,
                category_id,
            };

            contacts = contacts.map((contact) =>
                contact.id === id ? updatedContact : contact
            );

            resolve(updatedContact);
        });
    }
}

module.exports = new ContactRepository();
