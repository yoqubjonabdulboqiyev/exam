const jwt = require("jsonwebtoken")

const config = require("../../config")


const sign = (paylod) => jwt.sign(paylod, config.JWT_SCREET, { expiresIn: "72h" })


const verify = (paylod, collback) => jwt.verify(paylod, config.JWT_SCREET, collback)


module.exports = {
    sign,
    verify
}