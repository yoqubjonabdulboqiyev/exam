const adminRouter = require("./admin")
const contactRouter = require("./contact")
const feedbackRouter = require("./feedback")
const service = require("./service")




module.exports = [adminRouter, contactRouter, feedbackRouter, service]