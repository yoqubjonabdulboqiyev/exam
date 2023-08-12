const config = require("../../config")


const run = (app) => {
    app.listen(
        config.PORT, () => {
            console.log(`Server started port: ${config.PORT}`);
        }
    )
}

module.exports = run