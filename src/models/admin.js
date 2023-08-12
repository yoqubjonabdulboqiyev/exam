const { v4 } = require("uuid")


class Admin {
    constructor(firstName, lastName, phoneNumber, password, photo) {
        this.id = v4();
        this.firstName = firstName;
        this.lastName; lastName;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.photo = photo
    }
}

module.exports = Admin;