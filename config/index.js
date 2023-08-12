require("dotenv").config()

const { env } = process;

const config = {
    PORT: env.PORT || 5002,
    JWT_SCREET: env.JWT_SCREET || "SALOM"
}

module.exports = config;