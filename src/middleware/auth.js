const IO = require("../utils/Io")
const Admins = new IO("./database/admin.json")
const jwt = require("../utils/jwt")


const auth = async (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1] || req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Invalid token" })
    }
    const admins = await Admins.read();
    let tokenId;
    jwt.verify(token, (err, data) => {
        if (err) return res.status(401).json({ message: "Invalid Token" });
        tokenId = data.id;
    });
    const admin = admins.find((admin) => admin.id == tokenId)
    if (!admin) {
        return res.status(401).json({ message: "Invalid token" })
    }

    next()
}


module.exports = auth