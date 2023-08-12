const path = require("path")
const { v4: uuid } = require("uuid")

const uploads = async (req, res, next) => {
    const file = req.files?.photo
    if (file) {
        const photo = file
        const photoName = uuid() + path.extname(file.name)
        photo.mv(process.cwd() + '/uploads/' + photoName)
        req.body.photo = photoName;
    }

    next()
}

module.exports = uploads