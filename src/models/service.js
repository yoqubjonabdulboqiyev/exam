const { v4 } = require("uuid")


class Service {
    constructor(name, title, photo) {
        this.id = v4();
        this.name = name;
        this.title = title;
        this.photo = photo;
    }
}

module.exports = Service;