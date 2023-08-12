const Admin = require("../models/admin")
const IO = require("../utils/Io")
const Admins = new IO("./database/admin.json")
const jwt = require("../utils/jwt")
const { loginV, registerV } = require("../validation/admin")
const bcrypt = require("bcrypt")


const login = async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;
        const error = loginV({ phoneNumber, password })
        if (error) return res.status(400).json({ message: error.message });
        const admins = await Admins.read()
        const findAdmin = admins.find((admin) =>
            admin.phoneNumber == phoneNumber
        )
        if (!findAdmin) return res.status(403).json({ message: "phoneNumber invalid" })
        const newPassword = await bcrypt.compare(password, findAdmin.password)
        if (!newPassword) return res.status(403).json({ message: "password invalid" })
        const token = jwt.sign({ id: findAdmin.id })
        res.status(201).json({ message: "succesfull", data: token })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}


const register = async (req, res) => {
    try {
        console.log(req.body);
        const { firstName, lastName, phoneNumber, password, photo } = req.body;
        const error = registerV({ firstName, lastName, phoneNumber, password })
        if (error) return res.status(400).json({ message: error.message });

        const admins = await Admins.read()
        const findAdmin = admins.find((admin) =>
            admin.phoneNumber == phoneNumber
        )
        if (findAdmin) return res.status(403).json({ message: "PhoneNumber already exists" })
        const newPassword = await bcrypt.hash(password, 12)
        const admin = new Admin(firstName, lastName, phoneNumber, newPassword, photo);
        const result = admins.length ? [...admins, admin] : [admin]
        await Admins.write(result)
        const token = jwt.sign({ id: admin.id })
        res.status(201).json({ message: "succesfull", data: token })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}


module.exports = {
    login,
    register
}
