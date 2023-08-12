const { v4 } = require("uuid")


class feedback {
    constructor(name, job, text, photo) {
        this.id = v4();
        this.name = name;
        this.job = job;
        this.text = text;
        this.photo = photo;
    }
}

module.exports = feedback;