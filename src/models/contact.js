const { v4 } = require("uuid")


class Contact {
    constructor(name, phoneNumber, email, message) {
        this.id = v4();
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.message = message;
    }
}

module.exports = Contact;